window.onload = function () {
  // Makes sure window is loaded first before running
  document.getElementById("crash-panel").classList.toggle("hidden"); // hides the crash screen
  window.addEventListener("resize", reload, false); // restarts the function on resize
  // Reloads page when game restarted / reset button pressed
  document.getElementById("reset").addEventListener("click", reload);
  // Launches animations when Start Game button pressed
  document.getElementById("start-btn").addEventListener("click", initialise_game);

  //--Global Variables------------------------------------------------------------------------------------------------
  //--Canvas Properties-------------------------------------------------------------
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // Sets the sizes to inner window sizes. -4 removes scroll bar
  const cnvsWidth = window.innerWidth;
  const cnvsHeight = window.innerHeight - 4;
  // Sets dimensions to these variables
  ctx.canvas.width = cnvsWidth;
  ctx.canvas.height = cnvsHeight;
  // Length of canvas
  const cnvsLength = canvas.width;
  // Center points of the canvas
  const centerOfX = canvas.width / 2;
  const centerOfY = canvas.height / 2;
  // For rotation plotting
  var shipFromCenter = centerOfY / 2;

  //--Applicable Object Properties----------------------------------------------------
  // Number of objects generated on-screen at one time
  var numberOfStars = 1500;
  var numberOfSprites = 10;
  // Unit of size manipulated in generation of objects
  var size = 1;
  // Speed of movement of generated objects
  var speed = 30;
  // Angle of canvas rotation for player ship object
  var angle = 0;
  // Arrays to store object instances
  var starsArray = [];
  var spritesArray = [];
  // Time measurement used for ship direction funtionality
  var time = null;
  // Used to control the stopping of certain animations
  var endGame = false;

  //--Audio Controls for background music-----------------------------------------------------------------
  const audio = document.getElementById("player");
  player.controls = false;
  document.getElementById("mute").addEventListener("click", toggleMute);

  // Ship Location array destruction
  let shipX, shipY;
  [shipX, shipY] = getShipLocation(angle);

  //--Class Definitions--------------------------------------------------------------------------------------------
  // Background Stars---------------------------------------
  class Star {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    moveStar() {
      // Each tick minuses the z position based on speed so they move towards screen at a constant speed
      this.z = this.z - speed;
      // If object reaches the end of canvas this resets it to the back creating a loop
      if (this.z <= 0) {
        this.z = cnvsWidth;
        // Ensures Stars generate in a different position each time they are rerendered
        this.x = Math.random() * cnvsWidth;
        this.y = Math.random() * cnvsHeight;
      }
    }

    showStar() {
      // Random values passed into the class are mathmatically processed to create large or small values for starting positions on canvas,
      // When the Z value increases in moveStar method, these mathmatics increase both xPos and yPos consistently each frame for a smooth path of movement
      let xPos = (this.x - centerOfX) * (cnvsLength / this.z);
      let yPos = (this.y - centerOfY) * (cnvsLength / this.z);
      // Relocates zero to center of screen and ensures objects move away from this center including object positions decreasing in value
      xPos = xPos + centerOfX;
      yPos = yPos + centerOfY;
      // Changes size of the star in relation to the center of canvas and Z value, creating the illusion of them being closer or further away
      let s = size * (cnvsLength / this.z);

      // Generates circular star shapes
      ctx.beginPath();
      ctx.fillStyle = "MediumSpringGreen";
      ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Sprites--------------------------------------------------
  class Sprite {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      // Ensures sprites random position never generates too close to 0, preventing object paths from finishing in the middle of screen
      this.randomX = notZeroRange(-10, 10);
      this.randomY = notZeroRange(-10, 10);
    }

    moveSprite() {
      // Each tick minuses the z position based on speed so they move towards screen at a constant speed
      this.z = this.z - speed / 2;
      // Resets the object to back of z dimension when it reaches edge of canvas and value goes below 0
      if (this.z <= 0) {
        this.z = cnvsWidth;
        // Ensures positions stay random each time a new array object is instanciated
        this.randomX = notZeroRange(-10, 10);
        this.randomY = notZeroRange(-10, 10);
      }
    }

    showSprite() {
      let xPos = this.x;
      let yPos = this.y;
      // Changes size of the sprite in relation to the center of canvas and Z value, creating the illusion of them getting closer each frame
      let s = (size / 2) * (cnvsLength / this.z);

      // Ensures sprites generate randomly within close proximity to the center of screen but not the direct center.
      xPos = xPos + s * this.randomX;
      yPos = yPos + s * this.randomY;

      // Generates circular sprite shapes
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
      ctx.fill();

      // Passes the x, y and z values into a function to allow access from outside of the method and class
      collectSpriteValues(xPos, yPos);
    }
  }

  //--Functions----------------------------------------------------------------------------------
  // Allows rotation to be set to angle
  function convertToRadians(degree) {
    return degree * (Math.PI / 180);
  }

  // Generates random number between two values
  function getRandom(min, max) {
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

  // Toggle the mute audio feature on-screen
  function toggleMute() {
    player.muted = !player.muted;
    document.getElementById("i-muted").classList.toggle("hidden");
    document.getElementById("i-not-muted").classList.toggle("hidden");
  }

  //--Background animation functionality -------------------------------------------------
  function drawStars() {
    if (!endGame) {
      ctx.fillStyle = "#000"; // draws black background each frame to clear the previous frame
      ctx.fillRect(0, 0, cnvsWidth, cnvsHeight);
    } else {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // creates tail effect on stars once game ends
      ctx.fillRect(-1000, -1000, canvas.width + 3000, canvas.height + 3000);
      ctx.translate(centerOfX, centerOfY);
      ctx.rotate(Math.PI * -0.0009); // slowly rotates the canvas behind end game panel
      ctx.translate(-centerOfX, -centerOfY);
    }

    for (var i = 0; i < numberOfStars; i++) {
      // maintains object instances to the defined number per frame
      starsArray[i].showStar(); // shows star objects per array iteration
      starsArray[i].moveStar(); // calls the function allowing it to move
    }
  }

  function drawSprites() {
    // allows Sprites to be rendered only once start panel dissapears
    for (var i = 0; i < numberOfSprites; i++) {
      // maintains object instances to the defined number per frame
      spritesArray[i].showSprite();
      spritesArray[i].moveSprite();
    }
  }

  //--Player spaceship functionality & properties ------------------------------------------------------------
  function drawPlayerShip() {
    x1 = 0;
    y1 = 0 + centerOfY / 2;
    x2 = 50;
    y2 = 0 + centerOfY / 2 + 30;
    x3 = -50;
    y3 = 0 + centerOfY / 2 + 30;
    s = 14;

    // Transform canvas to center of screen for ship rotation
    ctx.save();
    ctx.translate(centerOfX, centerOfY);
    ctx.rotate(convertToRadians(angle));

    // Under Glow
    ctx.beginPath();
    ctx.fillStyle = "Violet";
    ctx.moveTo(x1, y1 - 1);
    ctx.lineTo(x2 + 5, y2 + 5);
    ctx.lineTo(x3 - 5, y3 + 5);
    ctx.fill();

    // small engine light right
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 + 38, y2 - 3, s / 2, 0, Math.PI * 1);
    ctx.fill();

    // Engine light right
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 + 21, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // Engine light middle
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // Engine light left
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 - 21, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // small engine light left
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 - 38, y2 - 3, s / 2, 0, Math.PI * 1);
    ctx.fill();

    // top black triangle
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 + 1, y2);
    ctx.lineTo(x3 - 1, y3);
    ctx.fill();

    // Restore canvas to saved state before transformation
    ctx.restore();
  }

  //--Directional functionality ----------------------------------------------------------------------
  function moveLeft() {
    // Removes the delay in movement after initial keydown
    time = setInterval(function () {
      // Appends angle value to ships angle of position
      angle += 1;
      if (angle > 360) {
        angle = 0;
      }
    }, 5);
  }

  function moveRight() {
    // Removes the delay in movement after initial keydown
    time = setInterval(function () {
      // Appends angle value to ships angle of position
      angle -= 1;
      if (angle < -360) {
        angle = 0;
      }
    }, 5);
  }

  function unClick() {
    clearInterval(time);
  }

  function keyDown(e) {
    // prevents setInterval looping on keyhold
    if (e.repeat) {
      return;
    }
    // prevents bug caused when multiple keys are pressed
    document.removeEventListener("keydown", keyDown);
    if (e.key === "ArrowLeft" || e.key === "Left") {
      moveLeft();
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      moveRight();
    }
  }

  function keyUp(e) {
    if (
      e.key === "ArrowLeft" ||
      e.key === "Left" ||
      e.key === "ArrowRight" ||
      e.key === "Right"
    ) {
      clearInterval(time);
      document.addEventListener("keydown", keyDown);
    }
  }
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
  document
    .getElementById("left-direction-btn")
    .addEventListener("mousedown", moveLeft);
  document
    .getElementById("left-direction-btn")
    .addEventListener("mouseup", unClick);
  document
    .getElementById("right-direction-btn")
    .addEventListener("mousedown", moveRight);
  document
    .getElementById("right-direction-btn")
    .addEventListener("mouseup", unClick);

  //-- Allows page to be reloaded on screen resize and click of on-screen reset button ----
  function reload() {
    window.location.reload(true);
  }

  //---- Code to generate X and Y positions of the Ship object to create an array used for collision detection
  // Gets the positive angle value
  function getActualAngle(angle) {
    if (angle >= 0 && angle < 270) {
      return angle + 90;
    } else if (angle >= 270) {
      return angle - 270;
    } else if (angle >= -90 && angle < 0) {
      return 360 + angle - 270;
    } else {
      return 360 + angle;
    }
  }

  // Get the numbers associated with angle
  function getAngleNumber(angle) {
    const angleInRadians = (angle * Math.PI) / 180;
    return [Math.cos(angleInRadians), Math.sin(angleInRadians)];
  }

  function getAllPossibleShipLocations() {
    let shipLocations = {};
    function getXShipValue(angle) {
      let actualAngle = getActualAngle(angle);
      if (actualAngle >= 0 && actualAngle <= 360) {
        return getAngleNumber(angle)[0];
      } else {
        return -getAngleNumber(angle)[0];
      }
    }
    function getYShipValue(angle) {
      let actualAngle = getActualAngle(angle);
      if (actualAngle >= 0 && actualAngle <= 360) {
        return getAngleNumber(angle)[1];
      } else {
        return -getAngleNumber(angle)[1];
      }
    }
    function generateX(angle) {
      let shipValue = getXShipValue(angle) * shipFromCenter;
      return centerOfX + shipValue;
    }
    function generateY(angle) {
      let shipValue = getYShipValue(angle) * shipFromCenter;
      return centerOfY + shipValue;
    }
    // loops through all posible angle and generates x,y positions
    for (i = 0; i < 360; i++) {
      let angleKey = i.toString();
      shipLocations[angleKey] = [generateX(i), generateY(i)];
    }
    return shipLocations;
  }

  // Called when ship moves
  function getShipLocation(angle) {
    // Gets the positive angle value
    function getActualAngle(angle) {
      if (angle >= 0 && angle < 270) {
        return angle + 90;
      } else if (angle >= 270) {
        return angle - 270;
      } else if (angle >= -90 && angle < 0) {
        return 360 + angle - 270;
      } else {
        return 360 + angle + 90;
      }
    }
    let actualAngle = getActualAngle(angle).toString();
    // returns the value of the associated angle
    return getAllPossibleShipLocations()[actualAngle];
  }

  // collision detection using the x and y of the sprites
  function collectSpriteValues(x, y) {
    if (
      x - getShipLocation(angle)[0] <= 50 &&
      x - getShipLocation(angle)[0] >= -50 &&
      y - getShipLocation(angle)[1] <= 50 &&
      y - getShipLocation(angle)[1] >= -50
    ) {
      console.log("HIT!");
      crashScreen();
    }
  }

  function crashScreen() {
    document.getElementById("crash-panel").classList.toggle("hidden");
    document.getElementById("restart-btn").addEventListener("click", reload);
    endGame = true;
  }

  // Defines what happens when update is called at bottom
  function update() {
    if (!endGame) {
      drawStars();
      drawSprites();
      drawPlayerShip();
      window.requestAnimationFrame(update);
    } else {
      drawStars();
      window.requestAnimationFrame(update);
    }
  }

  //--Code functionality-------------------------------------------------------------------------------------------------------------------

  // Instanciation of array Star objects-----------------------------------------------------------------
  for (var i = 0; i < numberOfStars; i++) {
    // Generates new Star object per array iteration
    starsArray[i] = new Star(
      Math.random() * cnvsWidth,
      Math.random() * cnvsHeight,
      Math.random() * cnvsWidth
    );
  }

  // Calls function once to initially allow one frame of stars to be rendered so that they are visible behind the start panel
  drawStars();

  // Initiation of Sprite & player ship animations-------------------------------------------------------
  function initialise_game() {
    // Hides instructions & start game panel------------------------------------------------------------
    document.getElementById("start-panel").classList.toggle("hidden");

    for (var i = 0; i < numberOfSprites; i++) {
      // Generates new Sprite object per array iteration
      spritesArray[i] = new Sprite(
        centerOfX,
        centerOfY,
        Math.random() * cnvsWidth
      );
    }

    // Calls update function to trigger canvas animations
    update();
  }
};
