let quote = document.getElementById("quote")
let author = document.getElementById("author")

let body = document.getElementById("body")
let button = document.getElementById("quotebtn")
let xicon = document.getElementById("quoteicon3")
let giticon = document.getElementById("quoteicon2")
let quoteicon = document.getElementById("quoteicon1")

let quotes = [
    "You must be the change you wish to see in the world.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "The only thing we have to fear is fear itself.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Do one thing every day that scares you.",
    "Well done is better than well said.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Be yourself; everyone else is already taken."
]
let authors = ["-Mahatma Gandhi", 
               "-Mother Teresa",
               "-Franklin D. Roosevelt", 
               "-Martin Luther King Jr", 
               "-Eleanor Roosevelt", 
               "-Benjamin Franklin", 
               "-Helen Keller", 
               "-Aristotle", 
               "-Ralph Waldo Emerson", 
               "-Oscar Wilde"]


let colors =["blue", "red", "black", "magneta", "gold", "green", "turquoise", "orange", "gray", "mediumpurple"]


function ChangeQuote(){

    let i = Math.floor(Math.random() * 10);

    //color change
    body.style.backgroundColor = colors[i]
    button.style.backgroundColor = colors[i]
    xicon.style.color = colors[i]
    giticon.style.color = colors[i]
    quoteicon.style.color = colors[i]
    quote.style.color = colors[i]
    author.style.color = colors[i]

    //quote change
    quote.innerHTML = quotes[i]
    author.innerHTML = authors[i]
}

