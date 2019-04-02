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

var parts = [precol1, precol2, col1, col2, art1, art2, theo1, theo2]; 


// function ifVisible(partID) {
//   var isVisible = partID.style.display == "flex";
//   return true;
// }

// https://stackoverflow.com/questions/195951/how-to-change-an-elements-class-with-javascript

function precolonial1() {
  circle1.className = "circle circle-active";
  circle2.className = "circle circle-future";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-inactive";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";

  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 0) {
      parts[i].className = "disc col";
    }
  }
}

function colonial1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-active";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";

  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 2) {
      parts[i].className = "disc col";
    }
  }
}

function artifacts1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-active";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-inactive";

  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 4) {
      parts[i].className = "disc col";
    }
  }
}

function theories1() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-past";
  circle4.className = "circle circle-active";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-active";

  for (i = 0; i < parts.length ; i++){
    parts[i].className = "hidden";
    if (i === 6) {
      parts[i].className = "disc th-1";
    }
  }
}

function checkVisible() {
  if (styleCheck === "flex") {
      return false; 
      
  }
}

function right(){

}
