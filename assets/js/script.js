window.onload = function(){ // makes sure window is loaded first before running
    initialise_scripts(); // runs the full scripts function
    window.addEventListener("resize", reload, false); // restarts the function on resize
    document.getElementById("reset").addEventListener("click", reload);
}

function initialise_scripts(){
//--Canvas Properties-------------------------------------------------------------    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var cnvsWidth = window.innerWidth ; //sets the sizes to inner window sizes. -4 removes scroll bar
    var cnvsHeight = window.innerHeight -4; // ^^^^^
    ctx.canvas.width = cnvsWidth; // sets dimensions to these variables 
    ctx.canvas.height = cnvsHeight; // ^^^^ 
    var cnvsLength = canvas.width; // length of canvas
    var centerOfX = canvas.width/2; // center point of the canvas X
    var centreOfY = canvas.height/2; // center point of the canvas Y

//--Audio Controls-----------------------------------------------------------------
    var audio = document.getElementById("player");
    player.controls = false;
    document.getElementById("mute").addEventListener("click", toggleMute); 
    function toggleMute() {
        player.muted = !player.muted;
        document.getElementById("i-muted").classList.toggle("hidden");
        document.getElementById("i-not-muted").classList.toggle("hidden");
    }

//--Applicable Object Properties----------------------------------------------------
    var numberOfStars = 500; // how many stars will be generated
    var numberOfObstacles = 4; // How many obstacles to dodge will be generated
    var size = 1; // size of star objects
    var speed = 5; // speed of movement

    var starsArray = []; // creates an array to store the star object instances
    for(var i = 0; i < numberOfStars; i++){ // maintains star instances to the defined number of stars
        starsArray[i] = new generate_star(); // generates new star object per array iteration
    }

    var obstaclesArray = []; // creates an array to store the obstacles instances
    for(var i = 0; i < numberOfObstacles; i++) { // maintains object instances to the defined number
        obstaclesArray[i] = new generateObstacle(); // generates new star object per array iteration
    }

    function getRandom(min, max){ // generates number between two values
        return Math.random() * (max - min) + min;
    }

    function notZeroRange(min, max) { // returns a number avoiding zero by never being between -1 and 1
        if (getRandom(0, 1) > 0.5) {
                return getRandom(min, -1.75);
            } else {
                return getRandom(1.75, max);
            }
    }

//--Background Star Functionality & Properties---------------------------------------
function generate_star(){
    this.x = Math.random()*cnvsWidth; // generates random position on the canvas width
    this.y = Math.random()*cnvsHeight; // generates random position on the canvas height
    this.z = Math.random()*cnvsWidth; // generates random position on the canvas to give the appearance of depth

    this.moveStar = function(){
        this.z = this.z - speed; // each tick minuses the z position based on speed so moves towards scree at constant speed
        if(this.z <= 0){
            this.z = cnvsWidth; // if reaches end of canvas resets it to back - loop 
            this.x = Math.random()*cnvsWidth; // generates stars in random position each time
            this.y = Math.random()*cnvsHeight; // ^^^^^^^^^^^
        }
    }

    this.showStar = function(){
        var x, y, s; 
        x = (this.x - centerOfX) * (cnvsLength/this.z);
        x = x + centerOfX;
        y = (this.y - centreOfY) * (cnvsLength/this.z);
        y = y + centreOfY;
        s = size * (cnvsLength/this.z); // makes objects appear to be closer or further away

        ctx.beginPath();
        ctx.fillStyle = "MediumSpringGreen"; // star colour
        ctx.arc(x, y, s, 0, Math.PI*2); // creates stars based on the 
        ctx.fill(); // generates star object
    }
}

//--Obstacle Functionality & Properties-----------------------------------------------
function generateObstacle(){
    var randomX = notZeroRange(-10, 10);
    var randomY = notZeroRange(-10, 10);
    this.x = centerOfX;
    this.y = centreOfY;
    this.z = Math.random()*cnvsWidth;

    if(this.z <= 0){
        this.z = Math.random()*cnvsWidth;
    }

    this.moveObstacle = function(){
        this.z = this.z - (speed/2);

        if(this.z <= 0){ // once object reaches the end of canvas edge --
            this.z = cnvsWidth; // resets the object to back of z dimension 
            randomX = notZeroRange(-10, 10); // creates a new random position
            randomY = notZeroRange(-10, 10); // ^^^^
        }
    }

    this.showObstacle = function(){
        var x, y, s;
        x = this.x;
        y = this.y;
        s = (size/2) * (cnvsLength/this.z);
        
        x = x + (s * randomX);
        y = y + (s * randomY); 
       
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(x, y, s, 0, Math.PI*2);
        ctx.fill();
    }
}

//--Functions to render the background animations -------------------------------------------------
function drawStars(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, cnvsWidth, cnvsHeight); // draws black background each frame to clear the previous frame
    
    for(var i = 0; i < numberOfStars; i++){ // maintains object instances to the defined number per frame
        starsArray[i].showStar(); // shows star objects per array iteration
        starsArray[i].moveStar(); // calls the function allowing it to move
    }
}

