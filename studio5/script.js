// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here


//scroll down button stuff please work!
var arrow=document.getElementById("arrow");
var ob1=document.getElementById("ob1");
var ob2=document.getElementById("ob2");
var ob3=document.getElementById("ob3");

/*arrow.addEventListener("mouseover",function(){
  arrow.src="images/arrowHover.png";
});

arrow.addEventListener("mouseout",function(){
  arrow.src="images/arrow.png";
});

arrow.addEventListener("click",function(){
  window.scrollTo(0,800);
  console.log("button works");
});
var obj1=document.getElementById('obj1');
$object.velocity("transition.slideUpIn",1000);
console.log("transition");*/

ob1.addEventListener("mouseover", function(){
  $ob1.velocity("callout.bounce", {stagger:75});
});

ob2.addEventListener("mouseover", function(){
  $ob2.velocity("callout.bounce", {stagger:75});
});

ob3.addEventListener("mouseover", function(){
  $ob3.velocity("callout.bounce", {stagger:75});
});

});
