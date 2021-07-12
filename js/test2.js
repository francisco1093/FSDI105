
var user="Jesus";
var pass="123";

var usertxt=document.getElementById("userName");
var passtxt=document.getElementById("userPass");
function login(){
    console.log("login");
    console.log(usertxt.value);
    console.log(passtxt.value);
    
    if(usertxt.value==="Jesus" && passtxt.value==="123")
     {   console.log("Welcome");
        document.getElementById("msg").innerHTML="<h2> Welcome </h2>";
        document.getElementById("main").style.display="none";
    }
    else
    {
        console.log("Enter a correct user");
        document.getElementById("msg").innerHTML="<h4> Incorrect </h4>";
        
    }

    clear();
}

function clear(){
    usertxt.value="";
    passtxt.value="";
}