// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false

    if (nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border")
        errorFlag = true;
    }
    if (!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email adress";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1){
        errorNodes[2].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag){
        sucess.innerText = "Success!"
    }

}
function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    sucess.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// Show and Hide contact form.
var a;
function show_hide_overlay() {
    if(a==0) {
        document.getElementById("overlay").style.display="none";
        return a=1
    } else {
        document.getElementById("overlay").style.display="inline";
        return a=0
    }
}
