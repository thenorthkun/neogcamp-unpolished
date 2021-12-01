const input = document.querySelector("#input")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")

increase.addEventListener("click", increaseFunction)
decrease.addEventListener("click" , decreaseFunction)

var size = 16;
// var defaultSize = 16;


function increaseFunction(){
    size = size + 2 // 16+2 = 18
    input.style.fontSize = `${size}px`;
}


function decreaseFunction(){
    size = size - 2 //16-2 = 14
    input.style.fontSize = `${size}px`;
}

