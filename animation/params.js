var t = 0; //Time
var A = 0.9; //Amplitude
var b = 0.5; // Damping constant
var m = 3; //Mass of block 
var phase = 0;// Math.PI;//Phase of system
var w = 1;//Angular Frequency

var ampSpan = document.getElementById("A_data");
var BSpan = document.getElementById("B_data");
var massSpan = document.getElementById("m_data");
var freqSpan = document.getElementById("w_data");
var phiSpan = document.getElementById("phi_data");
ampSpan.innerHTML = A;
BSpan.innerHTML = b;
massSpan.innerHTML = m;
freqSpan.innerHTML = w;
phiSpan.innerHTML = phase;