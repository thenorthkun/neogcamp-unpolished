const input = document.querySelectorAll(".angle-input")
const button = document.querySelector('#check-btn')
const output = document.querySelector('#output')

function sumOfAngles(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}

button.addEventListener('click', function isTriangle(){
    const sum = sumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value)) //here we are using typcasting when using Number(input.value) bcoz the input recorded are in typeOf string, so in order to convert it into int type we use this.
    
    if(sum === 180){
        console.log('correct')
        output.innerText = 'Yay, the angles form a triangle'
    }
    else{
        output.innerText = 'Nope nope, this isnt a triangle'
    }
})