<div align="center">

<img src="stellar-drift-name.gif" alt="Sprites">

# Stellar Drift | Mini Game

#### An interactive and challenging 3D space themed mini game, built using vanilla javascript!

Stellar Drift is a game that will test your focus, reaction times, and ability to dodge multiple oncoming targets at speed! Have you got the skills to maneuvre the ship as you race through the asteroid field to reach the winning score of 10,000? 

As your score increases, so will your speed! Watch for the colours changing to indicate your progression! To control the ship, use the left and right arrow keys, or for mobile and tablet users, touch anywhere on the the left and right sides of the screen. When you're ready, hit the Enter key or press the Start Game button to begin... good luck!

[**Click here to play the game**](https://samlaubscher.github.io/Stellar-Drift-Game-M2/)

##### This project was developed for my Interactive Frontend Development module on my Full Stack Software Development course.


</div>

---
## Table of Contents
* [**1 UX**](#ux)
    * [**1.1 Overview**](#overview)
    * [**1.2 Project Goals**](#project-goals)
    * [**1.3 User Goals**](#user-goals)
    * [**1.4 Design Process**](#design-process)
      * [**Colour Scheme**](#colour-scheme)
      * [**Typography**](#typography)
      * [**Wireframes**](#wireframes)
      * [**Development Stages**](#development-stages)

* [**2 Features**](#features)
    * [**2.1 Existing Features**](#existing-features)
      * [**Canvas API graphics animation**](#Canvas-api-graphics-animation)
      * [**Animated star background**](#Animated-star-background)
      * [**Animated asteroid sprites**](#Animated-steroid-sprites)
      * [**Player ship movement**](#Player-ship-movement)
      * [**Player ship controls**](#Player-ship-controls)
      * [**Collision detection**](#Collision-detection)
      * [**Start screen**](#Start-screen)
      * [**Start game button**](#Start-game-button)
      * [**Mute audio button**](#Mute-audio-button)
      * [**Reset button**](#Reset-button)
      * [**Github social icon**](#Github-social-icon)
      * [**Crash screen**](#Crash-screen)
      * [**Completed screen**](#Completed-screen)
      * [**Score counter**](#Score-counter)
      * [**Countdown timer**](##Countdown-timer)
      * [**Speed change**](#Speed-change)
      * [**Colour changing**](#Colour-changing)
      * [**Music & Audio**](#Music-&-Audio)
    * [**2.2 Features Left to Implement**](#Features-left-to-impliment)
      * [**Score History & Leaderboard**](#Score-History-&-Leaderboard)
      * [**Better Colour Transitions**](#better-colour-transitions)
      * [**Tighter Collision Detection**](#tighter-collision-detection)
      * [**Additional Sprite Type Objects**](#additional-sprite-type-objects)

* [**3 Technologies Used**](#technologies-used)
    * [**3.1 Languages**](#languages)
      * [**HTML/HTML 5**](#html/html-5)
      * [**CSS/CSS3**](#css/css3)
      * [**JavaScript ES6**](#JavaScript-ES6)
    * [**3.2 Libraries**](#libraries)
      * [**Canvas API**](#canvas-api)
      * [**Font Awesome**](#font-awesome)
      * [**Google Fonts API**](#Google-Fonts-API)
    * [**3.3 Tools**](#Tools)
      * [**VSCode**](#vscode)
      * [**Chrome DevTools**](#chrome-devtools)
      * [**Git**](#git)
      * [**GitHub**](#github)
      * [**GitHub Pages**](#github-pages)
      * [**EZGIF**](#ezgif)
      * [**GNU Image Manipulation Program**](#GNU-Image-Manipulation-Program)
      * [**Ableton Live 10**](#Ableton-Live-10)


* [**4 Testing**](#testing)
  * [**4.1 Completed**](#completed)
  * [**4.2 Bugs**](#bugs)
    * [**Fixed**](#fixed)
    * [**Still Existing**](#still-existing)

* [**5 Deployment**](#deployment)

* [**6 Credits**](#credits)
    * Contents and code
    * Media 
    * Acknowledgements

---
## 1 UX
### 1.1 Overview
When starting this project, I knew I wanted to develop something highly interactive and engaging, not only for the user but for me as the developer. I wanted to create a responsive and dynamic front end website, demonstrating an ability to effectively understand and impliment the use of multiple programming languages, but most of all I wanted to really step out of my comfort zone and push myself to create something I would ultimately learn a considerable amount from. I liked the idea of building a game from vanilla JavaScript and remembered a video I had once seen about making a starfield simulation using just JavaScript and some clever code.

I had recently discovered the music synth wave with its asthetical retro space-age themed artwork, so this twinned with the stars idea quickly became inspiration for building a space themed game and creating the music that accompanies it.

### 1.2 Project Goals
The aim of this project is to create a visually asthetic game, aimed at those who like fast paced reaction and skill driven gameplay. It must remain engaging and require the user to maintain constant focus and interaction with  it at speed, having the game respond accordingly and effectively to these inputs. 

>"The goal of every video game is to present the user(s) with a situation, accept their input, interpret those signals into actions, and calculate a new situation resulting from those acts." - https://developer.mozilla.org/en-US/docs/Games/Anatomy 

I wanted a way for players to be able to win the game, but not very easily otherwise they would get bored quickly, and gamers often like a challenge.

### 1.3 User Goals
* As a user, I want to be able to play a game that has a visual appeal, with background music that fits with the theme to make it more immersive.
* As a user, I want to be presented with the instructions and controls before the game starts so that I am comfortable with how to play. 
* As a user, I want to be able to see my progression throughout the game so that I am aware of how well I am doing. 
* As a user, I want to clearly see when my interactions with the game have an affect on it.
* As a user, I want to be able to easily mute any audio if required.
* As a user, I want to have the developers information available incase I want to check out their other work or make contact.
* As a user, I wanted to have a clear way to start the game, and to restart it if I die. 
* As a user, I do not want the controls to be unreliable and buggy as this will ruin my experience. 

>A gamer can excuse flaws in graphics, but he will never tolerate poorly designed controls. Imagine how unhappy the user who accidentally tapped All In instead of Fold in the middle of a poker round would be. - (Bura and Coates, 2012, p.43)

### 1.4 Design Process
Taking inspiration from the video I had seen on the JavaScript starfield simulation, I wanted to design this game using the whole viewport so that stars could travel right to the edge of the screen, making it more immersive. I had to decide how I would move the player around the screen, as it could only travel in two dimentions wheras the stars look like they are travelling in three. I really wanted to create a tunnel type barrage of asteroids travelling towards the player, so allowing the ship to rotate around the center point of them spawning worked perfectly.

### **Colour scheme**
I wanted the game to have the obvious dark theme of space so neutral blacks, greys and white, but also with a single colour thrown in to create a bit of visual warmth and ambience.

<div align="center">

<img src="colours-1 (11).png" alt="Theme colours" width="500">
</div>

* 000000 - This is the main colour on the page as it is used for the black background of space, as well as the middle lettering for the title.
* 0C0C0C - This dark shade is used for the reset button and matches the transparent colour of the panel behind the text on the star page.
* 383838 - This is the colour used for the Start Game and Restart Game buttons.
* A8A8A8 - This slightly lighter shade is used for the mute button and github icon, as well as the credits.
* FFFFFA - This is the off white colour used for all of the text on screen.
* 2C2666 - This is the one colour I placed into the main title above the game. I used layers with different transparency to create the glowing effect which i feel gives the game a nice neon feel.

Below are the colours the stars transition between when the score increases.

<div align="center">

<img src="colours.png" alt="Theme colours" width="500">
</div>

### **Typography**

The font is one of the most important aspects of the design process, so the title and text font has to fit the space theme. I used 'Audiowide' for the main title and layered multiple h2 elements offset to create a 3d drop shadow with a neon glow. The main body text font is 'Oxanium' which is a really nice squared font that works with the digital look. 'Orbitron' is used for the score counter, the font works well with the black background as the styled line through the letters stops the font being too visually stimulating, taking away focus from the center. 

### **Wireframes**

I created two wireframes for this project using Balsamiq. I did not want to put too much content on the screen as I was aiming for an old arcade feel, and too much would take away from this.

* For the start screen, I wanted to present the users with a panel containing a brief overview of the game with instructions and controls, as well as a start button like most games. I wanted to impliment a pause or restart button but keep this low profile and in the corner. Audio would be playing which meant I would need a mute button, as well as a way for users to access the GitHub repository. The crash screen could use this same layout.

<div align="center">

<img src="WIREFRAME - START.JPG" alt="Theme colours" width="500">
</div>

* When the game starts, I wanted to remove the panel and GitHub icon so that as much of the screen was the moving starfield as possible. The ship spawns on the lower half of the screen and users can rotate left and right to dodge the oncoming asteroids. The two directional buttons would later be changed to the entire left and right sides of the screen and become invisible.

<div align="center">

<img src="WIREFRAME - PLAY.JPG" alt="Theme colours" width="500">
</div>

I did not feel the need to create a seperate mobile wireframe, as the layout would remain exactly the same, just on a smaller screen.

### **Development Stages** 
To ensure the development of my project was maintainable and manageable, I created a list of stages to follow. This meant I am able to efficiently focus on individual areas and progress logically as I complete each stage.

* Create and style Canvas
* Create stars background
* Create start page layout
* Create title
* Create buttons
* Finish start page
* Create asteroid Sprite functionality
* Create player ship
* Create player movement functionality
* Create collision detection functionality
* Create crash and completed screens
* Create score system
* Clean up code and fix bugs
 
 [Back to Table Of Contents](#table-of-contents)

---
## 2 Features 
### 2.1 Existing Features

### **Canvas API graphics animation**
The Canvas API covers the entire screen and 2D graphic shapes and text are rendered onto it using JavaScript. These are then animated in a main loop by calling a specific update callback function to run every frame (roughly 60 times per second) using the browser redraw schedule with *window.requestAnimationFrame(update)*. This update function calls other specific functions containing logical algorhythms which are mostly designed to change certain parameters of the content that the function may render each frame.

### **Animated star background**
Circular shapes used for stars are individually rendered to the canvas using an array of `Star` class objects. Using a for loop, the required number of `starsArray[]` indexes are generated, each iteration instanciating a new `Star` class object, passing in x, y and z constructor arguments of `(Math.random() * canvas.width or height)`. 

```
for (var i = 0; i < numberOfStars; i++) {
    starsArray[i] = new Star(
      Math.random() * cnvsWidth,
      Math.random() * cnvsHeight,
      Math.random() * cnvsWidth
    );
  } 
```

 Within this function below, the entire canvas is cleared to black, and then a for loop iterates over each `starsArray[]` index.

```
function drawStars() {
    if (!endGame) {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cnvsWidth, cnvsHeight);
    } else {[...]}

    for (var i = 0; i < numberOfStars; i++) {
      starsArray[i].showStar();
      starsArray[i].moveStar();
    }
}
```
The `Star` class contains two additional methods - `moveStar()` and `showStar()`, which are both called on the object each iteration using the function `drawStars()` which is shown above.

```
class Star {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    } [...]
  ```

In the `showStar()` method, focusing on `xPos`, it takes the value of `this.x` and subtracts half of the screen width `(this.x - centerOfX)`, this allows the value to have an equal potential of being negative or positive. 

`this.z` is `Math.random()*cnvsWidth` so dividing the screen width by the value of `z` has a high possibility of returning a number smaller than 5, this number will only be larger if `Math.random()` generates a number below 0.2 `(cnvsLength / this.z)`.

This first value is then multiplied by the second, and then half of the canvas width is added back on as to shift the zero center mark to the middle of the x axis `xPos = xPos + centerOfX`. When the same has been done for the `yPos`, these are then able to be used for the x and y coordinates of the `arc()` method to draw the circular star shape.

```
[...]

showStar() {
  let xPos = (this.x - centerOfX) * (cnvsLength / this.z);
  let yPos = (this.y - centerOfY) * (cnvsLength / this.z);
  xPos = xPos + centerOfX;
  yPos = yPos + centerOfY;
  let s = size * (cnvsLength / this.z);

  ctx.beginPath();
  ctx.fillStyle = "#82caff";
  ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
  ctx.fill();
}}
  ```

The movement of this code comes from the `this.z` parameter within the `moveStar()` method. Each time the method is called, the value of `this.z` is being reduced by the value of `speed` which in turn affects the resulting value of `xPos`, `yPos` and `s` exponentially, the position and radius of the circular star shape. Each frame the canvas is cleared and then redrawn using slightly different object parameter values, creating the visual illusion - as objects get closer, their size and speed increase rapidly until they pass the observer. 

The smaller the value of `this.z`, the closer to the edge of the screen the object will be, and once the value of `z` reaches 0 and the star has left the screen, an if statement handles setting the value back to `cnvsWidth` which is when the star objects are the smallest and slowest. The `this.x` and `this.y` parameters are also given new values of `Math.random() * cnvsWidth` so that the star objects dont follow the same path each time.

```
[...]

moveStar() {
  this.z = this.z - speed;
  if (this.z <= 0) {
    this.z = cnvsWidth;
    this.x = Math.random() * cnvsWidth;
    this.y = Math.random() * cnvsHeight;
  }
    } [...]
```

Due to both x and y axes being centered in the middle, values moving in positive or negative incrimentations are all displayed as travelling outwards from the center of the screen in any given direction.

My original discovery of this algorythm comes from a youtube tutorial by Sharad Choudhary called *'Starfield Simulation: HTML5 Canvas Javascript Animation Tutorial'*, and although code has been changed here, I have used his basic formula so I must give credit.

### **Animated asteroid sprites**
Asteroid sprites are also rendered to the canvas using an array of `Sprite` class objects. This `spritesArray[]` works the same way as the `starsArray[]` by instanciating each index with a new `Sprite` object, and calling two additional methods on these indexes using a `drawSprites()` function. However, the `Sprite` class contains different code which allows it to behave seperately from the `Star` objects. Each array object is initialised with the `x` and `y` coordinates in the center of the canvas, as well as the constructor method containing additional properties of `this.randomX` and `this.randomY` with the values of `notZeroRange(-10, 10)`.

```
class Sprite {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.randomX = notZeroRange(-10, 10);
      this.randomY = notZeroRange(-10, 10);
    } [...]
```
 The global function `notZeroRange()` allows a random value to be generated within the range of -10 and 10, none inclusive of anything between -1.75 and 1.75. Its use here means the `Sprite` object can only render within this small ranged ring around the center of the screen, avoiding 0 which causes sprites to hit the center and fill the entire screen suddenly. This creates a type of visual tunnel that the sprites can travel down.

```
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function notZeroRange(min, max) {
    if (getRandom(0, 1) > 0.5) {
      return getRandom(min, -1.75);
    } else {
      return getRandom(1.75, max);
    }
  }
```
Within the `moveSprite()` method, `speed` has been halved and there are fresh `notZeroRange()` values called each time the `z` index resets for a new `Sprite` to be generated. An if statement is used to set `this.randomX` to 0 randomly with low odds in order to fix a bug with players staying on 0 and not crashing. The `speed` has been halved so that the background remains more engaging whilst the sprites are not too fast for the player. 

``` 
    [...]

    moveSprite() {
      this.z = this.z - speed / 2;
      if (this.z <= 0) {
        this.z = cnvsWidth;
        if (Math.random() < 0.02) {
          this.randomX = 0;
        } else {
          this.randomX = notZeroRange(-10, 10); 
        }
        this.randomY = notZeroRange(-10, 10);
      }
    } [...]
```
Within the `showSprite()` method, the movement is implimented differently through the use of `s` which is abbreviated for size or radius. `xPos` and `yPos` are set to the center of the canvas, and the `s` variable initially holds the only value that changes due to the use of `this.z`. When `s` is added to the `xPos` and `yPos`, that value is then multiplied by `this.randomX` or `this.randomY` which is one of these uniquely random generated values between -10 and 10 excluding -1.75-1.75. This means the incrimentations of each `xPos` and `yPos` values happen smoothly on a curve, and movement occurs within this much more limited range. Size ultimately governs the speed and movement of the `Sprite` objects, they can grow much larger than `Stars`, and as they expand they rapidly increase in speed and suddenly move very quickly away from the center and off the screen. This makes it look like the player is travelling much closer to the `Sprites` than the `Stars`.

<div align="center">

<img src="sprites-passing.gif" alt="Sprites">
</div>

At the bottom of the `showSprite()` method sits the invocation of the `collisionDetection()` function, directly passing in the arguments of `xPos` and `yPos` as to allow these parameter values to be used outside of the class scope and inside the `collisionDetection()` function.

```
    [...]

    showSprite() {
      if (score >= 0) {
        let xPos = this.x;
        let yPos = this.y;
        let s = (size / 2) * (cnvsLength / this.z);

        xPos = xPos + s * this.randomX;
        yPos = yPos + s * this.randomY;

        ctx.beginPath();
        if (score <= 2400) {
          ctx.fillStyle = "red";
        } else if {[...]}
        ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
        ctx.fill();

        collisionDetection(xPos, yPos);
}}}
```

### **Player ship movement**
The player ship is created using a combination of circular and triangular shapes rendered onto the canvas using the `arc()` and `lineTo()` methods. These shapes are rotated around the center of the canvas using `translate()` and `rotate()` methods.

First the entire state of the canvas is saved using the `save()` method. Next the `translate(centerOfX, centerOfY)` method is called which moves the canvas and its origin to the center of the screen. The `rotate()` method is then used with the argument of `convertToRadians(angle)`, meaning `angle` will correlate to the amount of rotation around this center point.

The shapes are then rendered onto the canvas using its new origin point. The ship would be located in the top left hand corner of the screen without this `translate()` method due to the parameter values of `x1 = 0` for example. Each of the `y` values include `centerOfY / 2`, used to drop the ship into the lower quarter of the screen, allowing for a perfect ship rotation around this bottom quarter ring once translation transformation has taken place.

Once all player ship shapes have been rendered, we dont want any other canvas content to be manipulated by this transformation, so the `restore()` method must be used to bring the canvas state back to how it was originally when `save()` was called. This is the same as effectively reversing the transformation methods and calling `translate()` and `rotate()` with the opposite values each time to revert it to its original state, however `restore()` is a much simpler, and more precise method to achieve this.

```
function playerShip() {
    x1 = 0;
    y1 = 0 + centerOfY / 2;
    x2 = 30;
    y2 = 0 + centerOfY / 2 + 20;
    x3 = -30;
    y3 = 0 + centerOfY / 2 + 20;
    s = 9;

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
    
    [...]

    ctx.restore();
  }
```

### **Player ship controls**
The player ship can be rotated around the screen using left and right arrow buttons via `keydown` and `keyup` event listeners on computer, or touching the left and right halves of the screen on mobile and tablet devices with `touchstart` and `touchend` event listeners.

<div align="center">

<img src="player-control.gif" alt="Workings - 1">
</div>

The rotation is achieved by increasing the value of the global variable `angle`. This is used in the `rotation(convertToRadians(angle))` method to control the canvas rotation as explained in ###Player ship movement. When the angle increases above 360, it resets to 0. `setInterval()` is used to remove the delay in movement after initial keydown which would stop the player having instant sustained movement. This also enables the function to be called 100 times a second which allows the ship to move smoothly at a much higher speed.

```
function moveLeft() {
    time = setInterval(function () {
      angle += 2;
      if (angle > 360) {
        angle = 0;
      }
    }, 10);
  }
```

### **Collision detection**
In order to detect the collision of both the `playerShip()` and `Sprite` objects, I first had to generate the correct canvas position values for the `playerShip()`. The use of transformation methods `translate()` and `rotate()` in the rendering of `playerShip()` meant that it followed its own X and Y coordinates seperate from any other canvas content. 

I wanted to create an array to store the data for each of the X and Y positions of the ship, then matched them against the coordinates of each of the sprites per frame. I undertook an enourmous job of trying to manually create all of these postions, physically using paper graphs and plotting each of the points along the axes, then doing the maths to create a canvas circle shape along these points on screen. Below are some of my workings.

<div align="center">

<img src="20200819_172604.jpg" alt="Workings - 1" width="600">
<img src="20200819_172619.jpg" alt="Workings - 2" width="600">
<img src="rotation-plotting.JPG" alt="Workings - 3" width="600">

</div>

I began to write a function that stores and returns an array of each of the numbers associated with the corresponding angle.

```
function getAngleNumber(angle) {
    if ([0,90,180,270].includes(angle)) {
      return [1.0, 0.0];
    } else if ([6,96,186,276].includes(angle)) {
      return [0.1, 0.99];
    [...]
```
But then quickly realised that this was a very innefficient, and innacurate way of achieving this. Thats when I discovered that I could use `Math.cos()` and `Math.sin()` together to quickly and extremely accurately generate all of these return values for me.

```
function getAngleNumber(angle) {
    const angleInRadians = (angle * Math.PI) / 180;
    return [Math.cos(angleInRadians), Math.sin(angleInRadians)];
  }
```
When dealing with the ship moving to the right, the value of `angle` becomes negative, and resets to 0 when it passes -360. In order to always return a positive value, and that the 0 mark was correct with the rotation of the ship, I created the `getActualAngle()` function with the argument of `angle`.

```
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
```
The `getAllPossibleShipLocations()` function outputs the value of `shipLocations[]`, containing both the X and Y coordinates in each array itteration from 0 - 360. `getShipLocation(angle)` then takes the input of angle and calls the array key associated with that value of angle.

First I needed to create an algorythm that would perform the operations used in this plotting `ctx.arc(centerOfX + (0.4*shipFromCenter), centerOfY + (0.92*shipFromCenter), s, 0, Math.PI*2)`. 

Returning the `Math.cos()` and `Math.sin()` values from the `getXShipValue()` and `getYShipValue()` functions allows the values to remain positive.
```
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
    } [...]
```
The maths is then performed on the values based on my plotting - `(centerOfX + (0.4*shipFromCenter), centerOfY + (0.92*shipFromCenter)`. 
```
    [...]

    function generateX(angle) {
      let shipValue = getXShipValue(angle) * shipFromCenter;
      return centerOfX + shipValue;
    }

    function generateY(angle) {
      let shipValue = getYShipValue(angle) * shipFromCenter;
      return centerOfY + shipValue;
    } [...]
```
A `for` loop then assigns the `[generateX(i), generateY(i)]` array values to `shipLocations[]` with the corresponding array index. When `getAllPossibleShipLocations()[i]` is then called, it is returning `shipLocations[i]`.
```
    [...]

    for (i = 0; i < 360; i++) {
      let angleKey = i.toString();
      shipLocations[angleKey] = [generateX(i), generateY(i)];
    }
    return shipLocations;
  }
```
`getShipLocation(angle)` takes in `angle`, processes it through another instance of the `getActualAngle()` function to make sure it is postive and the correct value as explained before, and then assigns it to `actualAngle` as a string. This string is then used as the array index key for returning `getAllPossibleShipLocations()[i]` when `getShipLocation(angle)[i]` is called in the collision detection function next.
```
  function getShipLocation(angle) {
    function getActualAngle(angle) {
      [....]
    }
    let actualAngle = getActualAngle(angle).toString();
    return getAllPossibleShipLocations()[actualAngle];
  }
  ```
The `collisionDetection(xPos, yPos)` function was called in the `showSprite()` method of the `Sprite` class. It takes in the arguments of `xPos` and `yPos` which are each of the `Sprite` objects X and Y positions on the canvas per frame. If `playerShip()` occupies the exact same X and Y coordinates as a `Sprite`, subtracting the `xPos` and `yPos` values from both array items `getShipLocation(angle)[0]` and `getShipLocation(angle)[1]` will result in 0. 

The code unfortunately is not accurate enough to use this method without a range, the reason for this is due to both the increasing speed of the `Sprite` objects and it reaching the outer path of rotation. They have grown so much in size when they reach this path that they can move in steps of up to 50px per frame, therefore a range of 70px has been given to allow for a more reliable detection rate. The origin of collision range for the `playerShip()` is the front tip of the triangle.

  ```
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
```

### **Start Screen**
When the page first loads, users are presented with the start screen. The background stars are frozen, and the center panel displays instructions for how to play the game as well as controls for both mobile and desktop browsers. There is a title saying *STELLAR DRIFT*, created using multiple h2 layers indipendently positioned.

<div align="center">

<img src="start-screen.JPG" alt="Start Screen" width="400">
<img src="start-screen-mobile.JPG" alt="Start Screen" width="90">
<img src="start-screen-ipad.JPG" alt="Start Screen"width="250">
</div>

### **Start game button**
The game is started by clicking or touching the Start Game button on the start screen panel. The Enter key can also be pressed, allowing users to keep their hands on the keyboard when restarting. When this button is pressed, the `initialiseGame()` function is called. This hides the start panel and Github Social icon whilst enabling on screen buttons for mobile, creates the `spritesArray[i]`, and finally calls the `update()` callback function to trigger the main loop animation.

```
function initialiseGame() {
    document.getElementById("start-panel").classList.toggle("hidden");
    document.getElementById("bottom-banner").classList.toggle("hidden");
    document.getElementById("github").classList.toggle("hidden");

    for (var i = 0; i < numberOfSprites; i++) {
      spritesArray[i] = new Sprite(
        centerOfX,
        centerOfY,
        Math.random() * cnvsWidth
      );
    }
    update();
}
```

### **Mute audio button**
I created some background music for the game to add to the user experience. This is programmed to automatically play when the broweser loads, which may not be the desirable choice for many users. The mute button was created using the Font Awesome icons, and linked to an event listener that triggers the `toggleMute()` function.
```
function toggleMute() {
    music.muted = !music.muted;
    explosion.muted = !explosion.muted;
    document.getElementById("i-muted").classList.toggle("hidden");
    document.getElementById("i-not-muted").classList.toggle("hidden");
  }
```
### **Reset button** 
The reset button allows the user to restart the game, reloading the page back to the start panel. In the future I would like to change this into a pause button with the option to then reset, but currently this button is just linked to an event listener that calls the `reload()` function.
```
function reload() {
    window.location.reload(true);
  }
```
### **Github social icon**
I wanted to display a link so users can discover the repository page. This allows people to see how the game was built, who it was built by, and even make contact for comments or potential future collaboration. I knew that the Github icon would work well located on the start screen, and once again Font Awesome provided this for me. 

### **Crash screen**
When a successful collision is detected within `collisionDetection()`, the function `crashScreen()` is called. As well as displaying the crash screen and the Github icon, this function hides the direction buttons, adds an event listener for the reload button, and triggers an explosion sound to simulate the ship crashing. 

```
function crashScreen() {
    document.getElementById("bottom-banner").classList.toggle("hidden");
    document.getElementById("crash-panel").classList.toggle("hidden");
    document.getElementById("github").classList.toggle("hidden");
    document.getElementById("restart-btn").addEventListener("click", reload);
    document.getElementById("explosion").play();
    endGame = true;
  }
```
At the bottom, the `endGame` variable which is normally `false` is set to `true`. This triggers a change inside the `update()` function, allowing only the stars to remain looping, and the score to be displayed onscreen. As well as these two changes, the canvas also slowly rotates with the background transparency slightly increased. This creates a visually pleasing subtle trailing effect on the stars behind the crash panel text.

<div align="center">

<img src="crash-screen.gif" alt="Sprites">
</div>

### **Completed screen**
The completed screen is displayed when the user reaches the score of 10,000! Everything else remains the same as the crash screen, the only difference is the text displayed inside the panel.

<div align="center">


<img src="completed-screen.gif" alt="Sprites">
</div>

### **Score counter**
The score is used in more than one way across the application. It controls the speed, colour scheme, countdown timer, sprite rendering, and triggering the completed screen. `scoreIncrease()` incriments the score by the value of 1 when it is called each frame inside the `update()` function.

```
function scoreIncrease() {
    score += 1;
    if (score == 10000) {
      completedScreen();
    }
  }
```
### **Countdown timer** 
When the Start Game button is pressed, the score starts on -100. A visual countdown timer is then used to count back from 3 every 33 points. When the score passes 0, the countdown timer dissapears and the sprites are rendered. This gives users a brief but important moment to prepare themselves, increasing the overall user experience.

<div align="center">


<img src="countdown-timer.gif" alt="Sprites">
</div>

### **Speed increase**
As the score increases, so does the speed of movement of the `Star` and `Sprite` objects. The function `speedIncrease()` is called from the `update()` function, incrimenting the value of speed each frame. As the score changes, so does the amount of incrimentation needed, as the speed gets higher less intensity is required. Objects move much quicker on mobile devices due to the smaller range of pixels, so a lower value of speed must be used.

```
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
    } [...]
```

### **Colour changing**
As the score increases, the colour scheme also changes for both the `Star` and `Sprite` objects. This not only looks nice and adds to the user experience, but it helps demonstrate the players progression in the game, adding stimulus to prevent it from seeming too repetitive.

These colour changes take place when rendering the shapes, they are handled using `if` statements within the `showStar()` and `showSprite()` methods of the `Star` and `Sprite` classes.

```
[...]

ctx.beginPath();
    if (score <= 1000) {
      ctx.fillStyle = "#82caff";
    } else if (score <= 2000) {
      ctx.fillStyle = "#00FA9A";
    } else if (score <= 3000) {
      ctx.fillStyle = "#306eff";
    } else if {[...]}
ctx.arc(xPos, yPos, s, 0, Math.PI * 2);
ctx.fill();
```

### **Music & Audio**
I am a big fan of the retro synthwave sound which formed part of the inspiration for the theme of this game - so I wanted to make my own track as backing music. I also wanted to make the game more immersive by create sounds for when the game starts, the player crashes, and when they win. I used Ableton Live 10, below are some screenshots of the projects and the sound effects used.

This is the project for the track - Titled 'Event Horizon'.

<div align="center">


<img src="ableton.JPG" alt="Sprites">
</div>

The laser type sound heard when the game starts was the sound of a Slinky I recorded and processed.

<div align="center">


<img src="start game.JPG" alt="Sprites" width="500">
</div>

The explosion was taken from a sound bank and also processed.

<div align="center">

<img src="explosion.JPG" alt="Sprites" width="500">
</div>

When the player wins, I added the startup sound to some stock audio of a crowd cheering with some funny wailing at the end. This is timed so that the background music finishes and loops with some of the cheering still playing. 

<div align="center">

<img src="completed.JPG" alt="Sprites" width="500">
</div>

### 2.2 Features to impliment in the future

### **Score History & Leaderboard**
I would like to impliment the use of a global high score with a leaderboard. When a player crashes or wins, the leaderboard would be displayed with the option of adding the most recent score to the list with a user name text input. The score limit of 10,000 could be removed and players could compete to score the highest on the leaderboard. In order to achieve this, I would need knowledge of back-end technologies, which I will be studying later in this course.

### **Better colour transitions**
The current technique used for transitioning between colours is very clunky. I would like to impliment some code that creates a constant smooth transitioning effect between colours instead of just jumping from one value to the next.

### **Tighter collision detection**
Currently the collision detection works well and is accurate enough to make the game playable and enjoyable without too many false collisions. I would however like to make this more accurate, as sprites can often trigger a detection when they have not actually hit the player, and when the speed starts to increase the accuracy drops dramatically due to the greater amount of pixels being incrimented for movement per frame.

### **Additional Sprite type objects**
I would also like to be able to add other layers of objects that could randomly spawn, and if the player collides with these, they could receive a temporary speed reduction or even increase. If there was no score limit, these additional sprites could multiply the score incrimentation amount for a short period of time.

[Back to Table Of Contents](#table-of-contents)

---

## 3 Technologies Used
### 3.1 Languages
### [**HTML/HTML 5**](https://html.com/html5/)
HTML5 is a Hyper Text Markup Language. Roughly 17% of my code was the HTML file [index.html](index.html) as it was used to create the structured content and elements essential to build the game.

### [**CSS/CSS3**](https://www.w3.org/Style/CSS/Overview.en.html)
CSS is a Cascading Style Sheet and was implimented via the [styles.css](assets\css\styles.css) file. All of the visible HTML content was positioned and styled using this language, making up roughly 28% of the entire code.

### [**JavaScript ES6**](https://www.w3schools.com/Js/js_es6.asp)
ECMAScript 6 - ECMAScript 2015, otherwise known as JavaScript 6, was used to write all of the functionality and game mechanics within this project. Around 55% of the entire code was JavaScript, which was used heavily with the Canvas API.

### 3.2 Libraries

### [**Canvas API**](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
The Canvas API allows for the drawing and rendering of 2D graphics using JavaScript and the HTML `<canvas>` element. It can render shapes, text, and images, all of which can then be manipulated and animated on a grid coordinate space. All of the animated moving content within this game was created with the Canvas API, which takes up the entire viewport - no images were used.

### [**Font Awesome**](https://fontawesome.com/)
Font Awesome was used for the GitHub social and audio mute icons.

### [**Google Fonts API**](https://fonts.google.com/)
All of the fonts used within this project were provided by the Google Fonts API. The fonts used were 'Audiowide' 'Oxanium', and 'Orbitron'.

### 3.3 Tools

### [**VSCode**](https://code.visualstudio.com/)
Visual Studio Code was the Intergrated Development Environment (IDE) used to write the code for this project.

### [**Chrome DevTools**](https://developers.google.com/web/tools/chrome-devtools/)
The Chrome DevTools were used a lot in the development of this project to live preview edits and diagnose problems. I also ran lots of auditing and testing using built in tools such as Sources, Lighthouse and Coverage.

### [**Git**](https://git-scm.com/)
Git was used for version control with GitHub - commiting each development stage to the GitHub repository.

### [**Github**](https://github.com/)
GitHub was used to host the repository.

### [**GitHub Pages**](https://pages.github.com/)
GitHub Pages was used to deploy this website directly from the repository master branch.

### [**EZGIF**](https://ezgif.com/)
EZGIF.com is a simple and free online video and gif editor. It was used to create the GIFS found in this README.

### [**GNU Image Manipulation Program**](https://www.gimp.org/)
GNU Image Manipulation Program (GIMP) was used to create the favicon website icon.

### [**Ableton Live 10**](https://www.ableton.com/en/live/)
Abletone Live 10 is a Digital Audio Workspace (DAW) which is aimed predominantly towards electronic music production. This was used to create the audio sound track used for this game.

[Back to Table Of Contents](#table-of-contents)

---

## 4 Testing 
### 4.1 Completed
* Before I started the more in depth testing, I ensured that the website served the purpose it was built for by running through each of the user stories and checking all requirements were met. 

* I tested all of the buttons as follows: 
  * Start the game by pressing the *Start Game* button - *Working*
  * When the user crashes, press the *Restart Game* Button - *Working*
  * When audio is playing, mute it by pressing the *Mute* button, and then again to unmute - *Working* 
  * When the game is running, press the *Reset* button to restart the game - *Working*
  * Visit the GitHub page by pressing the icon - *Working*

* I tested the responsiveness of the game using different mobile and tablet devices within the DevTools device toolbar - *Working* 

* I ran extensive testing of the `collisionDetection()` function to check it was functional, effective, and reliable.

* I tested the controls extensively, pressing multiple keys and attempting to break the game to check no more bugs would appear.

* I ran audit testing using the DevTools Lighthouse feature. Using this I was able to correct some minor mistakes such as not includiong an HTML meta description element.
  
  * Audit testing on Desktop

<div align="center">


<img src="performance 3-desktop.JPG" alt="Sprites" width="500">
</div>

* 
  * Audit testing on mobile

<div align="center">


<img src="performance 3.JPG" alt="Sprites" width="500">
</div>

* I used the W3C HTML Markup Validator to check all HTML was applied and working correctly. - *Working*

* I used the W3C CSS Validator to check all the CSS was also valid and working correctly. - *Working*

* I tested the game on an array of different phones and their browsers such as Iphone 5s, Samsung Galaxy, iPhone 7 and X. I also tested on multiple Macbook Pro's and Windows laptops as well as across multiple different browsers on them. - *Working*

* I ran the site through GTMetrix to check the performance. - *Working*

<div align="center">


<img src="speed.JPG" alt="Sprites" width="500">
</div>

* I ran the JavaScript through jshint.com and got no errors. This is the code metrics summary i was provided. 
<div align="center">


<img src="metrics.JPG" alt="Sprites" width="300">
</div>

* I posted my site in the Slack Peer Review channel.... update

### 4.2 Bugs 
### **Fixed**
I encountered an enourmous amount of bugs when building this game as there was a lot of logic to work with. I am very satisfied that I managed to resolve most of these, allowing me to build a sucessfully working game. Often the issue would be some minor code that I did not correctly impliment. Here are some of the more notable issues and bugs I encountered.

* `Sprites` hitting the center of the screen - If a value close to 0 is generated for the `Sprite` X or Y positions, the object would travel straight towards the center of the screen. This was not only against my idea for the design, but it also created harsh visual flashes that could even affect people suffering with epilepsy. I fixed this using the `notZeroRange()` function.

* When originally creating the layout of the game using the CSS `clamp()` function for `font-size`, I was using Firefox and discovered Chrome did not support the feature. This meant that font sizes would differ. However this appears to now be compatible with all browsers except Internet Explorer.

* Keydown delay built into browsers to stop accidental key repeat events meant that the ship would not instantly spin to the left or right. When holding a direction key, one single movement event would trigger, there would be a short delay and then the key would start repeating giving the player sustained movement. This is not the ideal form of control for a fast paced reaction based game as users would not be able to move quick enough. I was able to create my own key repeat events by isolating the first key event on hold, triggering it 100 times a second for smoothness, and then removing the key repeat events that would normally follow. `setInterval()` has been explained in the [Player ship controls](#player-ship-controls) part of the features section, below is the simple code used to prevent the original key repeat events.

```
function keyDown(e) {
    if (e.repeat) {
      return;
    } [...]
```

* When two direction keys were pressed at the same time, I discovered that the event listeners were not correctly functioning. The ship would begin to spin uncontrollably, picking up speed each time I pressed anything. I was able to fix this issue inside the `keyDown()` function by removing the `keydown` event listener when one was aleready being held, and then adding the event listener back in when the key was released. This prevents anymore key events from registering whilst one is already engaged. Please note this issue still exists on mobile.

```
      [...]

    document.removeEventListener("keydown", keyDown);
    if (e.key === "ArrowLeft" || e.key === "Left") {
      moveLeft();
    }[...]
  }

  function keyUp(e) {
    if (
      e.key === "ArrowLeft" ||
      [...]
    ) {
      clearInterval(time);
      document.addEventListener("keydown", keyDown);
    }
  }
```

* When testing on smaller screens, the game on screen control buttons always worked on my computer. However when I switched on the device mode and simulated a mobile, or I actually played it on a real phone, the on screen touch controls did not work. At first I thought this was down to mobile devices not supporting the `setInterval()` method, and set about attempting to fix this large bug. After several days of attempting to fix this error with potential alternatives that did not perform how I liked, I suddenly realised how simple the bug was to fix, and infact it had been an oversight on my part. I was using `mousedown` and `mouseup` event listeners instead of `touchstart` and `touchend`.

* Once the movement was successfully working and everything seemed as smooth as possible, there was still a slight error with the mobile movement. When holding a direction button, the ship would move but often it would slightly jitter and stutter when first pressed, sometimes even stopping in its path before starting again. This was not a huge issue, however it did make the mobile experience somewhat less appealing. I thought this could be down to mobile device processors getting throttled trying to process such an intensive `setInterval()` method. But the apparent solution to this was an unexpected one. When audit testing my website, a warning error read *"Does not use passive listeners to improve scrolling performance"*. I learnt that the browser does not know if the touch event listener will prevent scrolling, so the page waits for the touch event to finish executing before registering a scroll. As soon as I added this small flag `{passive: true}` to each touch event listener, this bug dissapeared and movement was perfectly smooth.

```
    document.getElementById("left-direction-btn")
      .addEventListener("touchstart", moveLeft, {passive: true});
    document.getElementById("right-direction-btn")
      .addEventListener("touchstart", moveRight, {passive: true});
```

* Programming the collision detection was one of the hardest parts of this whole project. From the beginning I ran into countless errors with the code breaking or not working correctly, and I really had to think to get it to work. Sometimes the game would detect collisions when nothing was near it, and other times it would not work at all. Playing with the code, the arrays and functions used to process the ship locations, and the collision detection pixel range, I think I have got it satisfyingly accurate.

* Originally my audio was set to `autoplay` when the page loaded, but the audio would never play on the first page load. Only when users restart the game, triggering the page to reload, does the track start to play. I tried to do some research and believe this is down to Chrome and other browsers attempting to phase out the `autoplay` feature on websites, but im not 100% sure. Sometimes it will trigger instantly, but that may be due to the browser cache. To work around this, I set the audio to play when the game starts.

* Another bug noticed by users was that when the player ship is left on the 0 mark, meaning they havent touched the rotation, almost no asteroids would hit them - players could complete the game without moving the craft. This is due to the `notZeroRange()` function used inside of the `Sprite` rendering. Without this function, when the code generated two numbers between 0-1.75, the `Sprite` would hit the center of the screen, and not travel around the edge. By using this `notZeroRange()` function, it eliminates this issue whilst causing this smaller bug. I managed to resolve the problem by randomly setting `this.randomX` to 0 through the use of an `if` statement and `Math.random()`.

```
[...]
if (this.z <= 0) {
        this.z = cnvsWidth;
        if (Math.random() < 0.02) {
          this.randomX = 0;
        } else {
          this.randomX = notZeroRange(-10, 10); 
        }
        this.randomY = notZeroRange(-10, 10);
      } [...]
```

### **Still Existing**

* Leading on from this last bug, users may notice that on rare occasions, `Star` objects will enter the center of the screen in the same way that the `Sprites` would without the `notZeroRange()` function. I could not easily eliminate this issue with the stars as I did not want to put a limit on the rendering positions, and I dont think the issue is big enough for users to notice.

* On mobile devices, the issue still exists with the event listeners when two direction keys are pressed at the same time. I have attempted to fix this `touchstart` `touchend` bug using the same technique used for the `keydown` and `keyup` event listeners, but it does not work. When this bug does activate, the players ship constantly spins in a certain direction without any way to stop it. This unfortunately leaves the player with no choice but to press the Reset button or wait to crash. The only current workaround for this is to be very conscious of not touching the screen with both fingers at once when playing.

* When players reach the score of 10,000 and complete the game, they are presented with the completed screen, much like the crash screen. The code is exactly the same aside from the content of the text, yet the Restart Game button does not work like it does with the crash screen. The button highlights and moves when clicked, but no event listener triggers. Users have to press the Reset button.

* I noticed some mobile devices had a much slower rate of movement. This may be down to the processor throttling as mentioned before. It does not really affect the game in a bad way, but it is best enjoyed when movement is fastest.

[Back to Table Of Contents](#table-of-contents)

## 5 Deployment
explain the process taken to deploy the page

[Back to Table Of Contents](#table-of-contents)

## 6 Credits
### Content and code
https://www.youtube.com/watch?v=CSoZPdhNwjY - Basic formula used for starfield simulation
### Media
All media in this project was created by myself
### Acknowledgements 
acknowledge mentor and students in slack

### References 
Bura, J. and Coates, P., 2012. Pro Android Web Game Apps. p.43.
https://developer.mozilla.org/en-US/docs/Games/Anatomy 

change start screen screenshots - mute btn 

[Back to Table Of Contents](#table-of-contents)