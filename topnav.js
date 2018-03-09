

var topnav = document.getElementById("js-topnav");
var topnavBackground = document.getElementById("js-topnav__background");
var content = document.getElementById("js-content");
var sticky = topnav.offsetTop + 38;

window.onscroll = function() {makeStickyTopnav()};

function dropTopnav() {
    if (!topnav.classList.contains("topnav--dropped")) {
        topnav.classList.add("topnav--dropped");
        topnavBackground.classList.add("topnav__background--dropped");
    } 
    else {
        topnav.classList.remove("topnav--dropped");
        topnavBackground.classList.remove("topnav__background--dropped");
    }
}



function makeStickyTopnav() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("topnav--sticky")
        topnavBackground.classList.add("topnav__background--sticky");
        content.classList.add("content--scrolled");
    } 
    else {
        topnav.classList.remove("topnav--sticky");
        topnavBackground.classList.remove("topnav__background--sticky");
        content.classList.remove("content--scrolled");
    }
} 

