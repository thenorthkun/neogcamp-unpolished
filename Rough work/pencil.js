const input =  document.querySelector('#input')
const button = document.querySelector('#callAPI')
const output = document.querySelector('#output')

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getResponse(text){
    return URL + '?' + 'text=' + text;
}

button.addEventListener('click', function(){
    let inputName = input.value;
    fetch(getResponse(inputName))
    .then(response => response.json())
    .then(json => {
        var output1 = json.contents.translated;
        var output2 = json.contents.text;
        output.innerText = `${output1} ${output2.toUpperCase()}`
    })

})