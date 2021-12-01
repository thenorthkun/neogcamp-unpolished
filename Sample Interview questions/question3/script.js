const input = document.querySelector('#input')
const h1Btn = document.querySelector('#h1')
const h2Btn = document.querySelector('#h2')
const h3Btn = document.querySelector('#h3')
const output = document.querySelector('#output')



h1Btn.addEventListener('click', function(){
    output.innerHTML = `<h1>${input.value}</h1>`;
})

h2Btn.addEventListener('click', function(){
    output.innerHTML = `<h2>${input.value}</h2>`;
})

h3Btn.addEventListener('click', function(){
    output.innerHTML = `<h3>${input.value}</h3>`;
})