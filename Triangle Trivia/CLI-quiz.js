const quizForm = document.querySelector('#quiz-form')
const checkBtn = document.querySelector('#checkAnswers-Btn')
const output = document.querySelector('#output')

const correctAnswers = ["Yes", "90°", "3", "scalene", "isosceles"] // ARRAY FOR STORING CORRECT ANSWERS FOR FURTHER RECTIFICATION

checkBtn.addEventListener('click', function calculateScore(){
    let score = 0;
    let index = 0; // ITERATOR 'INDEX' FOR ITERATING OVER EACH ARRAY ELEMENT
    const formResults = new FormData(quizForm) 
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++
    }

    output.innerText = "The score is " + score;

})