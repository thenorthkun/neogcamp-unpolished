// var username = prompt("What the hell"); // Prompt takes input & returns the value taken
// console.log(username)

// var message = alert("you;re a patien"); // Alert displays a direct message on a pop-up
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

function clickhandler(){
    output.innerText = "This input will be translated : " + input.value;
    // output.innerText = "This input will be translated : " + input;

}

button.addEventListener("click", clickhandler)
