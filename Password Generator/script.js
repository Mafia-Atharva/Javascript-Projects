const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const passBox = document.getElementById('passBox');

const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const generateBtn = document.getElementById('genBtn');
const copyBtn = document.getElementById('copyIcon');
const passIndicator = document.getElementById('passIndicator');

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    generatePassword();
})

generateBtn.addEventListener('click', () => {
    generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    passBox.value = password
    updatePasswordIndicator();
}

function updatePasswordIndicator() {
    passIndicator.className = "pass-indicator " + getPasswordStrength(passBox.value);
}

function getPasswordStrength(password) {
    if (password.length < 8) {
        return "weak";
    }
    else if (password.length < 20) {
        return "medium";
    }
    else {
        return "strong";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updatePasswordIndicator();
})

copyBtn.addEventListener('click', ()=>{
     if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";
        setTimeout(()=>{
            copyBtn.innerHTML = "content_copy";
        },1500)
     }
})