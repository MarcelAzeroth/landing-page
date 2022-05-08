const submitBtn = document.querySelector("button");
const emailField = document.querySelector("#email");
const validation = document.querySelector(".validation-msg")
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //Bruh


submitBtn.addEventListener("click", () => {
    const email = document.querySelector("#email").value;

    if(!email.match(pattern)){
        validation.classList.remove("hidden")
    } 

})

emailField.addEventListener("keydown", () => {
    validation.classList.add("hidden");
})

