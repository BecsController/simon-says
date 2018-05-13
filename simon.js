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
var numArr = ['1', '2', '3', '4']; //arr to choose random no: from that corresponds to colors
var userSequence = [];

start.addEventListener("click", startSequence);

yellow.addEventListener("click", function(){
  userSequence.push('1');                     // push color number to user array
  userSeqDisplay.innerHTML = userSequence;
  yellowFlash();
});
blue.addEventListener("click", function(){
  userSequence.push('2');
  userSeqDisplay.innerHTML = userSequence;
  blueFlash();
});
green.addEventListener("click", function(){
  userSequence.push('3');
  userSeqDisplay.innerHTML = userSequence;
  greenFlash();
});
red.addEventListener("click", function(){
  userSequence.push('4');
  userSeqDisplay.innerHTML = userSequence;
  redFlash();
});


function startSequence(){
var randomNo = Math.floor(Math.random() * 4);
sequence.push(numArr[randomNo]);
messageBoard.innerHTML = sequence;
playColors();
}

function yellowFlash(){
  yellow.style.backgroundColor = "#E2BA00";
  setTimeout(function() {
  yellow.style.backgroundColor = "yellow";
  }, 1000);
};
function blueFlash(){
  blue.style.backgroundColor = "#5054B4";
  setTimeout(function() {
  blue.style.backgroundColor = "blue";
  }, 1000);
};
function greenFlash(){
  green.style.backgroundColor = "#004400";
  setTimeout(function() {
  green.style.backgroundColor = "green";
  }, 1000);
};
function redFlash(){
  red.style.backgroundColor = "#76322B";
  setTimeout(function() {
  red.style.backgroundColor = "red";
  }, 1000);
};

var indexPos = 0;

function playColors(){
  for (var i=0; i < sequence.length; i++){
    if (sequence[i] === '1'){
      setTimeout(function() {
        yellowFlash();
      }, indexPos);         //set delay to run color flash
      indexPos += 1000;    //inc delay by one dec
    } else if (sequence[i]=== '2'){
        setTimeout(function() {
      blueFlash();
        }, indexPos);
        indexPos += 1000;
    } else if (sequence[i] === '3'){
        setTimeout(function() {
      greenFlash();
        }, indexPos);
        indexPos += 1000;
    } else if (sequence[i] === '4'){
        setTimeout(function() {
      redFlash();
        }, indexPos);
        indexPos += 1000;
    }
  }
  indexPos = 0;     //after iterated through entire arr reset delay
};

}
