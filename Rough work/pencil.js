const button = document.querySelector('#callAPI')
const output = document.querySelector('#output')

var URL = "https://reqres.in/api/users/23"

button.addEventListener('click', function(){
    fetch(URL)

    .then(response => {
        if(response.status === 404){
            output.innerText = 'Page not found'
        }
        else if(response.status === 401){
            output.innerText = 'you are not logged in'
        }
    })
    
})
