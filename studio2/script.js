// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //putting the blanks into variables to be pulled up later
        var container = document.f.container.value;
        var special = document.f.special.value;
        var liquid = document.f.liquid.value;
        var topping = document.f.topping.value;
        var verb = document.f.verb.value;
        var measure = document.f.measure.value;
        var noun = document.f.noun.value;
        var color = document.f.color.value;
        var texture = document.f.texture.value;
        var sauce = document.f.sauce.value;
        var myMsg = document.getElementById('myMsg');

            //print out into message
            myMsg.innerHTML = "In a "+container+", mix the flour, seasoned salt and some "+special+". In a bowl, mix the eggs with 2 tablespoons "+liquid+". In a separate bowl, add the "+topping+". Shake the chicken pieces in the bag to coat. In batches, "+verb+" them in the egg wash, then in the "+topping+". Heat about 2 "+measure+" of vegetable oil in a large "+noun+" over medium-high heat until a few breadcrumbs dropped in the oil start to sizzle immediately. Fry the chicken, in batches if needed, until "+color+" and "+texture+", a couple minutes per side. Drain on a paper towel and serve with "+sauce+"."

            ;
            myMsg.className = "show";


        return false;

    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
    }



});
