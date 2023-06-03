//Draws a line representing the spring.
function drawSpring(x, y) {
  let pointsArray = [];
  let [startX, startY] = [x, 1];

  pointsArray.push(startX, startY, x, y);

  GLINIT();
  DrawObject(gl.LINE_STRIP, 2, Black, pointsArray, 0, pointsArray.length);
}