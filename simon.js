document.addEventListener('DOMContentLoaded', start)

function start(){
var green = document.getElementsByClassName("green")[0];
var blue = document.getElementsByClassName("blue")[0];
var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];
var start = document.getElementsByClassName("start")[0];
var messageBoard = document.getElementsByClassName("messageBoard")[0];
var userSeqDisplay = document.getElementsByClassName("userSeq")[0];
var audioOne = new Audio("/sounds/simonSound1.mp3");
var audioTwo = new Audio("/sounds/simonSound2.mp3");
var audioThree = new Audio("/sounds/simonSound3.mp3");
var audioFour = new Audio("/sounds/simonSound4.mp3");
var sequence = []; // empty arr to fill with pattern sequence
var numArr = [1, 2, 3, 4]; //arr to choose random no: from that corresponds to colors
var userSequence = [];

start.addEventListener("click", startSequence);

yellow.addEventListener("click", function(){
  yellow.style.backgroundColor = "#E2BA00"; //change bg color on click
  userSequence.push(1);                     // push color number to user array
  userSeqDisplay.innerHTML = userSequence;
  setTimeout(function() {
  yellow.style.backgroundColor = "yellow"; //change bg color back after
}, 500);                                   //half a second
});
blue.addEventListener("click", function(){
  blue.style.backgroundColor = "#5054B4";
  userSequence.push(2);
  userSeqDisplay.innerHTML = userSequence;
  setTimeout(function() {
  blue.style.backgroundColor = "blue";
}, 500);
});
green.addEventListener("click", function(){
  green.style.backgroundColor = "#004400";
  userSequence.push(3);
  userSeqDisplay.innerHTML = userSequence;
  setTimeout(function() {
  green.style.backgroundColor = "green";
}, 500);
});
red.addEventListener("click", function(){
  red.style.backgroundColor = "#76322B";
  userSequence.push(4);
  userSeqDisplay.innerHTML = userSequence;
  setTimeout(function() {
  red.style.backgroundColor = "red";
}, 500);
});


function startSequence(){
var randomNo = Math.floor(Math.random() * 4);
sequence.push(numArr[randomNo]);
messageBoard.innerHTML = sequence;
playColors();
}

function playColors(){
  for (var i=0; i < sequence.length; i++){
    if (sequence[i] === 1){
      yellow.style.backgroundColor = "#E2BA00";
      setTimeout(function() {
      yellow.style.backgroundColor = "yellow";
      }, 1000);
    } if (sequence[i] === 2){
      blue.style.backgroundColor = "#5054B4";
      setTimeout(function() {
      blue.style.backgroundColor = "blue";
      }, 1000);
    } if (sequence === 3){
      green.style.backgroundColor = "#004400";
      setTimeout(function() {
      green.style.backgroundColor = "green";
      }, 1000);
    } if (sequence[i] === 4){
      red.style.backgroundColor = "#76322B";
      setTimeout(function() {
      red.style.backgroundColor = "red";
      }, 1000);
    }
  }
}

}
