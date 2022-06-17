var regdUsers=JSON.parse(localStorage.getItem("loginDetails")) || [];
function createUser(){
    var obj={};
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#pass").value;
    if(name=="" || email=="" || pass==""){
        alert("Please fill the Required fields")
    }
    else{
        obj={
        name:name,
        pass:pass,
        email:email
    };
    regdUsers.push(obj);
    localStorage.setItem("loginDetails",JSON.stringify(regdUsers));
    window.location.href="login.html";
    alert("Account Created SuccessFully!")
    }
    
}