// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("yee yee ay aya ayyy");

    // all other js here
    $(document).ready(function() {
        //ScrollMagic
        var controller = new ScrollMagic.Controller();

        //pin the header  [1]
        var pinHeadScene = new ScrollMagic.Scene({
                triggerElement: "#head",
                triggerHook: 0,
                duration: "25%"
            })
            .setPin("#head", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);


        //pin again until scroll out [2]
        var pinHeadScene2 = new ScrollMagic.Scene({
                triggerElement: "#project1",
                triggerHook: 0.4,
            })
            .setPin("#head", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);

        //pin the h3 until the page comes together [3]
        var pinPro1Scene = new ScrollMagic.Scene({
                triggerElement: "#project1 aside",
                triggerHook: 0.2,
                duration: "100%"
            })
            .setPin("#project1 aside", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);

        //
        //pin the h3 until the page comes together [3]
        var pinPro3Scene = new ScrollMagic.Scene({
                triggerElement: "#project3 aside",
                triggerHook: 0.1,
                duration: "100%"
            })
            .setPin("#project3 aside", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);

        //

        /*  var pinPro1Scene = new ScrollMagic.Scene({
            triggerElement: "#project1 h3",
            triggerHook: 0,
            duration: "100%"
          })
          .setPin("#project1 section", {pushFollowers: false})
          //.addIndicators()
          .addTo(controller);*/




        //pin for project2 entrance [4]
        var pinPro2Scene = new ScrollMagic.Scene({
                triggerElement: "#project2",
                triggerHook: 0,
                duration: "50%"
            })
            .setPin("#project2", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);
        //[5]
        var pinPro2Scene2 = new ScrollMagic.Scene({
                triggerElement: "#project2",
                triggerHook: 0,
                duration: "50%"
            })
            .setPin("#project3", {
                pushFollowers: false
            })
            //.addIndicators()
            .addTo(controller);

        //[6]
        /*  var pinPro3Scene = new ScrollMagic.Scene({
            triggerElement: "#project3",
            triggerHook: 0,
            duration:"100%"
          })
          .setPin("#project3", {pushFollowers: false})
          //.addIndicators()
          .addTo(controller);*/



        //pin pro2 to beging scrolling after pro1 is done scrolling up
        /*  var pinPro2Scene = new ScrollMagic.Scene({
            triggerElement: "#project2",
            triggerHook: 0,
            duration:"50%"
          })
          .setPin("#projects2", {pushFollowers: false})
          //.addIndicators()
          .addTo(controller);

          //pin impacts to slide up as the percentages are fading out
          var pinPro2Scene2 = new ScrollMagic.Scene({
            triggerElement: "#impacts img",
            triggerHook: 0,
            duration:"60%"
          })
          .setPin("#impacts", {pushFollowers: false})
          //.addIndicators()
          .addTo(controller);
        */

        //pin for project2 second portion so it stays for a bit




        //build scene [6]
        var ourScene = new ScrollMagic.Scene({
                triggerElement: "#timeline",
                duration: "100%",
                triggerHook: .8
            })
            .setClassToggle("#timeline", "fade-in") //make first section fade in
            //.addIndicators() //check out where triggers are
            .addTo(controller);

        //scene 2 percentages - first half - h3 p text and % bars [7]
        var ourScene2 = new ScrollMagic.Scene({
                triggerElement: "#project2",
                duration: "150%",
                triggerHook: 0
            })
            .setClassToggle("#percentages", "fade-in") //make first section fade in
            //.addIndicators() //check out where triggers are
            .addTo(controller);

        //scene 3 percentages - second half - images of what impacts are [8]
        var ourScene3 = new ScrollMagic.Scene({
                triggerElement: "#impacts img",
                duration: "100%",
                triggerHook: 0.6
            })
            .setClassToggle("#impacts", "fade-in") //make first section fade in
            //.addIndicators() //check out where triggers are
            .addTo(controller);

        //scene 4 - call to action [10]
        var ourScene4 = new ScrollMagic.Scene({
                triggerElement: "#project3 img",
                duration: "100%",
                triggerHook: 0.8
            })
            .setClassToggle("#change", "fade-in") //make first section fade in
            //.addIndicators() //check out where triggers are
            .addTo(controller);

    });

    //____________vanilla javascript for hover stuff boiiiiiii______________________________

    //timelineimage 1 hover, mouseout, and click~~~~~~~~~~~~~~~
    var timeline1 = document.getElementById('timeline1img');
    var time1show = document.getElementById("time1show");

    timeline1img.addEventListener('mouseover', function() {
        timeline1img.src = "images/timeline1h.png";
        timeline1img.style.cursor = 'pointer';
    });
    timeline1img.addEventListener('mouseout', function() {
        timeline1img.src = "images/timeline1.png";
        timeline1img.style.cursor = 'pointer';
    });
    timeline1img.addEventListener('click', function() {
        time1show.style.display = "block";
        timeline1img.style.cursor = 'pointer';
    });

    //timelineimage ++++++2+++++ hover, mouseout, and click~~~~~~~~~~~~~~~
    var timeline2 = document.getElementById('timeline2img');
    var time2show = document.getElementById("time2show");

    timeline2img.addEventListener('mouseover', function() {
        timeline2img.src = "images/timeline2h.png";
        timeline2img.style.cursor = 'pointer';
    });
    timeline2img.addEventListener('mouseout', function() {
        timeline2img.src = "images/timeline2.png";
        timeline2img.style.cursor = 'pointer';
    });
    timeline2img.addEventListener('click', function() {
        time2show.style.display = "block";
        timeline2img.style.cursor = 'pointer';
    });

    //timelineimage TREEEEEEEEEEE hover, mouseout, and click~~~~~~~~~~~~~~~
    var timeline3 = document.getElementById('timeline3img');
    var time3show = document.getElementById("time3show");

    timeline3img.addEventListener('mouseover', function() {
        timeline3img.src = "images/timeline3h.png";
        timeline3img.style.cursor = 'pointer';
    });
    timeline3img.addEventListener('mouseout', function() {
        timeline3img.src = "images/timeline3.png";
        timeline3img.style.cursor = 'pointer';
    });
    timeline3img.addEventListener('click', function() {
        time3show.style.display = "block";
        timeline3img.style.cursor = 'pointer';
    });

    //timelineimage FOUUUUUUUUUUR hover, mouseout, and click~~~~~~~~~~~~~~~
    var timeline4 = document.getElementById('timeline4img');
    var time4show = document.getElementById("time4show");

    timeline4img.addEventListener('mouseover', function() {
        timeline4img.src = "images/timeline4h.png";
        timeline4img.style.cursor = 'pointer';
    });
    timeline4img.addEventListener('mouseout', function() {
        timeline4img.src = "images/timeline4.png";
        timeline4img.style.cursor = 'pointer';
    });
    timeline4img.addEventListener('click', function() {
        time4show.style.display = "block";
        timeline4img.style.cursor = 'pointer';
    });

    //_________________________________START IMPACTS IMAGES YEEEEEEEEE___________________________________________
    //impactimage JUAAAAAAAAAN hover, mouseout, and click~~~~~~~~~~~~~~~
    var impact1 = document.getElementById('impact1img');
    var imp1show = document.getElementById("imp1show");

    impact1img.addEventListener('mouseover', function() {
        impact1img.src = "images/impact1h.png";
        impact1img.style.cursor = 'pointer';
    });
    impact1img.addEventListener('mouseout', function() {
        impact1img.src = "images/impact1.png";
        impact1img.style.cursor = 'pointer';
    });
    impact1img.addEventListener('click', function() {
        imp1show.style.display = "block";
        impact1img.style.cursor = 'pointer';
    });

    //impactimage TUUUUUUUUUUUUUUU hover, mouseout, and click~~~~~~~~~~~~~~~
    var impact2 = document.getElementById('impact2img');
    var imp2show = document.getElementById("imp2show");

    impact2img.addEventListener('mouseover', function() {
        impact2img.src = "images/impact2h.png";
        impact2img.style.cursor = 'pointer';
    });
    impact2img.addEventListener('mouseout', function() {
        impact2img.src = "images/impact2.png";
        impact2img.style.cursor = 'pointer';
    });
    impact2img.addEventListener('click', function() {
        imp2show.style.display = "block";
        impact2img.style.cursor = 'pointer';
    });

    //impactimage TREEEEEEEEEEE hover, mouseout, and click~~~~~~~~~~~~~~~
    var impact3 = document.getElementById('impact3img');
    var imp3show = document.getElementById("imp3show");

    impact3img.addEventListener('mouseover', function() {
        impact3img.src = "images/impact3h.png";
        impact3img.style.cursor = 'pointer';
    });
    impact3img.addEventListener('mouseout', function() {
        impact3img.src = "images/impact3.png";
        impact3img.style.cursor = 'pointer';
    });
    impact3img.addEventListener('click', function() {
        imp3show.style.display = "block";
        impact3img.style.cursor = 'pointer';
    });

    //impactimage FUUUUUUUUUUUUR hover, mouseout, and click~~~~~~~~~~~~~~~
    var impact4 = document.getElementById('impact4img');
    var imp4show = document.getElementById("imp4show");

    impact4img.addEventListener('mouseover', function() {
        impact4img.src = "images/impact4h.png";
        impact4img.style.cursor = 'pointer';
    });
    impact4img.addEventListener('mouseout', function() {
        impact4img.src = "images/impact4.png";
        impact4img.style.cursor = 'pointer';
    });
    impact4img.addEventListener('click', function() {
        imp4show.style.display = "block";
        impact4img.style.cursor = 'pointer';
    });



});
