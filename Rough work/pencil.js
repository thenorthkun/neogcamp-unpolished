const input = document.querySelector('#input')
const button = document.querySelector('#check')
const output = document.querySelector('#output')

button.disabled = true;

input.addEventListener('input', function(){
    let password = input.value;
    if(password.length < 10){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
})

button.addEventListener('click', function(){
    let password = input.value;
    if(password.length < 10){
        button.disabled = true;
    }
    else{
        button.disabled = false;
        output.innerText = 'success'
        input.style.color = 'green'
    }
})