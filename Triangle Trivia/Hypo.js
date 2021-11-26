const input = document.querySelectorAll('.side-input')
const button = document.querySelector('#check-Btn')
const output = document.querySelector('#output')

function caluculateSqaure(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
    
}

button.addEventListener('click', function calculateHypo(){
    const sumOfSquares = caluculateSqaure(Number(input[0].value), Number(input[1].value))
    // console.log(sumOfSquares)
    const lengthOFHypo = Math.sqrt(sumOfSquares)
    output.innerText = 'The length of your hyptenuse is : ' + lengthOFHypo;
})