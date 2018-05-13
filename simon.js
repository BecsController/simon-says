document.addEventListener('DOMContentLoaded', start)

function start(){
var green = document.getElementsByClassName("green")[0];
var blue = document.getElementsByClassName("blue")[0];
var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];
var audioOne = new Audio("/sounds/simonSound1.mp3");
var audioTwo = new Audio("/sounds/simonSound2.mp3");
var audioThree = new Audio("/sounds/simonSound3.mp3");
var audioFour = new Audio("/sounds/simonSound4.mp3");

yellow.addEventListener("click", function(){
  yellow.style.backgroundColor = "#E2BA00"; //change bg color on click
  audioOne.play();
  setTimeout(function() {
  yellow.style.backgroundColor = "yellow"; //change bg color back after
}, 500);                                   //half a second
});
green.addEventListener("click", function(){
  green.style.backgroundColor = "#004400";
  audioTwo.play();
  setTimeout(function() {
  green.style.backgroundColor = "green";
}, 500);
});
red.addEventListener("click", function(){
  red.style.backgroundColor = "#76322B";
  audioThree.play();
  setTimeout(function() {
  red.style.backgroundColor = "red";
}, 500);
});
blue.addEventListener("click", function(){
  blue.style.backgroundColor = "#5054B4";
  audioFour.play();
  setTimeout(function() {
  blue.style.backgroundColor = "blue";
}, 500);
});

}
