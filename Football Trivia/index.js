const chalk = require('chalk')
var readlineSync = require('readline-sync')


var readName = readlineSync.question(chalk.bgMagentaBright("What's your name ?\n"))
var welcomeMessage = "Hey there player ! So " + readName + " let's test your knowledge about the sport \n"
console.log(chalk.blueBright(welcomeMessage))

var score = 0;
console.log(chalk.yellowBright("YOUR CURRENT SCORE IS " + score))
console.log("here we go, it's KICK OFF ! ")
console.log("-------------------------------------------")

var questions = [
  {
    question : "How many minutes are played in football ?\n",
    answer : "90 Mins"
  },
  {
    question : "Fill in the blank :- \nThere are __ players from a team of a field\n",
    answer : "11" 
  },
  {
    question : "Which country has won the most World Cups in the history ?\n",
    answer : "Brazil"
  },
  {
    question : "In which league does FC Barcelona play ?\n",
    answer : "LaLiga"
  },
  {
    question : "Which is the most popular league in the world ?\n",
    answer : "English Premier league"
  },
  {
    question : "The biggest club comeptetion in professional football ?\n",
    answer : "UEFA Champions league"
  },
  {
    question : "Which club has the most UCL titles ?\n",
    answer : "Real Madrid"
  },
  {
    question : "In which position does Lionel Messi play ?\n",
    answer : "Right Winger"
  },
  {
    question : "In which position does Cristiano Ronaldo play ?\n",
    answer : "Striker"
  }]

function play(question,answer)
{
  var userAns = readlineSync.question(question)
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    score = score + 3
    console.log(chalk.bgCyan.black("THAT'S A GOAL ! \n" + "CURRENT SCORE : " + score))
    console.log("-------------------")
  }
  else
  {
    score = score -1
    console.log(chalk.bgRed.whiteBright("OOPS ! MISSED IT \n" + "CURRENT SCORE : " + score)) 
    console.log("-------------------")

  }
}

for (i = 0; i < questions.length; i++) 
{
  play(questions[i].question, questions[i].answer)
}
console.log(chalk.bgMagenta("!!!! FULL TIME !!!! \nYOUR TOTAL SCORE IS :  " + score + "\n"))

console.log(chalk.yellowBright("\nPrevious Top Scorers:\nVaibhav: 10\nRaghav: 9\nHarshu: 8\n"))


highScores = [10, 9, 8]
for (i = 0; i < highScores.length; i++) 
{
  if (score >= highScores[i])
  {
    console.log(chalk.bold.black.bgGreen("VAMOS ! You're the top scorer of the tournament \nThe Golden Boot title goes to you" + readName))
    break
    }
}