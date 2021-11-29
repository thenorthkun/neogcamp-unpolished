const input = document.querySelectorAll('.numbers')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector('#mul')
const divBtn = document.querySelector('#div')
const output = document.querySelector('#output')


function addtion(num1, num2){
  const sum = num1 + num2;
  return sum;
}

addBtn.addEventListener('click', function(){
    const sum = addtion(Number(input[0].value), Number(input[1].value))
    output.innerText = sum;
  })

function substraction(num1, num2){
    const sub = num2 - num1;
    return sub
}

subBtn.addEventListener('click', function(){
    const sub = substraction(Number(input[0].value), Number(input[1].value))
    output.innerText = sub;
  })

function multiply(num1, num2){
    const prod = num1*num2;
    return prod;
}

mulBtn.addEventListener('click', function(){
    const prod = multiply(Number(input[0].value), Number(input[1].value))
    output.innerText = prod;
  })

function division(num1,num2){
    const div = num2 / num1;
    return div;
}

divBtn.addEventListener('click', function(){
    const div = division(Number(input[0].value), Number(input[1].value))
    output.innerText = div;
  })


