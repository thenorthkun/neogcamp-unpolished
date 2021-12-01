const input = document.querySelector("#input")
const redBtn = document.querySelector('#red')
const greenBtn = document.querySelector('#green')
const blueBtn = document.querySelector('#blue')
const output = document.querySelector('#output')

redBtn.addEventListener('click', function(){
    input.style.color = "red"
})

greenBtn.addEventListener('click', function(){
    input.style.color = "green"
})

blueBtn.addEventListener('click', function(){
    input.style.color = "blue"
})