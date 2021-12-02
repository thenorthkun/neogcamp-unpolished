const input = document.querySelector('#input')
const button = document.querySelector('#getAPI')
const output = document.querySelector('#output')

var outputURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function getAPIresponse(name){
    return outputURL + "?" + "text=" + name;
}

button.addEventListener('click', function(){

    var name = input.value;

    fetch(getAPIresponse(name))
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {
        var outputText1 = json.contents.translated;
        var outputText2 = json.contents.text;
        output.innerText = `${outputText1} ${outputText2.toUpperCase()}`
    })
})