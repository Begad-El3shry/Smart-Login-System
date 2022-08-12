var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword=document.getElementById("userPassword");
var users=[];

var emailOfUser=document.getElementById("emailOfUser");
var passwordOfUser=document.getElementById("passwordOfUser");

var welcomePage=document.getElementById("welcomePage");
var currentUser=-1;


if(JSON.parse(localStorage.getItem("usersList")!=null)){
    users=JSON.parse(localStorage.getItem("usersList"));
}

function signUp(){
    var newUser=
    {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    users.push(newUser);
    localStorage.setItem("usersList",JSON.stringify(users));
}

function logIn(){
    var isHere=false;
    for(var i=0 ;i< users.length ; i++)
    {
       if( emailOfUser.value == users[i].email && passwordOfUser.value == users[i].password){
          isHere=true;
          currentUser=i;
       }

    } 
    if( isHere==true){
        welcomePage.classList.remove("d-none");
        var sayWelcome = `<p class="py-5 fs-1 fw-light">Welcom ${users[currentUser].name}</p>  `;
        document.getElementById("welcomeWord").innerHTML=sayWelcome;
    }
    else{
        alert("Login Faild")
    }
}

function logOut(){
   welcomePage.classList.add("d-none");

}



