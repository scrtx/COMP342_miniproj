var t = 0 //Time
var A = -0.9 //Amplitude
var b = 0.1 // Damping constant
var m = 1 //Mass of block 

function animateSpring(){
    posY = A * Math.exp((-b*t)/(2*m)) * Math.cos(t + Math.PI);
    posX = -0.1;

    GLINIT();
    drawBlock(posX, posY);
    
    t += 0.1;

    requestAnimationFrame(animateSpring);

}