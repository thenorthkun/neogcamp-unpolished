const input = document.querySelector("#input")
const redBtn = document.querySelector('#red')
const greenBtn = document.querySelector('#green')
const blueBtn = document.querySelector('#blue')
const output = document.querySelector('#output')

input.addEventListener('input', function(){
    output.innerText = input.value;
})

redBtn.addEventListener('click', function(){
    // input.style.color = "red"
    output.style.color = "red"
})

greenBtn.addEventListener('click', function(){
    // input.style.color = "green"
    output.style.color = "green"
})

blueBtn.addEventListener('click', function(){
    // input.style.color = "blue"
    output.style.color = "blue"
})

