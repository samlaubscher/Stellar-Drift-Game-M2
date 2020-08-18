# Stellar Drift | Mini Game

<div align="center">

![Stellar Drift Logo](https://i.imgur.com/RLQC3xw.gif "Game Logo")

[View the deployment here](https://samlaubscher.github.io/Stellar-Drift-Game-M2/)

#### An interactive and challenging 3D space themed mini game, built using vanilla javascript!

This project is a responsive and dynamic front end website, demonstrating an ability to effectively understand and impliment the use of multiple programming languages.

##### This project will be submitted for my Interactive Frontend Development project on my Full Stack Software Development course. 
</div>

---
## Table of Contents
* UX 
    * 1

* Features

* Technologies Used 

* Testing 

* Deployment 

* Credits
    * Contents and code
    * Media 
    * Acknowledgements

---
## UX
Stellar Drift is a space themed browser-based mini game where the player is speeding through an asteroid field at a constantly increasing speed meaning the user must guide the ship to avoid the path of oncoming asteroids. The 3D design of the game creates the perspective that the player is moving forwards through space towards the center of the screen and all the stars as they grow closer, growing in size and speed the further out from the center appears to pass the player. 


"The goal of every video game is to present the user(s) with a situation, accept their input, interpret those signals into actions, and calculate a new situation resulting from those acts." - https://developer.mozilla.org/en-US/docs/Games/Anatomy 

### Who is the website for? 

what they want to do


wireframes etc for design process
 
---
## Features 
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
    }

    [...]
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

### **Animated asteroid sprites**
Asteroid sprites are also rendered to the canvas using an array of `Sprite` class objects. This `spritesArray[]` works the same way as the `starsArray[]` by instanciating each index with a new `Sprite` object, and calling two additional methods on these indexes using a `drawSprites()` function. However, the `Sprite` class contains different code which allows it to behave seperately from the `Star` objects. The constructor method contains additional properties of `this.randomX` and `this.randomY` with the values of `notZeroRange(-10, 10)`.

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
 The global function `notZeroRange()` allows a random value to be generated within the range of -10 and 10, none inclusive of anything between -1.75 and 1.75. It is used here so that the `Sprite` objects can only render within this small ranged ring around the center of the screen, avoiding 0 which causes sprites to hit the center and fill the entire screen suddenly.

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



``` 
    [...]

    moveSprite() {
      this.z = this.z - speed / 2;
      if (this.z <= 0) {
        this.z = cnvsWidth;
        this.randomX = notZeroRange(-10, 10);
        this.randomY = notZeroRange(-10, 10);
      }
    } [...]
```
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

### **Player ship controls**


--------------------------- 





* Collision detection
* Start screen
* Start game button
* Crash screen
* Completed screen
* Mute audio button
* Reset button 
* Github social icon
* Score counter
* Speed increase
* Colour changing
* Theme music
* Sound effect

## Features Left to Impliment
* Display score history
* Leaderboard with player name input
* Stop the background music from restarting when the game is restarted
* Better colour transitions
* Tighter collision detection

## Technologies Used
mention the tools used - provide link
#### JavaScript
#### HTML/HTML 5 
#### CSS/CSS3
#### VSCode 
#### Canvas API


## Testing 
convice that enough testing has been done that it works.
go over the user stories for ux and insure they work
use scenarios like clicking contact button, trying to submit empty form etc
use automated tests and show results 
#### bugs 
explain bugs i found and fixed 
bugs that still exist 

## Deployment
explain the process taken to deploy the page

## Credits
### Content and code
reference to bits used
### Media
explain where any media came from 
### Acknowledgements 
acknowledge mentor and students in slack