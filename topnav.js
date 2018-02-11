/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropTopnav() {
    var x = document.getElementById("js-topnav");
    if (x.className === "topnav") {
        x.className += " topnav--dropped";
    } 
    else {
        x.className = "topnav";
    }
}