drawStars(); // calls function to initially allow one frame of stars to be rendered so that they are visible behind the start panel 

//-- removes the start panel and starts further animation --------------------------------------------
document.getElementById("start-btn").addEventListener("click", initialise_game);

function initialise_game(){
document.getElementById("start-panel").classList.toggle("hidden");

    function drawObstacles(){ // allows obstacles to be rendered only once start panel dissapears  
    for(var i = 0; i < numberOfObstacles; i++) { // maintains object instances to the defined number per frame
        obstaclesArray[i].showObstacle();
        obstaclesArray[i].moveObstacle();
    }
    }

//--Player Spacecraft Functionality & Properties ------------------------------------------------------------
var craftArray = [];
    for(var i = 0; i < 2; i++) { // maintains object instances to the defined number
        craftArray[i] = new playerSpaceCraft(); // generates new star object per array iteration
    }

function playerSpaceCraft() {
    
        var x1, y1, x2, y2, x3, y3, s;
        x1 = centerOfX;
        y1 = centreOfY + (centreOfY /2);
        x2 = centerOfX + 50;
        y2 = centreOfY + (centreOfY /2) + 30;
        x3 = centerOfX - 50;
        y3 = centreOfY + (centreOfY /2) + 30;
        s = 14;
        var speedOfPlayer = 2;
        var dL = 0;
        var dR = 0;
        
       this.showPlayerCraft = function() {
        ctx.beginPath(); // Under Glow
        ctx.fillStyle = "Violet";
        ctx.moveTo(x1, y1-1);
        ctx.lineTo(x2+5, y2+5);
        ctx.lineTo(x3-5, y3+5);
        ctx.fill();

        ctx.beginPath(); // small engine light right
        ctx.fillStyle = "white";
        ctx.arc(x1+38, y2-3, s/2, 0, Math.PI*1);
        ctx.fill();

        ctx.beginPath(); // Engine light right
        ctx.fillStyle = "white";
        ctx.arc(x1+21, y2-3, s, 0, Math.PI*1);
        ctx.fill();

        ctx.beginPath(); // Engine light middle 
        ctx.fillStyle = "white";
        ctx.arc(x1, y2-3, s, 0, Math.PI*1);
        ctx.fill();

        ctx.beginPath(); // Engine light left
        ctx.fillStyle = "white";
        ctx.arc(x1-21, y2-3, s, 0, Math.PI*1);
        ctx.fill();
        
        ctx.beginPath(); // small engine light left
        ctx.fillStyle = "white";
        ctx.arc(x1-38, y2-3, s/2, 0, Math.PI*1);
        ctx.fill();

        ctx.beginPath(); // top black triangle
        ctx.fillStyle = "#000";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2+1, y2);
        ctx.lineTo(x3-1, y3);
        ctx.fill();

        
       this.newPos = function() {
        x1 += dR;
        x1 += dL;
        //y1 += dR;
        x2 += dR; 
        x2 += dL; 
        //y2 += dR; 
        x3 += dR; 
        x3 += dL;
       // y3 += dR;

    }
    }

//--Directional functionality -----------------------------------------------------------------
    function moveLeft() {
        dL = -speedOfPlayer;
    }
    function moveRight() {
        dR = speedOfPlayer; 
    }

    function unClick(){
    dL = 0;
    dR = 0;
    }

    function keyDown(e) {
        if(e.key === 'ArrowLeft' || e.key === 'Left') {
            moveLeft();
        } else if(e.key === 'ArrowRight' || e.key === 'Right') {
            moveRight();
        }
    }
    function keyUp(e) {
        if(
            e.key === 'ArrowLeft' || 
            e.key === 'Left' || 
            e.key === 'ArrowRight' || 
            e.key === 'Right'
        ) {
                dL = 0;
                dR = 0;
        }
    }
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    document.getElementById("left-direction-btn").addEventListener("mousedown", moveLeft);
    document.getElementById("left-direction-btn").addEventListener("mouseup", unClick);
    document.getElementById("right-direction-btn").addEventListener("mousedown", moveRight);
    document.getElementById("right-direction-btn").addEventListener("mouseup", unClick);
}

function drawPlayerCraft() {
    for(var i = 0; i < 1; i++){ // maintains object instances to the defined number per frame
        craftArray[i].showPlayerCraft(); // shows star objects per array iteration
        craftArray[i].newPos(); // calls the function allowing it to move
    }
}

function update() { // defines what happens when update is called at bottom
    drawStars();
    drawObstacles();
    drawPlayerCraft();
    window.requestAnimationFrame(update); // recalls the update function per frame - makes animations move
}

update(); // calls function to trigger the animation

}
}

//-- Allows page to be reloaded on resize and reset button click -------------------------------------
function reload(){
    window.location.reload(true);
    }