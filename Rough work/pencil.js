const num1 = document.querySelector('#number1')
const num2 = document.querySelector('#number2')

const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector('#mul')
const divBtn = document.querySelector('#div')

const output = document.querySelector('#output')


addBtn.addEventListener('click', function addition(){
    const sum = Number(num1.value) + Number(num2.value);
    output.innerText = sum;
    
})

subBtn.addEventListener('click', function addition(){
    const sum = Number(num1.value) - Number(num2.value);
    output.innerText = sum;
    
})

mulBtn.addEventListener('click', function addition(){
    const sum = Number(num1.value) * Number(num2.value);
    output.innerText = sum;
    
})

divBtn.addEventListener('click', function addition(){
    const sum = Number(num1.value) % Number(num2.value);
    output.innerText = sum;
    
})

