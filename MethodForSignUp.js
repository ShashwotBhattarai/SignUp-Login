var count = 0;
var showPassword = function () {
    document.getElementById("password").type = "text";
    document.getElementById("rePassword").type = "text";

}

var hidePassword = function () {
    document.getElementById("password").type = "password";
    document.getElementById("rePassword").type = "password";

}

var clickCounter = function () {
    count = count + 1;
    var decision = count % 2;

    if (decision == 0) {
        hidePassword();
    }
    else {
        showPassword();
    }

}

var emailValidate = function () {
    var emailInputValue = document.getElementById("emailInput").value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInputValue.match(mailformat)) {
        document.getElementById("emailInput").focus();
        return true;
    }
    else {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "You have entered an invalid email address!";
        document.getElementById("emailInput").focus();
        return false;
    }
}

var passwordValidate = function () {
    var passwordValue = document.getElementById("password").value;
    var rePasswordValue = document.getElementById("rePassword").value;
    if (passwordValue === rePasswordValue) {
        return true;
    }
    else {

        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "Passwords don't match";
        document.getElementById("password").focus();
        document.getElementById("rePassword").focus();
        return false;
    }

}

var saveDataInLocalStorage = function () {
    if (typeof (Storage) !== "undefined") {
        var emailToBeSaved = document.getElementById("emailInput").value;
        var passwordToBeSaved = document.getElementById("password").value;
        localStorage.setItem(emailToBeSaved, passwordToBeSaved);

    }
    else {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "Your browser doesn't support local storage";
    }
}

var formValidate = function () {
    if (emailValidate() && passwordValidate()) {
        document.getElementById("alertArea").style.color = "white";
        document.getElementById("alertArea").innerHTML = "SignUp Successfull";
        saveDataInLocalStorage();
    }
}


window.onload = function () {

    var showButton = document.getElementById("showButton");
    showButton.addEventListener("click", clickCounter);

    var signUpButton = document.getElementById("signUp");

    signUpButton.addEventListener("click", formValidate);

}
