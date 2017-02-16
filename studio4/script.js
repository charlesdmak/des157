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
    var pic70 = document.getElementById("pic70");
    var pic80 = document.getElementById("pic80");
    var pic90 = document.getElementById("pic90");
    var pic00 = document.getElementById("pic00");

    //first section - hover: change color, popout, timer for tooltip // click: play music
    //add eventListener for hover
    decades70.addEventListener("mouseover", function(){
    //  decades70.style.backgroundColor="green";
      pic70.style.display="block";
      popout70.style.display="block";
    });

    decades70.addEventListener("mouseout", function(){
      decades70.style.backgroundColor="grey";
      pic70.style.display="none";
      popout70.style.display="none";
    });

    pic70.addEventListener("click", function(){
    //  decades70.style.backgroundColor="green";
      pic70.style.display="block";
      popout70.style.display="block";
    });

    decades80.addEventListener("mouseover", function(){
    //  decades80.style.backgroundColor="green";
      pic80.style.display="block";
      popout80.style.display="block";
    });

    decades80.addEventListener("mouseout",function(){
      decades80.style.backgroundColor="grey";
      pic80.style.display="none";
      popout80.style.display="none";
    });

    decades90.addEventListener("mouseover", function(){
    //  decades90.style.backgroundColor="green";
      pic90.style.display="block";
      popout90.style.display="block";
    });

    decades90.addEventListener("mouseout",function(){
      decades90.style.backgroundColor="grey";
      pic90.style.display="none";
      popout90.style.display="none";
    });

    decades00.addEventListener("mouseover", function(){
    //  decades00.style.backgroundColor="green";
      pic00.style.display="block";
      popout00.style.display="block";
    });

    decades00.addEventListener("mouseout",function(){
      decades00.style.backgroundColor="grey";
      pic00.style.display="none";
      popout00.style.display="none";
    });

decades70.addEventListener ('mouseover', function(){
  tipTimer = setTimeout(showTip, 1000);
});

decades70.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  tip70.style.opacity = 0;
});

decades80.addEventListener ('mouseover', function(){
  tipTimer = setTimeout(showTip, 1000);
});

decades80.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  tip80.style.opacity = 0;
});

decades90.addEventListener ('mouseover', function(){
  tipTimer = setTimeout(showTip, 1000);
});

decades90.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  tip90.style.opacity = 0;
});

decades00.addEventListener ('mouseover', function(){
  tipTimer = setTimeout(showTip, 1000);
});

decades00.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  tip00.style.opacity = 0;
});

function showTip () {
  tip70.style.opacity = .8;
  tip70.style.transition = 'all .5s';
};


});
