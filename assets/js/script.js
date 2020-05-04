window.onload = function(){ // makes sure window is loaded first before running 
    window.addEventListener("resize", reload, false); // restarts the function on resize
    document.getElementById("reset").addEventListener("click", reload); // calls the function when on-screen Reset button is pressed

    //--Canvas Properties-------------------------------------------------------------    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const cnvsWidth = window.innerWidth ; //sets the sizes to inner window sizes. -4 removes scroll bar
    const cnvsHeight = window.innerHeight -4; // ^^^^^
    ctx.canvas.width = cnvsWidth; // sets dimensions to these variables 
    ctx.canvas.height = cnvsHeight; // ^^^^ 
    const cnvsLength = canvas.width; // length of canvas
    const centerOfX = canvas.width/2; // center point of the canvas X
    const centerOfY = canvas.height/2; // center point of the canvas Y
    var shipFromCenter = centerOfY/2; // for rotation plotting

    //--Applicable Object Properties----------------------------------------------------
    var numberOfStars = 500; // how many stars will be generated
    var numberOfSprites = 1; // How many Sprites to dodge will be generated
    var size = 1; // size of star objects
    var speed = 5; // speed of movement
    var angle = 0; // angle of canvas rotation for player ship object
    var starsArray = []; // creates an array to store the Star object instances
    var spritesArray = []; // creates an array to store the Sprites instances
    var time = null;

    //--Audio Controls-----------------------------------------------------------------
    const audio = document.getElementById("player");
    player.controls = false;
    document.getElementById("mute").addEventListener("click", toggleMute); 

    //--Background Star Definition & Functionality---------------------------------------
    class Star{
        constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        }

        moveStar(){
            this.z = this.z - speed; // each tick minuses the z position based on speed so moves towards screen at constant speed
            if(this.z <= 0){
                this.z = cnvsWidth; // if reaches end of canvas resets it to back - loop 
                this.x = Math.random()*cnvsWidth; // generates stars in random position each time
                this.y = Math.random()*cnvsHeight; // ^^^^^^^^^^^
            }
        }

        showStar(){
            let xPos = (this.x - centerOfX) * (cnvsLength/this.z);
            xPos = xPos + centerOfX;
            let yPos = (this.y - centerOfY) * (cnvsLength/this.z);
            yPos = yPos + centerOfY;
            let s = size * (cnvsLength/this.z); // makes objects appear to be closer or further away

            ctx.beginPath();
            ctx.fillStyle = "MediumSpringGreen"; // star colour
            ctx.arc(xPos, yPos, s, 0, Math.PI*2); // creates stars based on the properties entered
            ctx.fill(); // generates star object
        }
    }

    //--Sprite Definition & Functionality-----------------------------------------------
    class Sprite {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.randomX = notZeroRange(-10, 10);
            this.randomY = notZeroRange(-10, 10);
            if(this.z <= 0){
                this.z = Math.random()*cnvsWidth;
            }
        }

        moveSprite(){
            this.z = this.z - (speed/2);
            if(this.z <= 0){ // once object reaches the end of canvas edge --
                this.z = cnvsWidth; // resets the object to back of z dimension 
                this.randomX = notZeroRange(-10, 10); // creates a new random position
                this.randomY = notZeroRange(-10, 10); // ^^^^
            }
        }

        showSprite(){
            let xPos = this.x;
            let yPos = this.y;
            let s = (size/2) * (cnvsLength/this.z);
            
            xPos = xPos + (s * this.randomX);
            yPos = yPos + (s * this.randomY); 

            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(xPos, yPos, s, 0, Math.PI*2);
            ctx.fill();

            collectXYZValues(xPos, yPos, this.z);
        }
    }

    // Allows rotation to be set to angle
    function convertToRadians(degree) {  
        return degree*(Math.PI/180);
    }

    // Generates number between two values
    function getRandom(min, max){ 
        return Math.random() * (max - min) + min;
    }

    // Returns a number avoiding zero by never being between -1 and 1
    function notZeroRange(min, max) { 
        if (getRandom(0, 1) > 0.5) {
                return getRandom(min, -1.75);
            } else {
                return getRandom(1.75, max);
            }
    }

    // Toggle the mute audio feature
    function toggleMute() {
        player.muted = !player.muted;
        document.getElementById("i-muted").classList.toggle("hidden");
        document.getElementById("i-not-muted").classList.toggle("hidden");
    }

    function collectXYZValues(x, y, z){
    console.log(x,y,z);
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

    function drawSprites(){ // allows Sprites to be rendered only once start panel dissapears  
        for(var i = 0; i < numberOfSprites; i++) { // maintains object instances to the defined number per frame
            spritesArray[i].showSprite();
            spritesArray[i].moveSprite();
        }
        }

        
    //--Player Spacecraft Functionality & Properties ------------------------------------------------------------
    function drawPlayerCraft() {  
        x1 = 0;
        y1 = 0 + (centerOfY /2);
        x2 = 50;
        y2 = 0 + (centerOfY /2) + 30;
        x3 = -50;
        y3 = 0 + (centerOfY /2) + 30;
        s = 14;

        ctx.save();
        ctx.translate(centerOfX, centerOfY);
        ctx.rotate(convertToRadians(angle));
        
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
                        
        ctx.restore();
    }

    //--Directional functionality -----------------------------------------------------------------
    function moveLeft() {
        time = setInterval(function() { // removes the delay in movement after initial keydown
            angle+=1;
            if(angle > 360) {
            angle = 0;
        }
    },5);
    }

    function moveRight() {
        time = setInterval(function() { // removes the delay in movement after initial keydown
        angle-=1;
        if(angle < -360) {
            angle = 0;
        } 
    },5);
    }

    function unClick(){
        clearInterval(time);
    }

    function keyDown(e) {
        if(e.repeat) {return} // prevents setInterval looping on keyhold 
        document.removeEventListener('keydown', keyDown); // prevents bug caused when multiple keys are pressed
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
            clearInterval(time);
            document.addEventListener('keydown', keyDown);
        }
    }
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    document.getElementById("left-direction-btn").addEventListener("mousedown", moveLeft);
    document.getElementById("left-direction-btn").addEventListener("mouseup", unClick);
    document.getElementById("right-direction-btn").addEventListener("mousedown", moveRight);
    document.getElementById("right-direction-btn").addEventListener("mouseup", unClick);

    //-- Allows page to be reloaded on resize and reset button click -------------------------------------
    function reload(){
        window.location.reload(true);
        }

    // comment here
    for(var i = 0; i < numberOfStars; i++){ // maintains Star instances to the defined number of stars
        starsArray[i] = new Star(Math.random()*cnvsWidth, Math.random()*cnvsHeight, Math.random()*cnvsWidth); // generates new star object per array iteration
    }

    for(var i = 0; i < numberOfSprites; i++) { // maintains object instances to the defined number
        spritesArray[i] = new Sprite(centerOfX, centerOfY, Math.random()*cnvsWidth); // generates new Sprite object per array iteration
    }

    // Calls function once to initially allow one frame of stars to be rendered so that they are visible behind the start panel 
    drawStars(); 

    //-- removes the start panel and starts further animation --------------------------------------------
    document.getElementById("start-btn").addEventListener("click", initialise_game);

    function initialise_game(){
        document.getElementById("start-panel").classList.toggle("hidden");

        function update() { // defines what happens when update is called at bottom
            drawStars();
            drawSprites();
            drawPlayerCraft();
            window.requestAnimationFrame(update); // recalls the update function per frame - makes animations move
            console.log(angle)
        }

        update(); // calls function to trigger the animation
    }
}