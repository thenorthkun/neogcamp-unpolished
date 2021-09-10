var input = document.querySelector('#input')
var button = document.querySelector('#btn-translate')
var output = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationsURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickhandler(){
    var inputText = input.value;

    fetch(getTranslationsURL(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.innerHTML = outputText;}
        )
}


button.addEventListener("click", clickhandler)