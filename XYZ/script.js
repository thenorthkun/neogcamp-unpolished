const quoteText= document.querySelector('#quote-text');
const quoteTags= document.querySelector('#quote-tag');
const quoteAuthor= document.querySelector('#quote-author');
const genQuoteBtn= document.querySelector('#gen-quote-btn');

function errorHandler(error){
    alert("an error occured while processing");
}

var x = function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        // quoteText.textContent= data.content;
        quoteText.innerText = data.content;
        // quoteTags.textContent = data.tags;
        quoteTags.innerText = data.tags;
        // quoteAuthor.textContent = `-- ${data.author}`
        quoteAuthor.innerText = data.author;
    })
    .catch(errorHandler)
}

console.log(x)

genQuoteBtn.addEventListener('click', x)