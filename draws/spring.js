function drawSpring(x, y) {
    const numPoints = 100; // adjust this value for the smoothness of the spring
  
    let (startX, startY) = (-0.1, 1)
    const endX = x;
    const endY = y;

    const vertices = [];

    const dx = (endX - startX) / numPoints;
    const dy = (endY - startY) / numPoints;

    for (let i = 0; i <= numPoints; i++) {
      const pointX = startX + i * dx;
      const pointY = startY + i * dy;
      const offsetY = Math.sin(pointX * 20) *0.1; // adjust the multiplier and amplitude for the desired wave shape
  
      vertices.push(pointX+ offsetY, pointY );
    }
  
    DrawObject(gl.LINE_LOOP, vertices.length/2, White, vertices, 0, vertices.length);
  }