
var count = 0;
var showPassword = function () 
{
    document.getElementById("password").type = "text";
}

var hidePassword = function ()
{
    document.getElementById("password").type = "password";
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

var memberVerification=function()
{   
    var emailInput= document.getElementById("emailInput").value;
    var passwordInput= document.getElementById("password").value;
    var savedPassword=localStorage.getItem(emailInput);
    if(passwordInput===savedPassword)
    {
        return true;
    }
    else
    {
        return false;
    }

}

var loginMethod=function()
{
    if(memberVerification())
    {
        alert("welcom back");
    }
    else
    {
        alert("invalid email/password");
    }
    
}

window.onload= function()
{   
    var showButton= document.getElementById("showButton");
    var loginButton= document.getElementById("loginButton");
    showButton.addEventListener("click",clickCounter);
    loginButton.addEventListener("click",loginMethod);
}