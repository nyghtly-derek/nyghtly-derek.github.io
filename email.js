var emailText = document.getElementById("js-email");
var emailDiv = document.getElementById("js-email-div")
var toggle = true;

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