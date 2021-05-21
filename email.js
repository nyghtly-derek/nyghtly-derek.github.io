var emailText = document.getElementById("js-email");
var emailDiv = document.getElementById("js-email-div")
var toggle = true;

var showEmailActivator = document.getElementById("js-show-email");
var copyEmailActivator = document.getElementById("js-copy-email");

showEmailActivator.onclick = showEmail;
copyEmailActivator.onclick = copyEmail;

function showEmail() {
    if (toggle) {
        emailText.innerHTML = " derek@nyghtly.net";
        emailDiv.classList.remove("email--hide");
        toggle = false;
    }
    else {
        emailText.innerHTML = "";
        emailDiv.classList.add("email--hide");
        toggle = true;
    }
}

function copyEmail() {
    emailText.select();
    document.execCommand("copy");
}