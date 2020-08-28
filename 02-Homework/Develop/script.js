// Write password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {

  // Assignment Code
  
  var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
  var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numCharset = "0123456789";
  var specCharset = "!@#$%^&*()_+";

  var charArray = [];

  // This is what happens when you hit the 'Generate Password' button.
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
  if (upperConfirm == true) {
    charArray.push(upperCharset)
  }
  if (numConfirm == true) {
    charArray.push(numCharset)
  }
  if (specConfirm == true) {
    charArray.push(specCharset)
  }
  else alert("You must click 'OK' at least once. ");

  var charset = charArray.join();

  var length = parseInt(lengthPrompt);

  for (var i = 0; i < length; i++) {
    password = password + charset.charAt(Math.floor(Math.random() * Math.floor(charset.length - 1)));
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









