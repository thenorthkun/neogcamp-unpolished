// Q. Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require('readline-sync');

var news = readlineSync.question("Enter the latest news you read ?\n")
var newsSource = readlineSync.question("What was the news source ?\n")

if(newsSource.toUpperCase() === 'WHATSAPP' || newsSource.toUpperCase() === 'FACEBOOK'){
  console.log("The news is fake, dont trust these sources")
}
else{
  console.log("On point! the news is legit.")}