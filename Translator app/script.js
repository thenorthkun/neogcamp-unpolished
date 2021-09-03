// var username = prompt("What the hell"); // Prompt takes input & returns the value taken
// console.log(username)

// var message = alert("you;re a patien"); // Alert displays a direct message on a pop-up
// console.log(message)

var input = document.querySelector("#input");
var button = document.querySelector("#btn-translate");

console.log(input)

function clickhandler(){
    console.log("Clicked");
    console.log(input.value)
};

button.addEventListener("click", clickhandler)
