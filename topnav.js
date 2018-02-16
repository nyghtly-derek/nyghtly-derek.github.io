

var topnav = document.getElementById("js-topnav");
var topnavBackground = document.getElementById("js-topnav__background");
var sticky = topnav.offsetTop + 38;

window.onscroll = function() {makeStickyTopnav()};

function dropTopnav() {
    if (!topnav.classList.contains("topnav--dropped")) {
        topnav.classList.add("topnav--dropped");
    } 
    else {
        topnav.classList.remove("topnav--dropped");
    }
}



function makeStickyTopnav() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("topnav--sticky")
        topnavBackground.classList.add("topnav__background--sticky");
    } 
    else {
        topnav.classList.remove("topnav--sticky");
        topnavBackground.classList.remove("topnav__background--sticky");
    }
} 

