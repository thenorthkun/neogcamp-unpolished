const billAmt = document.querySelector('#billAmount')
const nextBtn = document.querySelector('#next-btn')
const cashGvn = document.querySelector('#cashGiven')
const checkBtn = document.querySelector('#check-btn')

const msg = document.querySelector('#message')

const output = document.querySelector('#output')
const outputDiv = document.querySelector('#box')

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll('#noOfNotes')

function showMessage(text){
    msg.style.display = "block";
    msg.innerText = text;

}

nextBtn.addEventListener('click', function() {
    // console.log(billAmt.value)
    if(billAmt.value > 0){
        nextBtn.style.display = "none";
        outputDiv.style.display = "block";
    }
    else{
        showMessage("Enter valid bill amount.")
    }})