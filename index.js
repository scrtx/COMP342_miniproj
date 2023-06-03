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

function onLoad() {
    GLINIT();
    animateSpring();
}