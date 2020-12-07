const chalk = require ('chalk')
var readlineSync = require ('readline-sync')
// console.log("Dhruv Rathore");       

var readName = readlineSync.question(chalk.blue("What is your name ?\n"))
var welcomeMessage = "Hola amigo " + readName + "! Welcome to the 'Do you know me QUIZ' " 
console.log(chalk.greenBright(welcomeMessage))

var score = 0;
console.log(chalk.yellowBright("YOUR CURRENT SCORE IS " + score))
    console.log("-------------------------------------------")


var questions = [
  {
    question: "Do I have a girlfriend \n",
    answer: "No"
  },
  {
    question: "Where do I live? \n",
    answer: "Jaipur"
  },
  {
    question: "What is my age? \n",
    answer: "20"
  },
  {
    question: "When is my birthday \n",
    answer: "10 December"
  },
  {
    question: "In which college do I study ? \n",
    answer: "Chandigarh University"
  }, 
  {
    question: "What is my favorite food ? \n",
    answer: "Biryani"
  },
  {
    question: "What is my favorite sport ? \n",
    answer: "Football"
  },
  {
    question: "Do I like to watch Movies ? \n",
    answer: "Yes"
  }, 
  {
    question: "Am I a travelling enthusiast ? \n",
    answer: "Yes"
  }]

function play(question,answer)
{
  var userAns = readlineSync.question(question)
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    score++
    console.log(chalk.bgCyanBright.black("THAT'S CORRECT ! \n" + "CURRENT SCORE : " + score))
    console.log("-------------------")
  }
  else
  {
    score--
    console.log(chalk.bgRedBright.whiteBright("WHOOPS ! Shame. \n" + "CURRENT SCORE : " + score)) 
    console.log("-------------------")

  }
}

for (i = 0; i < questions.length; i++) 
{
  play(questions[i].question, questions[i].answer)
}
console.log(chalk.bgMagenta("Alright, that's enough insight.\nYOUR TOTAL SCORE IS :  " + score + "\n"))

console.log(chalk.yellowBright("\nPrevious Top Scorers:\nHarsh: 8\nGeetisha: 6\nArpit: 6\n"))


highScores = [8, 7, 6]
for (i = 0; i < highScores.length; i++) 
{
  if (score >= highScores[i])
  {
    console.log(chalk.bold.black.bgGreen("Congrats. You're the top scorer, I guess you know me the best afterall."))
    break
    }
}
