var emailText = document.getElementById("js-email");
var emailDiv = document.getElementById("js-email-div")
var toggle = true;

var showEmailActivator = document.getElementById("js-show-email");
var copyEmailActivator = document.getElementById("js-copy-email");

showEmailActivator.onclick = showEmail;
copyEmailActivator.onclick = copyEmail;

function showEmail () {
    emailText.innerHTML = "derek@nyghtly.net";
    emailDiv.classList.remove("email--hide");
}

function copyEmail () {
    emailText.select();
    document.execCommand("copy");
}