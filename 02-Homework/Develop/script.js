// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function() {
  prompt("Please input a number from 8-128 to indicate the desired length of your password.")
};


  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
