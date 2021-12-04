const text = document.querySelector('#input')
const h1Btn = document.querySelector('#h1')
const h2Btn = document.querySelector('#h2')
const h3Btn = document.querySelector('#h3')


text.addEventListener('input', function(){
    output.innerHTML = text.value;
})

h1Btn.addEventListener('click', function increase(){
    output.innerHTML = `<h1>${text.value}</h1>`;
})

h2Btn.addEventListener('click', function decrease(){
    output.innerHTML = `<h2>${text.value}</h2>`;

})

h3Btn.addEventListener('click', function decrease(){
    output.innerHTML = `<h3>${text.value}</h3>`;

})