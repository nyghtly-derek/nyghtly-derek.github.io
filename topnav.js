var topnav = document.getElementById("js-topnav");
var topnavActivator = document.getElementById("js-topnav-activator");

topnavActivator.onclick = dropTopnav;

function dropTopnav(){
    if (!topnav.classList.contains("topnav--dropped")) {
        topnav.classList.add("topnav--dropped");
    } 
    else {
        topnav.classList.remove("topnav--dropped");
    }
}
