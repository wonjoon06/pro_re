const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "wonjoon" && password === "wonjoon2006") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});