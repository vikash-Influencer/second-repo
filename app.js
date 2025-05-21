document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        validateForm();
    });
});

function validateForm() {
    // let nameField = document.getElementById("floatingInput");
    let emailField = document.getElementById("floatingInput");
    let passwordField = document.getElementById("floatingPassword");
    // let name = nameField.value.trim();
    let email = emailField.value.trim();
    let password = passwordField.value.trim();
    let errorMessage = "";

    // clearValidation(nameField);
    clearValidation(emailField);
    clearValidation(passwordField);

    // if (name === "") {
    //     errorMessage += "Name is required.\n";
    //     applyError(nameField);
    // } else {
    //     applySuccess(nameField);
    // }
    if (email === "" || !validateEmail(email)) {
        errorMessage += "Valid email is required.\n";
        applyError(emailField);
    } else {
        applySuccess(emailField);
    }
    if (password === "" || password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
        applyError(passwordField);
    } else {
        applySuccess(passwordField);
    }
    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Form submitted successfully!");
        document.getElementById("myForm").submit();
    }
}

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function applyError(field) {
    field.style.border = "2px solid red";
    field.nextElementSibling.innerHTML = "❌";
    field.nextElementSibling.style.color = "red";
}

function applySuccess(field) {
    field.style.border = "2px solid green";
    field.nextElementSibling.innerHTML = "✅";
    field.nextElementSibling.style.color = "green";
}

function clearValidation(field) {
    field.style.border = "";
    field.nextElementSibling.innerHTML = "";
}
