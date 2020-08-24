// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function () {
  var lengthPrompt = prompt("Please input a number from 8-128 to indicate the desired length of your password.")
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    var lowerConfirm = confirm("Does your password require lowercase characters? ")
    var upperConfirm = confirm("Does your password require uppercase characters? ")
    var numConfirm = confirm("Does your password require numerical characters? ")
    var specConfirm = confirm("Does your password require special characters? ")
  }
  else alert("Answer is not acceptable. Please try again. ")
}

var length = lengthPrompt >= 8 && lengthPrompt <= 128;
var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "0123456789";
var specCharset = "!@#$%^&*()_+";

var charset = 


// Write password to the #password input
function writePassword() {
  var password = generatePassword() {
    for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
}
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
