const input = require("prompt-sync")();

const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long!";
    }
    if (!hasUppercase.test(password)) {
        return "Password must contain at least one uppercase letter!";
    }
    if (!hasLowercase.test(password)) {
        return "Password must contain at least one lowercase letter!";
    }
    if (!hasNumber.test(password)) {
        return "Password must contain at least one number!";
    }
    if (!hasSpecialChar.test(password)) {
        return "Password must contain at least one special character!";
    }
    return "Password is valid!";
}

const password = input("Enter a password to check: ");
const result = validatePassword(password);
console.log(result);
