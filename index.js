//List of files in project and instert them as <script> element in html file
let scriptList = [
    "./glsetup.js",
    "./animation/springmotion.js",
    "./animation/params.js",
    "./draws/block.js",
    "./draws/spring.js"
];

scriptList.forEach(function (s) {
  let script = document.createElement("script");
  //Create <script> html element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});

//called when <body> is loaded.
function onLoad() {
    GLINIT();
    animateSpring();
}