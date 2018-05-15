document.addEventListener('DOMContentLoaded', start)

function start(){
var green = document.getElementsByClassName("green")[0];
var blue = document.getElementsByClassName("blue")[0];
var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];
var start = document.getElementsByClassName("start")[0];
var messageBoard = document.getElementsByClassName("messageBoard")[0];
var scoreBoard = document.getElementsByClassName("simon")[0];
var resetButton = document.getElementsByClassName("reset")[0];
var sequence = []; // empty arr to fill with pattern sequence
var numArr = ['1', '2', '3', '4']; //arr to choose random no: from that corresponds to colors
var userSequence = [];

start.addEventListener("click", function(){
  $(".start").animate({opacity:0, visibility:'hidden'}, 200);
  messageBoard.innerHTML = 'Ready? Go!';
  $(".messageBoard").removeClass("hide");
  setTimeout(function(){
    startSequence();
  }, 2000);
});
resetButton.addEventListener("click", reset);

yellow.addEventListener("click", function(){
  userSequence.push('1');                     // push color number to user array
  yellowFlash();
});
blue.addEventListener("click", function(){
  userSequence.push('2');
  blueFlash();
});
green.addEventListener("click", function(){
  userSequence.push('3');
  greenFlash();
});
red.addEventListener("click", function(){
  userSequence.push('4');
  redFlash();
});

function startSequence(){
start.removeEventListener("click", startSequence);
var randomNo = Math.floor(Math.random() * 4); //generate random number between 1 and 4
sequence.push(numArr[randomNo]);              //push random number to sequence array
playColors();
}

function yellowFlash(){
  yellow.style.backgroundColor = "#E2BA00";
  new Audio("sounds/re.mp3").play();
  setTimeout(function() {
  yellow.style.backgroundColor = "yellow";
  }, 500);
};
function blueFlash(){
  blue.style.backgroundColor = "#5054B4";
  new Audio("sounds/mi.mp3").play();
  setTimeout(function() {
  blue.style.backgroundColor = "blue";
  }, 500);
};
function greenFlash(){
  green.style.backgroundColor = "#004400";
  new Audio("sounds/fa.mp3").play();
  setTimeout(function() {
  green.style.backgroundColor = "green";
  }, 500);
};
function redFlash(){
  red.style.backgroundColor = "#76322B";
  new Audio("sounds/so.mp3").play();
  setTimeout(function() {
  red.style.backgroundColor = "red";
  }, 500);
};

var indexPos = 0;
function playColors(){
  for (var i=0; i < sequence.length; i++){ //loop through sequence and call color flashes
    if (sequence[i] === '1'){
        setTimeout(function() {
          yellowFlash();
        }, indexPos);         //set a delay before running next color flash
        indexPos += 1000;    //inc delay by one sec by every extra arr position
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
  indexPos = 0;
  var sequenceCount = (sequence.length * 3000);
  setTimeout(function() {
  compareSequences();
}, sequenceCount); //delay calling compare by 2 secs for every item in sequence arr
};

var scoreCount = 0;

function compareSequences(){
  var rightCount = 0;
    for (var i = 0; i < sequence.length; i++) {
      if (userSequence[i] == sequence[i]){ //compare comp sequence with user sequence
        rightCount++; //count how many matches
      }
    }
    if (rightCount == sequence.length){ //if number of matches is same as computer array length
      scoreCount++;                     //inc score counter
      userSequence = [];                //wipe user sequence
      messageBoard.innerHTML = 'Well done!'; //show well done message and call new number
      scoreBoard.innerHTML = 'Score Count = ' + scoreCount;
      startSequence();
    } else {              //else show loss message and play sequence again
      userSequence = [];
      scoreCount = 0;
      messageBoard.innerHTML = 'Sorry, you lose!';
      scoreBoard.innerHTML = 'Score Count = ' + scoreCount;
      playColors();
      }
    };

  function reset(){
    location.reload();
  };

}
