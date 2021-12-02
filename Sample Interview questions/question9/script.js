const inputText = document.querySelector('#inputText')
const button = document.querySelector('#checkBtn')
const output = document.querySelector('#output')

// button.disabled = true;

button.addEventListener('click', function(){
    let value = inputText.value;
    if(value.length < 10){
        button.disabled = true;
        output.innerText = 'Error ❌'
    }
    else{
        button.disabled = false;
        output.innerText = 'Correct ✔️'
        inputText.style.color = "green"
    }
})

inputText.addEventListener('input', function(){
    let value = inputText.value;
    if(value.length < 10){
        button.disabled = true;
    }
    else{
        button.disabled = false;
    }
})

