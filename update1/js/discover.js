var circle1 = document.getElementById("circle-1");
var circle2 = document.getElementById("circle-2");
var circle3 = document.getElementById("circle-3");
var circle4 = document.getElementById("circle-4");

var line1 = document.getElementById("line-1");
var line2 = document.getElementById("line-2");
var line3 = document.getElementById("line-3");

var colonial1 = document.getElementById("colonial-1");

// function ifVisible(partID) {
//   var isVisible = partID.style.display == "flex";
//   return true;
// }

function precolonial() {
  circle1.className = "circle circle-active";
  circle2.className = "circle circle-future";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-inactive";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";
}

function colonial() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-active";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";
}

function artifacts() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-active";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-inactive";
}

function theories() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-past";
  circle4.className = "circle circle-active";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-active";
}


