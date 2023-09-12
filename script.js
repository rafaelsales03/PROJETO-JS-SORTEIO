const button = document.querySelector(".click-button")
const numberResult = document.querySelector(".number-result")


function buttonClick(){

    const min = Math.ceil(document.querySelector(".min-value").value)
    const max = Math.floor(document.querySelector(".max-value").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    numberResult.innerHTML = result

    console.log(numberResult)
    

}


button.addEventListener("click" , buttonClick)