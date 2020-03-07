window.onload = function(){ // makes sure window is loaded first before running
    initialise_scripts(); // runs the full scripts function
    window.addEventListener("resize", initialise_scripts, false); // restarts the function on resize
}

function initialise_scripts(){
//--Canvas Properties-------------------------------------------------------------    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var cnvsWidth = window.innerWidth ; //sets the sizes to inner window sizes. -4 removes scroll bar
    var cnvsHeight = window.innerHeight -4; // ^^^^^
    ctx.canvas.width = cnvsWidth; // sets dimensions to these variables 
    ctx.canvas.height = cnvsHeight; // ^^^^ 

//--Audio Controls-----------------------------------------------------------------
    var audio = document.getElementById("player");
    player.controls = false;
    document.getElementById("mute").addEventListener("click", toggleMute); 
    function toggleMute() {
        player.muted = !player.muted;
        document.getElementById("i-muted").classList.toggle("hidden");
        document.getElementById("i-not-muted").classList.toggle("hidden");
    }

//--Background Star properties ----------------------------------------------------
    var numberOfStars = 1000; // how many stars will be generated
    var starsArray = []; // creates an array to store the star object instances
    var size = 1; // size of star objects
    var speed = 10; // speed of movement
    var cnvsLength = canvas.width; // length of canvas
    var centerOfX = canvas.width/2; // center point of the canvas X
    var centreOfY = canvas.height/2; // center point of the canvas Y

    for(var i = 0; i < numberOfStars; i++){ // maintains star instances to the defined number of stars
        starsArray[i] = new generate_star(); // generates new star object per array iteration
    }

function generate_star(){
    this.x = Math.random()*canvas.width; // generates random position on the canvas width
    this.y = Math.random()*canvas.height; // generates random position on the canvas height
    this.z = Math.random()*canvas.width; // generates random position on the canvas to give the appearance of depth

    this.moveStar = function(){
        this.z = this.z - speed; // each tick minuses the z position based on speed so moves towards scree at constant speed
        if(this.z <= 0){
            this.z = canvas.width; // if reaches end of canvas resets it to back - loop 
        }
    }

    this.show = function(){
        var x, y, s; 
        x = (this.x - centerOfX) * (cnvsLength/this.z);
        x = x + centerOfX;
        y = (this.y - centreOfY) * (cnvsLength/this.z);
        y = y + centreOfY;
        s = size * (cnvsLength/this.z); // makes objects appear to be closer or further away

        ctx.beginPath();
        ctx.fillStyle = "green"; // star colour
        ctx.arc(x, y, s, 0, Math.PI*2); // creates stars based on the 
        ctx.fill(); // generates star object
    }
}

//--Functions to call and render the animations -------------------------------------------------

function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // draws black background each frame
    
    for(var i = 0; i < numberOfStars; i++){ 
        starsArray[i].show(); // shows star objects per array iteration
        starsArray[i].moveStar(); // calls the function allowing it to move
    }
}


function update(){ // defines what happens when update is called at bottom
    draw();
    window.requestAnimationFrame(update);
    
}


update(); // runs the animation

}

//-- removes the start panel and will activate code [yet to finish]
document.getElementById("start-btn").addEventListener("click", initialise_game);
    
function initialise_game(){
document.getElementById("start-panel").classList.toggle("hidden");

}