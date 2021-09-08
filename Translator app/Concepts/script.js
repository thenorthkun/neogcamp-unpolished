// var username = prompt("What the hell"); // PROMPT TAKES INPUT & RETURNS THE VALUE TAKEN
// console.log(username)

// var message = alert("you;re a patien"); // ALERT DISPLAYS A DIRECT MESSAGE ON A POP-UP
// console.log(message)

var input = document.querySelector("#input");
var button = document.querySelector("#btn-translate");
var output = document.querySelector("#output");


// output.innerHTML = input;
// output.innerHTML = input.value;
// output.innerHTML = input + input.value;

// output.innerHTML = "input " + input;
// output.innerHTML = "Oh my my myy";
// output.innerHTML = "Oh my my myy" + input;


// console.log(input)

// function clickhandler(){
//     console.log("Clicked");
//     console.log(input.value);
// };

// function clickhandler(){
//     output.innerText = "This input will be translated : " + input.value;
//     // output.innerText = "This input will be translated : " + input;

// }

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    // return serverURL;
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("An error occured " + error );
    alert("An unexpected error was caught !");
     
}
function clickhandler(){

    var inputText = input.value; // TAKING INPUT

    // CALLING SERVER FOR PROCESSING
    fetch(getTranslationURL(inputText)) // RUNS THE FUNCTION WHERE TEXT = INPUTTEXT
    .then(response =>  response.json())
    // .then(json => console.log(json))
    // .then(json => console.log(json.contents.text))
    // .then(json => console.log(json.contents.translated))
    .then(json => {
        // var translatedText = json.contents.text;
        var translatedText = json.contents.translated;
        output.innerText = translatedText; // OUTPUT
    })


    .catch(errorHandler) //WHEN THE SERVER IS DOWN OR GETS CAUGHT IN AN ERROR 
};

button.addEventListener("click", clickhandler)

