// Get HTML elements
const password = document.getElementById("password");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const message = document.getElementById("message");
// Character collections
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}?";
// Generate Password Function
function generatePassword() {
    const passwordLength = Number(length.value);
    let characters = "";
    if (uppercase.checked) {
        characters += upperChars;
    }
    if (lowercase.checked) {
        characters += lowerChars;
    }
    if (numbers.checked) {
        characters += numberChars;
    }
    if (symbols.checked) {
        characters += symbolChars;
    }
    // Validate password length
    if (!Number.isInteger(passwordLength) || passwordLength < 4 || passwordLength > 32) {
        message.textContent = "Please enter a length between 4 and 32.";
        password.value = "";
        return;
    }
    // Check character selection
    if (characters === "") {
        message.textContent = "Please select at least one character type.";
        password.value = "";
        return;
    }
    let generatedPassword = "";
    // Generate random characters
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }
    // Display generated password
    password.value = generatedPassword;
    message.textContent = "Password generated successfully!";
}
// Copy Password Function
async function copyPassword() {
    if (password.value === "") {
        message.textContent = "Generate a password first!";
        return;
    }
    try {
        await navigator.clipboard.writeText(password.value);
        message.textContent = "Password copied successfully!";
    } catch (error) {
        message.textContent = "Unable to copy. Please copy it manually.";
    }
}
// Button Events
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
