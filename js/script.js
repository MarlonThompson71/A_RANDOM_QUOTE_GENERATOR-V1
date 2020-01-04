/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let myMessage = '';
const myQuotes = [
    {quote: "The more sand has escaped from the hourglass of our life, the clearer we should see through it.", source: "Niccolo Machiavell" 
     },
     
    {quote: "One day, you might look up and see me playing the game at 50. Don't laugh. Never say never, because limits, like fears, are often just an illusion.", source: "Michael Jordan", citation: '<a href ="https://www.brainyquote.com/quotes/michael_jordan_737742" >' + "BrainyQuote" + '</a>'
     },
    {quote: "Stay Hungry, Stay Foolish" , source: "Steve Jobs", year: 2005},
    {quote: "No materials could measure what my soul's worth" , source:"Nipsey Hussle" , citation: "Fountain of Youth", year: 2012},
    {quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.", source: "Joel Brown"}






]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
let ranQuoteNum = Math.floor(Math.random()* myQuotes.length);
let ranQuote = myQuotes[ranQuoteNum];
return ranQuote ;

};
console.log(getRandomQuote());

const rgbRandom = (()=>{
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  })



/***
 * `printQuote` function
***/
function printQuote(){
let myRanQuote = getRandomQuote();
let quote = '<p class = "quote">' + myRanQuote.quote + '</p>';
let source ='<p class = "source">' + myRanQuote.source;

if(myRanQuote.citation){
  source += '<span class = "citation">' + myRanQuote.citation + '</span>';
}
  
  if(myRanQuote.year){
source += '<span class = "year">' + myRanQuote.year + '</span>';

}
+ '</p>';


myMessage = quote + source;
rgbRandom();
document.getElementById("quote-box").innerHTML = myMessage;

return myMessage;
}


const refresher = window.setInterval(() => {
  printQuote();
}, 20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote,refresher, false);