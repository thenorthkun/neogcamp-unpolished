const button = document.querySelector('#callAPI')
const output = document.querySelector('#output')

var URL = "https://BROKENlessonfourapi.tanaypratap.repl.co/translate/yoda.json"

button.addEventListener('click', function(){
    fetch(URL)
    .then(response => console.log(response))

    .catch(errorHandler)
})

function errorHandler(error){
    output.innerText = error.message;
}