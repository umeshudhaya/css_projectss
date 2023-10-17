
var Guessnum = document.getElementById("GuessNum");
var result = document.getElementById("result");
var score = document.getElementById("score");
var randomNumber = Math.floor(Math.random()* 10) + 1;
     var totalscore=10;
function finding() {
   var Enterednum= Guessnum.value;
   if (randomNumber == Enterednum) {
      console.log("Right")
      alert("Hey congrats you win");
      result.textContent = "Right";
   } 
   else {
     
      totalscore=totalscore-1;
      score.textContent="score "+totalscore;
      result.textContent = "wrong";
     
      
   }
}
