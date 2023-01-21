let userDetails = [];
obj1 = {
    email: "connectit2anand@gmail.com",
    password: "anand123"
}
userDetails.push(obj1);

let obj2 = {
    email: "helloworld@gmail.com",
    password: "anand1234",
}
userDetails.push(obj2);
let emailId = document.getElementById("emailId");
let password = document.getElementById("password");
signIn = document.getElementById("signIn");
signIn.addEventListener("click", (event) => {
    let errorMsg = "Incorrect email or password";
    let wentToHome = false;
    userDetails.forEach((element) => {
        if(emailId.value == element.email && password.value == element.password){
            let goToHome = document.getElementById("goToHome");
            goToHome.click();
            wentToHome = true;
        }
    })  
    if(!wentToHome){
        let displayMsg = document.getElementById("displayMsg");
        
        if(emailId.value == "" && password.value == ""){
            displayMsg.innerText = "Enter Email And password";
        } else if(emailId.value == ""){
            displayMsg.innerText = "Enter Email Id";
        } 
        else if(password.value == ""){
            displayMsg.innerText = "Enter Password";
        } 
        else{
            displayMsg.innerText = "Incorrect Email or Password";
        }
        displayMsg.style.display = "";
    }
});

