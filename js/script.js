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
const quotes = [
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

// Math functions were used to return a value of the Array between 0 and the length of the whole array,
function getRandomQuote(){
let ranQuoteNum = Math.floor(Math.random()* quotes.length);
let ranQuote = quotes[ranQuoteNum];
return ranQuote ;

};
// logged out the function to assure it worked properly before moving forward.
console.log(getRandomQuote());

// set a variable to an arrow function  to get the value of rgb for the background color
// 256 is the max for color and we need a random number between that and 0 for the R, G, and B
// used bgColor variable to rgb function and set to the documents background.
const rgbRandom = (()=> {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + R + "," + G + "," + B + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  })



/***
 * `printQuote` function
***/

// just created strings to produce qoutes and all there objects by using object properties if they are available
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

//finally, created a var to hold setInterval function with 20 seconds between each load
//add to the buttons event listener
const refresher = window.setInterval(() => {
  printQuote();
}, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);