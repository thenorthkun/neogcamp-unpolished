var readlineSync = require('readline-sync')


// question 1 = console your username & welcome user

console.log('Dhruv Rathore')

var userName = readlineSync.question('What is your name ?\n');
var welcomeMessage = "Welcome "  + userName;
console.log(userName)


// question 2 = read user age & console different statements in a simple (if) loop


var age = readlineSync.question('What is your age ?\n');
if (age >= 25){
  console.log("Damn you're big")
  }
  else {
    console.log("Puny bitch you")
  }


// question 3 = make a QnA and increase/decrease score on correct/incorrect answer (try              this multiple questions)


var question1 = readlineSync.question('Does Messi play for Barcelona ?\n')
var answer1 = "yes";
var score = 0;

if (question1 === answer1){
  score--
  console.log("Oops youre not a good fan ");
  console.log("Current score is : " + score);
  } 
  else{
    score++
    console.log("Good you're a good man ");
    console.log("Current score is : " + score);
  }


var question2 = readlineSync.question('Does Messi play for Argentina\n')
var answer2 = "no";
var score = 0;

if (question2 === answer2){
  score--
  console.log("Oops youre not a good fan ");
  console.log("Current score is : " + score);
  } 
  else{
    score++
    console.log("Good you're a good man ");
    console.log("Current score is : " + score);
  }


// question 4 = create a function to add 2 numbers

  function add(num1,num2){
    console.log("1st number is:", num1, "\n2nd number is:", num2);
    var sum = num1 + num2;
    return sum;
  }

  var result = add(2,5)
  console.log("The sum is : " + result)



// Q - Make a QnA using functions

var question = "Where do I live ?\n";
var answer = "Jaipur"
 
  function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer){
      console.log("That is correct")
    }
    else{
      console.log("Incorrect")
    }
  }

  play(question,answer)


// Q - Print your name 5 times


for (var i=0; i<5; i++){
  console.log("Dhruv")
}

function add(num1,num2){
  num1 = num1 +
}


// Q - Given a number (22), add (i) to 22 where i ranges from 0-7 & print the numbers. The output should look like 22, 23, 24, 25, 26

num = 22;

for (var i=0; i<10; i++ ){
  var num2 = num + i;
  console.log(num2) 
}


// Q. Print a right-angled star pattern (HINT: use str = "" to begin adding "*")

let str = ""

for (i=1; i<6;i++){
  for(j=0;j<i;j++){
    str = str + "*";

  }
  str = str + "\n";
}
console.log(str)


// Q - Use JS data structure - Array & access the array elements & print them one by one

var list = ["Barca", "Madrid", "Chelsea", "Man City"];

for (i=0; i<list.length; i++){
  console.log(list[i]);
}

// Q - Create several key-value pairs & play around with them (console values n keys, compare b/w them)

var question1 = {
  player: "Messi",
  club: "FC Barcelona",
  rating: "94"
}

var question2 = {
  player: "Ronaldo",
  club: "Juventus",
  rating: "93"
}

var question3 = {
  player: "Neymar",
  club: "PSG",
  rating: "92"
}

// console.log(question2.rating < question1.rating)

var list = [question1, question2, question3]

for(i=0; i<list.length; i++){
    console.log(list[i]);
  }


// QUIZ GAME

var userName = readlineSync.question("Enter your name: \n");
var welcomeMessage = "Welcome ! " + userName + " to the quiz";
console.log(welcomeMessage)

var score = 0;

var quiz = [
  {
    question: "What is the captial of Germany ?\n",
    answer: "Berlin"
  },
  {
    question: "In which country is Madrid situated ?\n",
    answer: "Spain"
  },
  {
    question: "How many countries are there in the world ?\n",
    answer: "195"
  },
  {
    question: "What is the number of continents ?\n",
    answer: "7"
  }
]

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log("That is correct !\nYour current score is :  " + score)
  }
  else{
    score--;
    console.log("Oops, it's incorrect\nYour current scoreis : " + score)
  }
}

for (i=0;i<quiz.length;i++){
  play(quiz[i].question, quiz[i].answer)

}
console.log("Your final score is : \n" + score)
