document.addEventListener('DOMContentLoaded', start)

function start(){
var green = document.getElementsByClassName("green")[0];
var blue = document.getElementsByClassName("blue")[0];
var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];

yellow.addEventListener("click", function(){
  yellow.style.backgroundColor = "#E2BA00"; //change bg color on click
  setTimeout(function() {
  yellow.style.backgroundColor = "yellow"; //change bg color back after
}, 500);                                   //half a second
});
green.addEventListener("click", function(){
  green.style.backgroundColor = "#004400";
  setTimeout(function() {
  green.style.backgroundColor = "green";
}, 500);
});
red.addEventListener("click", function(){
  red.style.backgroundColor = "#76322B";
  setTimeout(function() {
  red.style.backgroundColor = "red";
}, 500);
});
blue.addEventListener("click", function(){
  blue.style.backgroundColor = "#5054B4";
  setTimeout(function() {
  blue.style.backgroundColor = "blue";
}, 500);
});
}
