var readlineSync = require('readline-sync');

// question 1 = console your username & welcome user

// var userName = readlineSync.question("Enter your name ?\n");
// var welcomeMessage = "Welcome " + userName + " !\n";
// console.log(welcomeMessage)


// // question 2 = read user age & console different statements in a simple (if) loop

// var userAge = readlineSync.question("Enter your age : \n");
// if(userAge > 25){
//   console.log("Damn ! you're a man now");
// }
// else{
//   console.log("you puny guy !")
// }

// // question 3 = make a QnA and increase/decrease score on correct/incorrect answer (try this on multiple questions)

// var question = "Where do I live ?\n";
// var answer = "Chandigarh";

// var userAnswer = readlineSync.question(question)
// score = 0;

// if(userAnswer === answer){
//   score = score + 1;
//   console.log("That is correct !\nYour current score: " + score);
// }
// else{
//   score = score - 1;
//   console.log("Oops, it's incorrect\nYour current score: " + score)
// }

// var question = readlineSync.question("What is my college\n");
// var answer = "Chandigarh Universiy";

// if(question === answer){
//   score = score + 1;
//   console.log("That is correct !\nYour current score: " + score);
// }
// else{
//   score = score - 1;
//   console.log("Oops, it's incorrect\nYour current score: " + score)
// }

// question 4 = create a function to add 2 numbers

// function add(number1, number2){
//   var sum = number1 + number2;
//   return sum;
// }
// var result = add(5,6);
// console.log(result)

// // question 5 - Make a question QnA using functions

// function test(question,answer){
//   var userAnswer = readlineSync.question(question);
//   if(userAnswer === answer){
//     console.log("That is correct !")
//   }
//   else{
//     console.log("That is incorrect !")
//   }
// }

// question1 = "What is my favorite football club?\n";
// answer1 = "FC Barcelona"

// test(question1,answer1)

// question 6 - Print your name 5 times

// var userName = readlineSync.question("Enter your name ?\n");
// for(i=0;i<6;i++){
//   console.log(userName)
// }

// // question 7 - Given a number (22), add (i) to 22 where i ranges from 0-7 & print the numbers. The output should look like 22, 23, 24, 25, 26

// var number = 22;
// for (i=0;i<8;i++){
//   number2 = number + i;
//   console.log(number2)
// }

// question 8 - Print a right-angled star pattern (HINT: use str = "" to begin adding "*")

// str = "";
// for(i=1;i<6;i++){
//   str = str + "*"
//   console.log(str)
// }


// // question 9 - Use JS data structure - Array & access the array elements & print them one by one

// list = ['Dhruv', 'Harshu', 'Thussa'];
// for(i=0;i<list.length;i++){
//   console.log(list[i])
// }

// question 10 - Create several key-value pairs & play around with them (console values n keys, compare b/w them)

// var box1 = {
//   player: "Messi",
//   position: "RW",
//   nationaltiy: "Argentina",
//   rating: 94
// }

// var box2 = {
//   player: "Ronaldo",
//   position: "LW",
//   nationaltiy: "Portugal",
//   rating: 93
// }

// console.log(box1.rating > box2.rating)



// QUIZ GAME

var userName = readlineSync.question("What is your name : \n");
var welcomeMessage = "Welcome " + userName + " !\n";
console.log(welcomeMessage)

var score = 0;  //(var / (let))

var quiz = [
  {
    question : "What is my age ?\n",
    answer : '21'
  },
  {
    question : "What is my college\n",
    answer : "Chandigarh University"
  },
  {
    question : "Where is my home?\n",
    answer : "Jaipur"
  },
  {
    question : "What is my surname\n",
    answer : "Rathore"
  }
]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() != answer.toUpperCase()){
    score--;
    console.log("That is incorrect ! " + score)
  }  
  else{
    score++;
    console.log("THat is correct ! " + score);
  }
  

 
}


for(i=0; i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer)
}

console.log("Your final score is : \n" + score)

