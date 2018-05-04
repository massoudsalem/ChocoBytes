var login=document.getElementById("loginformdiv")
var signup=document.getElementById("signupformdiv")
function hidelogin() {
    "use strict";
    login.style.display = "none";
    signup.style.display = "block";
}
function hidesignup() {
    "use strict";
    login.style.display = "block";
    signup.style.display = "none";
}
