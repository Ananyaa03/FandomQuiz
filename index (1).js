var readlineSync = require("readline-sync");

var highscore = {
  name: "Stranger",
  topScore: 5
};

var score = 0;

quizItems = [
  {
    question: "Monica organises her towels into several categories. But how many? ",
    answer: "11"
  },
  {
    question: "Chandler and Joey had two pets. What were they called ",
    answer: "Chick.Jr and Duck.Jr"
  },
  {
    question: "What did Ross dress up as to teach Ben about Christmas and Hanukkah? ",
    answer: "The Holiday Armadilo"
  },
  {
    question: "Phoebe has a twin sister. What's her name? ",
    answer: "Ursula"
  },
  {
    question: "How many times has Ross been married? ",
    answer: "3"
  },
  {
    question: "What instrument does Phoebe Buffay play? ",
    answer: "Guitar"
  },
  {
    question: "What is the name of Rachel's hairless cat? ",
    answer: "Mrs. Whiskerson"
  },
]

function welcomeMessage(){
  var username = readlineSync.question("Hola! Please enter your name:")
  console.log("\nHello " +  username + ":)");
  console.log("\n")
  console.log("Welcome to 'MY FAVOURITE SHOW - FRIENDS?' quiz.")
  readlineSync.question("Let's see if you can beat the Highscore " + highscore.topScore + "? \nPress Enter to play.\n");
  playGame(); 
}


function checkAnswer(n , question , answer){
  var userAnswer = readlineSync.question(n + ". "+ question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Correct! ;)")
    score++;
  }
  else{
    console.log("Incorrect. :(");
  }
  console.log("Score: "+ score+"\n");
}

function playGame(){
  for(var i = 0; i<quizItems.length; i++){
    checkAnswer(i+1, quizItems[i].question , quizItems[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log("Hurray! Your total score is " +score);

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("\nCongratulations! :) You have beaten the highscore. \nNew HIGHSCORE: " + score)
  }
  console.log("\nThanks for playing.")
}

welcomeMessage();