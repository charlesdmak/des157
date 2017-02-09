// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("yee yee DOM is g yadadameean?");

    // all other js here
    var wholeBlock = document.getElementById("wholeBlock");
    var decades70 = document.getElementById("decades70");
    var popout70 = document.getElementById("popout70");
    var decades80 = document.getElementById("decades80");
    var popout80 = document.getElementById("popout80");
    var decades90 = document.getElementById("decades90");
    var popout90 = document.getElementById("popout90");
    var decades00 = document.getElementById("decades00");
    var popout00 = document.getElementById("popout00");

    //first section - hover: change color, popout, timer for tooltip // click: play music
    //add eventListener for hover
    decades70.addEventListener("mouseover", function(){
      decades70.style.backgroundColor="green";
      popout70.style.display="block";
    });

    decades70.addEventListener("mouseout", function(){
      decades70.style.backgroundColor="red";
      popout70.style.display="none";
    });

    decades80.addEventListener("mouseover", function(){
      decades80.style.backgroundColor="green";
      popout80.style.display="block";
    });

    decades80.addEventListener("mouseout",function(){
      decades80.style.backgroundColor="red";
      popout80.style.display="none";
    });

    decades90.addEventListener("mouseover", function(){
      decades90.style.backgroundColor="green";
      popout90.style.display="block";
    });

    decades90.addEventListener("mouseout",function(){
      decades90.style.backgroundColor="red";
      popout90.style.display="none";
    });

    decades00.addEventListener("mouseover", function(){
      decades00.style.backgroundColor="green";
      popout00.style.display="block";
    });

    decades00.addEventListener("mouseout",function(){
      decades00.style.backgroundColor="red";
      popout00.style.display="none";
    });


});
