// var username = prompt("What the hell"); // Prompt takes input & returns the value taken
// console.log(username)

// var message = alert("you;re a patien"); // Alert displays a direct message on a pop-up
// console.log(message)

var button = document.querySelector("#btn-translate");

function clickhandler(){
    console.log("Clicked");
};

button.addEventListener("click", clickhandler)
