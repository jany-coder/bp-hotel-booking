// booking rooms

function handleBooking() {
    var x = document.getElementById("bookingRooms");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }





// increment decrement data

//counting 1
let adult = 0;

//printing default value
document.getElementById("adult").innerText = adult;
document.getElementById("adultTotal").innerText = adult;

function increment1() {
   if (adult < 100) {
    adult = adult + 1;
    document.getElementById("adult").innerText = adult;
    document.getElementById("adultTotal").innerText = adult;
   }
}
function decrement1() {

  if (adult > 0) {
    adult = adult - 1;
    document.getElementById("adult").innerText = adult;
    document.getElementById("adultTotal").innerText = adult;
  }
}

//counting 2
let child = 0;
//printing default value
document.getElementById("child").innerText = child;
document.getElementById("childTotal").innerText = child;

function increment2() {
   if(child < 100) {
    child = child + 1;
    document.getElementById("child").innerText = child;
    document.getElementById("childTotal").innerText = child;
   }
}
function decrement2() {
  if(child > 0) {
    child = child - 1;
    document.getElementById("child").innerText = child;
    document.getElementById("childTotal").innerText = child;
  }

}

//Done button click


function done() {
  var x = document.getElementById("bookingRooms");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Scroll navbar hide

var nav = document.getElementById('nav-bar');
var navBarMenu = document.getElementById('nav-bar-menu');
var logoColor = document.getElementById('logo-color');
var logoWhite = document.getElementById('logo-white');
  
navBarMenu.classList.add('nav-bar-menu')
  nav.classList.add("nav-transparent");
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10  ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
        navBarMenu.classList.remove('nav-bar-menu')
        logoColor.style.display = "block";
        logoWhite.style.display = "none";

    } 
    else {
      navBarMenu.classList.add('nav-bar-menu')
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        logoColor.style.display = "none";
        logoWhite.style.display = "block";
        
    }
};
  