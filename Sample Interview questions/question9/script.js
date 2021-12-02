const inputText = document.querySelector('#inputText')
const button = document.querySelector('#checkBtn')
const output = document.querySelector('#output')

button.disabled = true;

inputText.addEventListener('input', function(){
    let value = inputText.value;
    if(value.length > 10){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
})