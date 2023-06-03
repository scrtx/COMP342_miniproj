function animateSpring(){
    posY = A * Math.exp((-b*t)/(2*m)) * Math.cos(w*t + phase);
    posX = -0.1;
    let l = 0.15;

    GLINIT();
    drawSpring(posX + l/2, posY);

    GLINIT();
    drawBlock(posX, posY, l);
    
    t += 0.1;
    requestAnimationFrame(animateSpring);
}