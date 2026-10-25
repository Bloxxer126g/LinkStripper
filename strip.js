let StripButton = document.getElementById("Strip")
let StripInput = document.getElementById("Input")
let StripOutput = document.getElementById("Output")

StripButton.addEventListener("click", function(){

    let Site = ""

    try {
        Site = document.querySelector("input[type='radio'][name=site]:checked").value;
    } catch {
        StripOutput.href = ""
        StripOutput.innerText = "Select a website from above!"

        return
    }

    let String = StripInput.value

    if (Site == "Amazon") {
        console.log("Amazon")
        String = String.split("?")[0]
        String = String.split("/dp/")[1]
        String = "https://www.amazon.co.uk//dp/"+String
    } else if (Site == "eBay") {
        console.log("eBay")
        String = String.split("?")[0]
    }

    StripOutput.href = String
    StripOutput.innerText = String
})