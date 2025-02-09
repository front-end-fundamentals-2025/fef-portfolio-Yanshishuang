const inputElement = document.getElementById("input-name");
const buttonElement = document.getElementById("send-button");
const headingElement = document.getElementById("heading");

buttonElement.addEventListener("click", function(send){
    let enteredName = inputElement.value;
    if(enteredName !== ""){
        headingElement.innerText = "Hello " + enteredName + "!";
    }
    else{
        headingElement.innerText = "Nice to meet you !";
    }
});