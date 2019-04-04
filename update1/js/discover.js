var circle1 = document.getElementById("circle-1");
var circle2 = document.getElementById("circle-2");
var circle3 = document.getElementById("circle-3");
var circle4 = document.getElementById("circle-4");

var line1 = document.getElementById("line-1");
var line2 = document.getElementById("line-2");
var line3 = document.getElementById("line-3");

var precol1 = document.getElementById("precolonial-1");
var precol2 = document.getElementById("precolonial-2");
var col1 = document.getElementById("colonial-1");
var col2 = document.getElementById("colonial-2");
var art1 = document.getElementById("artifacts-1");
var art2 = document.getElementById("artifacts-2");
var theo1 = document.getElementById("theories-1");
var theo2 = document.getElementById("theories-2");

var leftarrow = document.getElementById("l-arrow");
var rightarrow = document.getElementById("r-arrow");

var parts = [precol1, precol2, col1, col2, art1, art2, theo1, theo2]; 

var visible = 1;

// https://stackoverflow.com/questions/195951/how-to-change-an-elements-class-with-javascript

function precolonial1() {
  circle1.className = "circle circle-active";
  circle2.className = "circle circle-future";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-inactive";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";

// MAKE OTHER PARTS HIDDEN
  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 0) {
      parts[i].className = "disc col";
    }
  }

  leftarrow.className = "arrow arrow-inactive arrow-left";
  visible = 0;
}

function colonial1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-active";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";

// MAKE OTHER PARTS HIDDEN
  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 2) {
      parts[i].className = "disc col";
    }
  }

  visible = 2;
}

function artifacts1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-active";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-inactive";

// MAKE OTHER PARTS HIDDEN
  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 4) {
      parts[i].className = "disc col";
    }
  }

  visible = 4;
}

function theories1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-past";
  circle4.className = "circle circle-active";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-active";

// MAKE OTHER PARTS HIDDEN
  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 6) {
      parts[i].className = "disc th-1";
    }
  }

  rightarrow.className = "arrow arrow-inactive arrow-right";
  visible = 0;
  visible = 6;
}

function checkVisible() {
  for (i = 0; i < parts.length ; i++){
    if ((parts[i].className === "disc col") || (parts[i].className === "disc row") || (parts[i].className === "disc th-1")) {
      console.log(parts[i].className);
      visible = i;
      console.log("visible: " + visible);
    }
    else {
      console.log("hidden");
    }
  }
}

function left() {
  console.log("left clicked");

  checkVisible();
  switch (visible) {
    case 1:
        precolonial1();
        leftarrow.className = "arrow arrow-inactive arrow-right";
        break;
    case 3:
    case 5:
        parts[visible].className = "hidden";
        parts[visible-1].className = "disc col";
        break;
    case 2:
        precolonial1();
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc col";
        break;
    case 4:
        colonial1();
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc col";
        break;
    case 6:
        artifacts1();
        // FROM ARTIFACTS 1, ADD 1 TO GO TO ARTIFACTS 2
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc row";
        break;
    case 7:
        theories1();
        rightarrow.className = "arrow arrow-right";
        break;
    default:
        console.log("default");
  }
}

function right(){
  // PSEUDOCODE
  // check which one is visible (Based on class)
    // loop through all of the classes and return the visible class
    // if th1 = visible, clicking right will disable the right button
      // make all hidden
      // make i+1 not hidden (disc col)
    // else
      // if art2, next class will be disc th-1
      // if art1 || th1, next class will be "disc row"
        // 
      // else
        // make all hidden
        // make i+1 not hidden

  console.log("right clicked"); 

  checkVisible();
  switch (visible) {
    case 0:
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc col";
        leftarrow.className = "arrow arrow-left";
        break;
    case 1:
    case 2:
    case 3:
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc col";
        if (visible === 1) {
          colonial1();
        }
        else if (visible === 3) {
          artifacts1();
        }
        break;
    case 5:
        theories1();
        break;
    case 4:
    case 6:
        parts[visible].className = "hidden";
        parts[visible+1].className = "disc row";
        rightarrow.className = "arrow arrow-inactive arrow-right";
        break;
    default:
        console.log("default");
  }
}

document.onkeydown = function(e) {
  switch (e.key) {
    case 'ArrowLeft':
        left();
        break;
    case 'ArrowRight':
        right();
        break;
  }
}