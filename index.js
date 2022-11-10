const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&",
    "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".",
    "?","/"]; 

let passwordEl = document.getElementById("password-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")
let passwordLength = 0
let passwords = []

function asignLength10() {
    passwordLength = 10
    return passwordLength
}

function asignLength12() {
    passwordLength = 12
    return passwordLength
}

function asignLength15() {
    passwordLength = 15
    return passwordLength
}

function error() {
    alert("Please set password length!");
}

function randomPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}
function generatePassword() {
    let password1 = randomPassword()
    let password2 = randomPassword()
    let password3 = randomPassword()
    let password4 = randomPassword()
    passwords = [password1,password2,password3,password4]
    passwordEl.textContent = passwords[0]
    password2El.textContent = passwords[1]
    password3El.textContent = passwords[2]
    password4El.textContent = passwords[3]
}

