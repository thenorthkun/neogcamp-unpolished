const input = document.querySelector('#input')
const incBtn = document.querySelector('#increase')
const decBtn = document.querySelector('#decrease')
const output = document.querySelector('#output')

const text = input.value
var size = 16;

input.addEventListener('input', function (){
    output.innerText = input.value;
    
})

incBtn.addEventListener('click', function incFont(){
    size = size + 2;
    output.style.fontSize = `${size}px`

})
