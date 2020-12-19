// console.log("Hello! Script is working ")

// alert("This script works")

// var username = prompt("What your name")  /* INPUT */

// var welcomeMessage = "This script works"  + username  /* PROCESSING */

// alert(welcomeMessage)  /* OUTPUT */

var btnTranslate = document.querySelector("#btn-translate") 
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector('#output')


var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


function getTranslationURL(text){
    return serverURL + "?" + "text = " + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something's wrong with server, try again after sometime")
}

function clickHandler() {
    // outputDiv.innerText = "bananananaanananaana  " + txtInput.value;
    var inputText = txtInput.value;  //taking input


    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)