const text = document.querySelector('#text')
const redBtn = document.querySelector('#red')
const greenBtn = document.querySelector('#green')
const blueBtn = document.querySelector('#blue')
const output = document.querySelector('#output')

text.addEventListener('input', function(){
    output.innerHTML = text.value;
})

redBtn.addEventListener('click', function(){
    output.style.color = 'red';
})

greenBtn.addEventListener('click', function(){
    output.style.color = 'green';
})

blueBtn.addEventListener('click', function(){
    output.style.color = 'blue';
})