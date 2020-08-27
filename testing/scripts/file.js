const cnvsWidth = window.innerWidth;
  const cnvsHeight = window.innerHeight - 4;

  const cnvsLength = cnvsWidth
  const centerOfX = cnvsWidth / 2;
  const centerOfY = cnvsHeight / 2;
  var shipFromCenter = centerOfY / 2;
  var angle = 0;

// Functions to convert angle into X and Y positions of the Ship object on canvas - Used to create an array for collision detection
  // Returns positive angle value
  function getActualAngle(angle) {
    if (angle >= 0 && angle < 270) {
      // rotates the 0 point to where player craft renders
      return angle + 90;
    } else if (angle >= 270) {
      return angle - 270;
    } else if (angle >= -90 && angle < 0) {
      return 360 + angle - 270;
    } else {
      return 360 + angle;
    }
  }

  // Get the values associated with angle
  function getAngleNumber(angle) {
    const angleInRadians = (angle * Math.PI) / 180;
    return [Math.cos(angleInRadians), Math.sin(angleInRadians)];
  }

  // Creates array with all possible X and Y coordinates associated with angle
  function getAllPossibleShipLocations() {
    // Creates object to store array
    let shipLocations = {};
    // Takes the angle and returns correct Math.cos() value for X
    function getXShipValue(angle) {
      let actualAngle = getActualAngle(angle);
      if (actualAngle >= 0 && actualAngle <= 360) {
        return getAngleNumber(angle)[0];
      } else {
        return -getAngleNumber(angle)[0];
      }
    }
    // Takes the angle and returns correct Math.sin() value for Y
    function getYShipValue(angle) {
      let actualAngle = getActualAngle(angle);
      if (actualAngle >= 0 && actualAngle <= 360) {
        return getAngleNumber(angle)[1];
      } else {
        return -getAngleNumber(angle)[1];
      }
    }
    // Performs operations to generate correct X position value
    function generateX(angle) {
      let shipValue = getXShipValue(angle) * shipFromCenter;
      return centerOfX + shipValue;
    }
    // Performs operations to generate correct Y position value
    function generateY(angle) {
      let shipValue = getYShipValue(angle) * shipFromCenter;
      return centerOfY + shipValue;
    }
    // Assigns final X and Y values correlating with the angle to array indexes
    for (i = 0; i < 360; i++) {
      let angleKey = i.toString();
      shipLocations[angleKey] = [generateX(i), generateY(i)];
    }
    // Returns an array - Needs index key to be called
    return shipLocations;
  }

  // Takes angle and calls associated index key from shipLocations array
  function getShipLocation(angle) {
    // Returns positive angle value
    function getActualAngle(angle) {
      if (angle >= 0 && angle < 270) {
        // rotates the 0 point to where player craft renders
        return angle + 90;
      } else if (angle >= 270) {
        return angle - 270;
      } else if (angle >= -90 && angle < 0) {
        return 360 + angle - 270;
      } else {
        return 360 + angle + 90;
      }
    }
    // Creates string used for index key
    let actualAngle = getActualAngle(angle).toString();
    // Calls the array with associated index key
    return getAllPossibleShipLocations()[actualAngle];
  }

  // Collision detection between the X and Y of the sprites with the shipLocations array X and Y values generated in getShipLocations()
  function collisionDetection(x, y) {
    if (
      // The range of the detection is 35 each side enabling high incrimentation sprite values to be caught
      x - getShipLocation(angle)[0] <= 35 &&
      x - getShipLocation(angle)[0] >= -35 &&
      y - getShipLocation(angle)[1] <= 35 &&
      y - getShipLocation(angle)[1] >= -35
    ) {
      // Calls crash screen when a collision is detected
      crashScreen();
    }
  }