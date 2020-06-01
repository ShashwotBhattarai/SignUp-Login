var count = 0;
var showPassword = function () 
{
    document.getElementById("password").type = "text";
    document.getElementById("rePassword").type = "text";

}

var hidePassword = function ()
{
    document.getElementById("password").type = "password";
    document.getElementById("rePassword").type = "password";

}

var clickCounter = function () 
{
    count = count + 1;
    var decision = count % 2;

    if (decision == 0) 
    {
        hidePassword();
    }
    else 
    {
        showPassword();
    }

}

var emailValidate= function()
{  
    alert("Inside email validate");
    var emailInputValue= document.getElementById("emailInput").value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInputValue.match(mailformat))
    {
        document.getElementById("emailInput").focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.getElementById("emailInput").focus();
        return false;
    }    
}

var passwordValidate= function()
{
    alert("Inside password validate");
    var passwordValue=document.getElementById("password").value;
    var rePasswordValue=document.getElementById("rePassword").value;
    if (passwordValue===rePasswordValue)
    {
        alert("Password match");
        return true;
    }
    else
    {
        alert("Passwords don't match");
        document.getElementById("password").focus();
        document.getElementById("rePassword").focus();
        return false;
    }

}

var saveDataInLocalStorage=function()
{
    alert("Inside save data in localstorage");
    if (typeof(Storage)!=="undefined")
    {

        alert("inside if");
        var emailToBeSaved=document.getElementById("emailInput").value;
        var passwordToBeSaved=document.getElementById("password").value;
        localStorage.setItem(emailToBeSaved,passwordToBeSaved);
        alert("Data saved in local storage");
        
    }
    else
    {
        alert("Your browser doesn't support local storage");
    }
}

var formValidate= function()
{
    if (emailValidate()&&passwordValidate())
    {
        alert("sign up successfull");
        saveDataInLocalStorage();
    }

  
    
}


window.onload = function () 
{
    
    var showButton=document.getElementById("showButton");
    showButton.addEventListener("click", clickCounter);

    var signUpButton= document.getElementById("signUp");

    signUpButton.addEventListener("click",formValidate);

}
