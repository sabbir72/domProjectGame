let randomNumber= Math.trunc(Math.random() * 30)+1;
let Score= 4
let HighScore=0
//console.log(randomNumber)

let between1To5=document.querySelector(".a");
let between6To10=document.querySelector(".b");
let between11To15=document.querySelector(".c");
let between16To20=document.querySelector(".d");
let between21To25=document.querySelector(".e");
let between26To30=document.querySelector(".f");


// ressult display part
let Greet=document.querySelector(".greet");
let scorePoint=document.querySelector(".score_num");
let BG_win=document.querySelector("body");
let Number =document.querySelector(".number");
let Btn =document.querySelector(".btn");
let HighScoreNumber = document.querySelector(".highScore_num");

function winGreet(){
 Greet.textContent = "Your Number Matched So You Win!";
 BG_win.style.backgroundColor = "#020f31";
 //    BG_win.style.backgroundImage ="url('=')";
 Number.textContent = randomNumber;
 if (Score > HighScore) {
   HighScore = Score;
   HighScoreNumber.textContent = ":" + HighScore;
 }
}

function loosGreet(){
    Score > 1
      ? (Greet.textContent = "Not Match")
      : (Greet.textContent = "You loss this Game.");
      Score--;
      scorePoint.textContent = ":" + Score;
}

function winLoos(){

}

between1To5.addEventListener("click", function () {
    if(Score>0){
 if (
   randomNumber === 1 ||
   randomNumber === 2 ||
   randomNumber === 3 ||
   randomNumber === 4 ||
   randomNumber === 5
 ) {
  winGreet()

 } else {
  loosGreet()
 }
}
 
});
between6To10.addEventListener("click", function () {
    if(Score>0){
  if (
    randomNumber === 6 ||
    randomNumber === 7 ||
    randomNumber === 8 ||
    randomNumber === 9 ||
    randomNumber === 10
  ) {
      winGreet()
  }else{
      loosGreet()
  }
}
});
between11To15.addEventListener("click", function () {
    if(Score>0){
  if (
    randomNumber === 11 ||
    randomNumber === 12 ||
    randomNumber === 13 ||
    randomNumber === 14 ||
    randomNumber === 15
  ) {
   winGreet()
  } else {
   loosGreet()
  }
}
});
between16To20.addEventListener("click", function () {
    if(Score>0){
  if (
    randomNumber === 16 ||
    randomNumber === 17 ||
    randomNumber === 18 ||
    randomNumber === 19 ||
    randomNumber === 20
  ) {
    winGreet()
  } else {
      loosGreet()
    }   
}
});
between21To25.addEventListener("click", function () {
    if(Score>0){
  if (
    randomNumber === 21 ||
    randomNumber === 22 ||
    randomNumber === 23 ||
    randomNumber === 24 ||
    randomNumber === 25
  ) {
   winGreet()
  } else {
   loosGreet()
  }
}
});
between26To30.addEventListener("click", function () {
    if(Score>0){
  if (
    randomNumber === 26 ||
    randomNumber === 27 ||
    randomNumber === 28 ||
    randomNumber === 29 ||
    randomNumber === 30
  ) {
   winGreet() 
  } else {
   loosGreet()
  }
}
});

Btn.addEventListener("click",function(){
    randomNumber=Math.trunc(Math.random()*30)+1
    Score=4
    console.log(randomNumber)
    scorePoint.textContent = ":" + Score;
     BG_win.style.backgroundColor = "#ddd";
     Greet.textContent = "let's play!!";
      Number.textContent = "?";


})