//Draws a Square block which oscillates.
function drawBlock(x, y, l){
    let pointsArray = [];
    pointsArray.push(x, y);
    pointsArray.push(x, y-l);
    pointsArray.push(x+l, y-l);
    pointsArray.push(x+l, y);
    DrawObject(gl.TRIANGLE_FAN, 4, Blue, pointsArray, 0, pointsArray.length);
}
