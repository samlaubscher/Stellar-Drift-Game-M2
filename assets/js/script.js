window.onload = function () {
  // Makes sure window is loaded first before running
  document.getElementById("crash-panel").classList.toggle("hidden"); // hides the crash screen
  document.getElementById("completed-panel").classList.toggle("hidden"); // hides the crash screen
  document.getElementById("bottom-banner").classList.toggle("hidden");
  window.addEventListener("resize", reload, false); // restarts the function on resize
  document.getElementById("mute").addEventListener("click", toggleMute);
  // Reloads page when game restarted / reset button pressed
  document.getElementById("reset").addEventListener("click", reload);
  // Launches animations when Start Game button pressed
  document
    .getElementById("start-btn")
    .addEventListener("click", initialiseGame);

  //--Global Variables------------------------------------------------------------------------------------------------
  //--Canvas Properties-------------------------------------------------------------
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d", { alpha: false });
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
  // Unit of size manipulated in generation of objects
  var size = 1;
  // Angle of canvas rotation for player ship object
  var angle = 0;
  var score = -100;
  // Arrays to store object instances
  var starsArray = [];
  var spritesArray = [];
  // Time measurement used for ship direction funtionality
  var time = null;
  // Used to control the stopping of certain animations
  var endGame = false;
  // Responsive variables - number of objects generated on-screen at one time & speed of generated objects
  if (cnvsWidth < 360) {
    var numberOfStars = 650;
    var numberOfSprites = 6;
    var speed = 2;
  } else if (cnvsWidth < 768) {
    var numberOfStars = 900;
    var numberOfSprites = 8;
    var speed = 4;
  } else if (cnvsWidth < 1200) {
    var numberOfStars = 1200;
    var numberOfSprites = 9;
    var speed = 6;
  } else {
    var numberOfStars = 1500;
    var numberOfSprites = 10;
    var speed = 10;
  }

  //--Class Definitions--------------------------------------------------------------------------------------------
  // Background Stars (Inspired by Sharad Choudhary's formula)---------------------------------------
  class Star {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    moveStar() {
      // Each tick minuses the z position based on speed
      this.z = this.z - speed;
      // If object reaches the top of canvas z index (0) this resets z value to the very back of canvas
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

      // Generates circular star shapes, changing colour as points increase
      ctx.beginPath();
      if (score <= 1000) {
        ctx.fillStyle = "#82caff";
      } else if (score <= 2100) {
        ctx.fillStyle = "#00FA9A";
      } else if (score <= 3000) {
        ctx.fillStyle = "#306eff";
      } else if (score <= 4000) {
        ctx.fillStyle = "#7609c4";
      } else if (score <= 4500) {
        ctx.fillStyle = "#6900b4";
      } else if (score <= 5000) {
        ctx.fillStyle = "#1b1bd6";
      } else if (score <= 5500) {
        ctx.fillStyle = "#7f00d4";
      } else if (score <= 6000) {
        ctx.fillStyle = "#132aff";
      } else if (score <= 6500) {
        ctx.fillStyle = "#00708b";
      } else if (score <= 7000) {
        ctx.fillStyle = "#386323";
      } else if (score <= 7500) {
        ctx.fillStyle = "#5d794f";
      } else if (score <= 8000) {
        ctx.fillStyle = "#4cc437";
      } else if (score <= 8500) {
        ctx.fillStyle = "#838383";
      } else if (score <= 10000) {
        ctx.fillStyle = "#704cf0";
      }
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
        // Enables 0 to be generated on X axis
        if (Math.random() < 0.02) {
          this.randomX = 0;
        } else {
        // Ensures positions stay random each time a new array object is instanciated
          this.randomX = notZeroRange(-10, 10); 
        }
        this.randomY = notZeroRange(-10, 10);
      }
    }

    showSprite() {
      if (score >= 0) {
        let xPos = this.x;
        let yPos = this.y;
        // Changes size of the sprite in relation to the center of canvas and Z value, creating the illusion of them getting closer each frame
        let s = (size / 2) * (cnvsLength / this.z);

        // Ensures sprites generate randomly within close proximity to the center of screen but not the direct center.
        xPos = xPos + s * this.randomX;
        yPos = yPos + s * this.randomY;

        // Generates circular sprite shapes, changing colour as points increase
        ctx.beginPath();
        if (score <= 2400) {
          ctx.fillStyle = "red";
        } else if (score <= 2425) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 2450) {
          ctx.fillStyle = "red";
        } else if (score <= 2475) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 2500) {
          ctx.fillStyle = "red";
        } else if (score <= 2525) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 6300) {
          ctx.fillStyle = "#e5e4e2";
        } else if (score <= 7500) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 7525) {
          ctx.fillStyle = "red";
        } else if (score <= 7550) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 7575) {
          ctx.fillStyle = "red";
        } else if (score <= 7600) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 7625) {
          ctx.fillStyle = "red";
        } else if (score <= 7650) {
          ctx.fillStyle = "#d1d1d1";
        } else if (score <= 10000) {
          ctx.fillStyle = "red";
        }
        ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
        ctx.fill();

        // Passes the x, y and z values into a function to allow access from outside of the method and class
        collisionDetection(xPos, yPos);
      }
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

  // Returns a number avoiding zero by never being between -1.75 and 1.75
  function notZeroRange(min, max) {
    if (getRandom(0, 1) > 0.5) {
      return getRandom(min, -1.75);
    } else {
      return getRandom(1.75, max);
    }
  }

  // Toggle the mute audio feature on-screen
  function toggleMute() {
    music.muted = !music.muted;
    explosion.muted = !explosion.muted;
    start.muted = !start.muted;
    completed.muted = !completed.muted;
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
  function playerShip() {
    x1 = 0;
    y1 = 0 + centerOfY / 2;
    x2 = 30;
    y2 = 0 + centerOfY / 2 + 20;
    x3 = -30;
    y3 = 0 + centerOfY / 2 + 20;
    s = 9;

    // Transform canvas to center of screen for ship rotation
    ctx.save();
    ctx.translate(centerOfX, centerOfY);
    ctx.rotate(convertToRadians(angle));

    // Under Glow
    ctx.beginPath();
    ctx.fillStyle = "Violet";
    ctx.moveTo(x1, y1 - 1);
    ctx.lineTo(x2 + 5, y2 + 3);
    ctx.lineTo(x3 - 5, y3 + 3);
    ctx.fill();

    // small engine light right
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 + 23, y2, s / 2, 0, Math.PI * 1);
    ctx.fill();

    // Engine light right
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 + 12, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // Engine light middle
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // Engine light left
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 - 12, y2 - 3, s, 0, Math.PI * 1);
    ctx.fill();

    // small engine light left
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x1 - 23, y2, s / 2, 0, Math.PI * 1);
    ctx.fill();

    // top black triangle
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 + 4, y2);
    ctx.lineTo(x3 - 4, y3);
    ctx.fill();

    // Restore canvas to saved state before transformation
    ctx.restore();
  }

  //--Directional functionality ----------------------------------------------------------------------
  function moveLeft() {
    // Removes the delay in movement after initial keydown
    time = setInterval(function () {
      // Appends angle value to ships angle of position
      angle += 2;
      if (angle > 360) {
        angle = 0;
      }
    }, 10);
  }

  function moveRight() {
    // Removes the delay in movement after initial keydown
    time = setInterval(function () {
      // Appends angle value to ships angle of position
      angle -= 2;
      if (angle < -360) {
        angle = 0;
      }
    }, 10);
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
    } else if (e.key === "Enter" && score < -99) {
      initialiseGame();
    } else if (e.key === "Enter" && endGame) {
      reload();
    }
  }

  function keyUp(e) {
    if (
      e.key === "ArrowLeft" ||
      e.key === "Left" ||
      e.key === "ArrowRight" ||
      e.key === "Right" ||
      e.key === "Enter"
    ) {
      clearInterval(time);
      document.addEventListener("keydown", keyDown);
    }
  }
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
  document
    .getElementById("left-direction-btn")
    .addEventListener("touchstart", moveLeft, {passive: true});
  document
    .getElementById("left-direction-btn")
    .addEventListener("touchend", unClick);
  document
    .getElementById("right-direction-btn")
    .addEventListener("touchstart", moveRight, {passive: true});
  document
    .getElementById("right-direction-btn")
    .addEventListener("touchend", unClick);

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
  function collisionDetection(x, y) {
    if (
      x - getShipLocation(angle)[0] <= 35 &&
      x - getShipLocation(angle)[0] >= -35 &&
      y - getShipLocation(angle)[1] <= 35 &&
      y - getShipLocation(angle)[1] >= -35
    ) {
      crashScreen();
    }
  }

  // Draws score onto screen
  function drawScore() {
    if (cnvsWidth <= 600) {
      ctx.font = "4vw Orbitron, sans-serif";
    } else {
      ctx.font = "2vw Orbitron, sans-serif";
    }
    ctx.strokeText("SCORE:" + score, 10, cnvsHeight - 10);
    ctx.strokeStyle = "rgba(252, 252, 252, 0.486)";
  }

  // Increases the score per frame
  function scoreIncrease() {
    score += 1;
    if (score == 10000) {
      completedScreen();
    }
  }

  function countdown() {
    if (score < -66) {
      document.getElementById("countdowntimer").innerHTML = "3";
    } else if (score < -33) {
      document.getElementById("countdowntimer").innerHTML = "2";
    } else if (score < 0) {
      document.getElementById("countdowntimer").innerHTML = "1";
    } else {
      document.getElementById("countdowntimer").innerHTML = null;
    }
  }

  // Increases the speed per frame
  function speedIncrease() {
    if (score < 2500 && cnvsWidth < 600) {
      speed += 0.002;
    } else if (score < 2500 && cnvsWidth < 1200) {
      speed += 0.005;
    } else if (score < 2500) {
      speed += 0.01;
    } else if (score < 5000 && cnvsWidth < 600) {
      speed += 0.001;
    } else if (score < 5000 && cnvsWidth < 1200) {
      speed += 0.003;
    } else if (score < 5000) {
      speed += 0.005;
    } else if (score < 7500 && cnvsWidth < 600) {
      speed += 0.0005;
    } else if (score < 7500 && cnvsWidth < 1200) {
      speed += 0.0002;
    } else if (score < 7500) {
      speed += 0.001;
    }
  }

  // Screen to show finishing score and allow a restart
  function crashScreen() {
    document.getElementById("bottom-banner").classList.toggle("hidden");
    document.getElementById("crash-panel").classList.toggle("hidden");
    document.getElementById("github").classList.toggle("hidden");
    document.getElementById("restart-btn").addEventListener("click", reload);
    document.getElementById("explosion").play();
    endGame = true;
  }

  // Screen to show completed score and allow a restart
  function completedScreen() {
    document.getElementById("bottom-banner").classList.toggle("hidden");
    document.getElementById("completed-panel").classList.toggle("hidden");
    document.getElementById("github").classList.toggle("hidden");
    document.getElementById("restart-btn").addEventListener("click", reload);
    document.getElementById("completed").play();
    endGame = true;
  }

  // Defines what happens when update is called at bottom
  function update() {
    if (!endGame) {
      window.requestAnimationFrame(update);
      drawStars();
      drawSprites();
      playerShip();
      drawScore();
      speedIncrease();
      scoreIncrease();
      countdown();
    } else {
      window.requestAnimationFrame(update);
      drawStars();
      document.getElementById("score-output").innerHTML = score;
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
  function initialiseGame() {
    // Hides instructions & start game panel------------------------------------------------------------
    document.getElementById("start-panel").classList.toggle("hidden");
    document.getElementById("bottom-banner").classList.toggle("hidden");
    document.getElementById("github").classList.toggle("hidden");
    document.getElementById("start").play();
    document.getElementById("music").play();

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
