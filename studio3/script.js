// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("yee yee DOM is g yadadameean?");

    // all other js here

    //capture all the variable (record 1, 2, 3; close; images)
    var aliciabw = document.getElementById('aliciabw');
    var dillabw = document.getElementById('dillabw');
    var madbw = document.getElementById('madbw');
    var wutangbw = document.getElementById('wutangbw');
    var nasbw = document.getElementById('nasbw');
    var close=document.getElementById('close');
    var close2=document.getElementById('close2');
    var close3=document.getElementById('close3');
    var close4=document.getElementById('close4');
    var close5=document.getElementById('close5');

    //START RECORD 1 STUFF
    // add an eventListener for click that shows hidden block with description and image of album (1)
    aliciabw.addEventListener('click', function(){
      record1pop.style.display="block";
    });
    //add eventListener to close the overlay when the close button is clicked
    close.addEventListener('click', function(){
      record1pop.style.display="none";
    });
    //add eventListener that changes record color when hovered
    aliciabw.addEventListener('mouseover',function(){
      aliciabw.style.opacity=1;
      aliciabw.src='images/aliciathin.jpg';
    });
    //change to pointer on hover
    aliciabw.addEventListener('mouseover',function(){
      aliciabw.style.opacity=1;
      aliciabw.style.cursor='pointer';
    });
    //add eventListener that changes record back to original color when mouseout
    aliciabw.addEventListener('mouseout',function(){
      aliciabw.style.opacity=1;
      aliciabw.src='images/aliciabw.jpg';
    });

    //START RECORD 2 STUFF
    //add an eventListener for click that shows hidden block with description and image of album (2)
    dillabw.addEventListener('click', function(){
      record2pop.style.display="block";
    });
    //add eventListener that closes/hides the overlay when the close button is clicked
    close2.addEventListener('click', function(){
      record2pop.style.display="none";
    });
    //add hover eventListener to change image to color
    dillabw.addEventListener('mouseover', function(){
      dillabw.style.opacity=1;
      dillabw.src='images/dillathin.jpg';
      //change to pointer on hover
      dillabw.style.cursor='pointer';
      //transition
      dillabw.style.transition='opacity 2s';
    });
    //add eventListener mouseout
    dillabw.addEventListener('mouseout', function(){
      dillabw.style.opacity=1;
      dillabw.src='images/dillabw.jpg';
    });

    //START RECORD 3 STUFF
    //add an eventListener for click that shows hidden block with description and image of album (2)
    madbw.addEventListener('click', function(){
      record3pop.style.display="block";
    });
    //add eventListener that closes/hides the overlay when the close button is clicked
    close3.addEventListener('click', function(){
      record3pop.style.display="none";
    });
    //add hover eventListener to change image to color
    madbw.addEventListener('mouseover', function(){
      madbw.style.opacity=1;
      madbw.src='images/madthin.jpg';
    });
    //change to pointer on hover
    madbw.addEventListener('mouseover', function(){
      madbw.style.opacity=1;
      madbw.style.cursor='pointer';
    });
    //add eventListener mouseout
    madbw.addEventListener('mouseout', function(){
      madbw.style.opacity=1;
      madbw.src='images/madbw.jpg';
    });

    //START RECORD 4 STUFF
    //add an eventListener for click that shows hidden block with description and image of album (2)
    nasbw.addEventListener('click', function(){
      record4pop.style.display="block";
    });
    //add eventListener that closes/hides the overlay when the close button is clicked
    close4.addEventListener('click', function(){
      record4pop.style.display="none";
    });
    //add hover eventListener to change image to color
    nasbw.addEventListener('mouseover', function(){
      nasbw.style.opacity=1;
      nasbw.src='images/nasthin.jpg';
    });
    //change to pointer on hover
    nasbw.addEventListener('mouseover', function(){
      nasbw.style.opacity=1;
      nasbw.style.cursor='pointer';
    });
    //add eventListener mouseout
    nasbw.addEventListener('mouseout', function(){
      nasbw.style.opacity=1;
      nasbw.src='images/nasbw.jpg';
    });

    //START RECORD 5 STUFF
    //add an eventListener for click that shows hidden block with description and image of album (2)
    wutangbw.addEventListener('click', function(){
      record5pop.style.display="block";
    });
    //add eventListener that closes/hides the overlay when the close button is clicked
    close5.addEventListener('click', function(){
      record5pop.style.display="none";
    });
    //add hover eventListener to change image to color
    wutangbw.addEventListener('mouseover', function(){
      wutangbw.style.opacity=1;
      wutangbw.src='images/wutangthin.jpg';
    });
    //change to pointer on hover
    wutangbw.addEventListener('mouseover', function(){
      wutangbw.style.opacity=1;
      wutangbw.style.cursor='pointer';
    });
    //add eventListener mouseout
    wutangbw.addEventListener('mouseout', function(){
      wutangbw.style.opacity=1;
      wutangbw.src='images/wutangbw.jpg';
    });

});
