// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "0123456789";
var specCharset = "!@#$%^&*()_+";

var charArray = [];
var charset = charArray.join();

// This is what happens when you hit the 'Generate Password' button.
// generateBtn.onclick = function () {
  var lengthPrompt = prompt("Please input a number from 8-128 to indicate the desired length of your password.")
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    var lowerConfirm = confirm("Does your password require lowercase characters? ")
    var upperConfirm = confirm("Does your password require uppercase characters? ")
    var numConfirm = confirm("Does your password require numerical characters? ")
    var specConfirm = confirm("Does your password require special characters? ")
  }
  else alert("Answer is not acceptable. Please try again. ")

  // This is to evaluate what qualifications are selected for the random password. 
  if (lowerConfirm == true) {
    charArray.push(lowerCharset)
  }
  else if (upperConfirm == true) {
    charArray.push(upperCharset)
  }
  else if (numConfirm == true) {
    charArray.push(numCharset)
  }
  else if (specConfirm == true) {
    charArray.push(specCharset)
  }
  else alert("You must click 'OK' at least once. ");

  // Write password to the #password input
  var length = lengthPrompt;

  function writePassword() {
    for (var i = 0; i <= length; i++) {
      password = password + charset.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
// }








