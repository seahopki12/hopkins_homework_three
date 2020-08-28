// Global Variable and Function Declaration
var generateBtn = document.querySelector("#generate");

function writePassword() {

  // writePassword Variables
  
  var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
  var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numCharset = "0123456789";
  var specCharset = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var lowerValidation = " lowercase characters"
  var upperValidation = " uppercase characters"
  var numValidation = " numeric characters"
  var specValidation = " special characters"

  var charArray = [];
  var ansValidation = [];

  // Password Qualification Questions
  var lengthPrompt = prompt("Please input a number from 8-128 to indicate the desired length of your password.")
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    var lowerConfirm = confirm("Does your password require lowercase characters? ")
    var upperConfirm = confirm("Does your password require uppercase characters? ")
    var numConfirm = confirm("Does your password require numerical characters? ")
    var specConfirm = confirm("Does your password require special characters? ")
  }
  else alert("Answer is not acceptable. Please try again. ")

  // Password Qualification Evaluation and Validation
  if (lowerConfirm == true) {
    charArray.push(lowerCharset);
    ansValidation.push(lowerValidation);
  }
  if (upperConfirm == true) {
    charArray.push(upperCharset);
    ansValidation.push(upperValidation);
  }
  if (numConfirm == true) {
    charArray.push(numCharset);
    ansValidation.push(numValidation);
  }
  if (specConfirm == true) {
    charArray.push(specCharset);
    ansValidation.push(specValidation);
  }
  var charset = charArray.join("");

  if (lowerConfirm == false){
    alert("You must click 'OK' at least once. ");
  }
  else alert ("You have selected: " + ansValidation + ".");
// Generating the Password
  var length = parseInt(lengthPrompt);

  var password = "";

  for (var i = 0; i < length; i++) {
    password = password + charset.charAt(Math.floor(Math.random() * Math.floor(charset.length - 1)));
  }

  // Writing the Password to the HTML File
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









