// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("yee yee DOM is g yadadameean?");

    // all other js here

    //capture all the variable (record 1, 2, 3; close; images)
    var record1 = document.getElementById('record1');
    var record2 = document.getElementById('record2');
    var record3 = document.getElementById('record3');
    var close=document.getElementById('close');
    var close2=document.getElementById('close2');

    //START RECORD 1 STUFF
    // add an eventListener for click that shows hidden block with description and image of album (1)
    record1.addEventListener('click', function(){
      record1pop.style.display="block";
    });
    //add eventListener to close the overlay when the close button is clicked
    close.addEventListener('click', function(){
      record1pop.style.display="none";
    });
    //add eventListener that changes record color when hovered
    record1.addEventListener('mouseover',function(){
      record1.style.opacity=1;
      record1.src='images/hover.png';
    });
    //add eventListener that changes record back to original color when mouseout
    record1.addEventListener('mouseout',function(){
      record1.style.opacity=1;
      record1.src='images/record1.png';
    });

    //START RECORD 2 STUFF
    //add an eventListener for click that shows hidden block with description and image of album (2)
    record2.addEventListener('click', function(){
      record2pop.style.display="block";
    });
    //add eventListener that closes/hides the overlay when the close button is clicked
    close2.addEventListener('click', function(){
      record2pop.style.display="none";
    });

});
