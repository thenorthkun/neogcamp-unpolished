const button = document.querySelector('#getAPI')
const output = document.querySelector('#output')

var URL = "https://BROKENlessonfourapi.tanaypratap.repl.co/translate/yoda.json";


button.addEventListener('click', function(){
    fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

    .catch(errorHandler)
})

function errorHandler(error){
    output.innerText = error.message;
    // output.innerText = error;

}