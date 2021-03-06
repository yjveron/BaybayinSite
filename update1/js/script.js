var intro = document.getElementById("intro");
var vowels = document.getElementById("vowels");
var consonants = document.getElementById("consonants");
var rules = document.getElementById("rules");

var circle1 = document.getElementById("circle-1");
var circle2 = document.getElementById("circle-2");
var circle3 = document.getElementById("circle-3");
var circle4 = document.getElementById("circle-4");

var line1 = document.getElementById("line-1");
var line2 = document.getElementById("line-2");
var line3 = document.getElementById("line-3");

function intro() {
  circle1.className = "circle circle-active";
  circle2.className = "circle circle-future";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-inactive";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";
}

function vowels() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-active";
  circle3.className = "circle circle-future";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-inactive";
  line3.className = "line line-inactive";
}

function consonants() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-active";
  circle4.className = "circle circle-future";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-inactive";
}

function rules() {
  circle1.className = "circle circle-past";
  circle2.className = "circle circle-past";
  circle3.className = "circle circle-past";
  circle4.className = "circle circle-active";
  line1.className = "line line-active";
  line2.className = "line line-active";
  line3.className = "line line-active";
}

var parts = [intro, vowels, consonants, rules];

function changeSidebar() {
  var cur_pos = document.querySelector('html').scrollTop;
  // console.log(cur_pos);

  parts.forEach(function (part) {
    var top = part.offsetTop;
    // var bottom = top + part.offsetHeight;

    if (cur_pos >= top) {
      console.log(part.id)
      if (part.id === 'rules') {
        rules();
      }
      else if (part.id === 'consonants') {
        consonants();
      }
      else if (part.id === 'vowels') {
        vowels();
      }
      else {
        intro();
      }
    }
  });


  function intro() {
    circle1.className = "circle circle-active";
    circle2.className = "circle circle-future";
    circle3.className = "circle circle-future";
    circle4.className = "circle circle-future";
    line1.className = "line line-inactive";
    line2.className = "line line-inactive";
    line3.className = "line line-inactive";
  }

  function vowels() {
    circle1.className = "circle circle-past";
    circle2.className = "circle circle-active";
    circle3.className = "circle circle-future";
    circle4.className = "circle circle-future";
    line1.className = "line line-active";
    line2.className = "line line-inactive";
    line3.className = "line line-inactive";
  }

  function consonants() {
    circle1.className = "circle circle-past";
    circle2.className = "circle circle-past";
    circle3.className = "circle circle-active";
    circle4.className = "circle circle-future";
    line1.className = "line line-active";
    line2.className = "line line-active";
    line3.className = "line line-inactive";
  }

  function rules() {
    circle1.className = "circle circle-past";
    circle2.className = "circle circle-past";
    circle3.className = "circle circle-past";
    circle4.className = "circle circle-active";
    line1.className = "line line-active";
    line2.className = "line line-active";
    line3.className = "line line-active";
  }
}

changeSidebar();
window.addEventListener ('scroll', changeSidebar);
