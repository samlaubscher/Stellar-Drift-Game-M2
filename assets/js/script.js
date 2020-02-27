window.onload = function(){ // makes sure window is loaded first before running
    initialise_scripts(); // runs the full scripts function
    window.addEventListener("resize", initialise_scripts, false); // restarts the function on resize
}

function initialise_scripts(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var cnvsWidth = window.innerWidth -4; //sets the sizes to inner window sizes. -4 removes scroll bar
    var cnvsHeight = window.innerHeight -4; // ^^^^^
    ctx.canvas.width = cnvsWidth; // sets dimensions to these variables 
    ctx.canvas.height = cnvsHeight; // ^^^^ 
}
