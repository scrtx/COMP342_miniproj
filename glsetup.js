//gets the canvas element
const canvas = document.querySelector("#canvas");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

//Initialize WebGL
var gl;
var vertexBuffer;
var vertCode;
var vertShader;
var Red = `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`;
var Green = `void main() {gl_FragColor = vec4(0, 1, 0, 1);}`;
var Blue = `void main() {gl_FragColor = vec4(0, 0, 1, 1);}`;
var Yellow = `void main() {gl_FragColor = vec4(1, 1, 0, 1);}`;
var White = `void main() {gl_FragColor = vec4(1, 1, 1, 1);}`;
var Gray = `void main() {gl_FragColor = vec4(0.5, 0.5, 0.5, 1);}`;

function GLINIT() {
    gl = canvas.getContext("webgl");
    if (!gl) {
    throw new Error(
        "Unable to load WebGL. Your computer or browser maynot support it"
        );
    }
    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    vertCode =
        "attribute vec2 coordinates;" +
        "void main(void)" +
        "{" +
        "gl_Position = vec4(coordinates, 0.0, 1.0);" +
        "gl_PointSize = 4.0;" +
        "}";
    vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);
}

//Draw an object
function DrawObject(object, objectSize, fragCode, vertices, start, end) {
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);
    
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    var vertexAttributeLocation = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.enableVertexAttribArray(vertexAttributeLocation);
    gl.vertexAttribPointer(vertexAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(shaderProgram);
  
    for (let i = start; i <= end; i += objectSize) {
      gl.drawArrays(object, i, objectSize);
    }
}
  