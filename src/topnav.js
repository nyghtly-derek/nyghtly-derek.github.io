

var topnav = document.getElementById("js-topnav");


function dropTopnav() {
    if (!topnav.classList.contains("topnav--dropped")) {
        topnav.classList.add("topnav--dropped");
    } 
    else {
        topnav.classList.remove("topnav--dropped");
    }
}

function pullOutNavElem() {
    // TODO: animate elems on hover
}


