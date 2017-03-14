// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here



//variables
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var timeline = document.getElementsByClassName('timelinebutton');
var up = document.getElementById("upButton");
var down = document.getElementById("downButton");


//timeline buttons
button1.addEventListener("mouseover", function(){
  button1.style.opacity=1;
  button1.src="images/timelineh.png";
  console.log("yee yee");
});
button1.addEventListener("mouseout", function(){
  button1.style.opacity=1;
  button1.src="images/timeline.png";
  console.log("yadadada");
});
button2.addEventListener("mouseover", function(){
  button2.style.opacity=1;
  button2.src="images/timelineh.png";
});
button2.addEventListener("mouseout", function(){
  button2.style.opacity=1;
  button2.src="images/timeline.png";
});
button3.addEventListener("mouseover", function(){
  button3.style.opacity=1;
  button3.src="images/timelineh.png";
});
button3.addEventListener("mouseout", function(){
  button3.style.opacity=1;
  button3.src="images/timeline.png";
});
button4.addEventListener("mouseover", function(){
  button4.style.opacity=1;
  button4.src="images/timelineh.png";
});
button4.addEventListener("mouseout", function(){
  button4.style.opacity=1;
  button4.src="images/timeline.png";
});
button5.addEventListener("mouseover", function(){
  button5.style.opacity=1;
  button5.src="images/timelineh.png";
});
button5.addEventListener("mouseout", function(){
  button5.style.opacity=1;
  button5.src="images/timeline.png";
});

//nav up/down buttons
up.addEventListener("click", function(){
  document.getElementById('head').scrollIntoView();
});
down.addEventListener("click", function(){
  document.getElementById('info1').scrollIntoView();
});




});
