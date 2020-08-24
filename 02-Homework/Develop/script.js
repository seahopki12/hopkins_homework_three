// Assignment Code
var generateBtn = document.querySelector("#generate");

// generateBtn.onclick = function () {
//   var lengthPrompt = prompt("Please input a number from 8-128 to indicate the desired length of your password.")
//   if (lengthPrompt >= 8 && lengthPrompt <= 128) {
//     var characterPrompt = prompt("Please indicate which character types you would like to include within your password ('lowercase', 'uppercase', 'numeric', and/or 'special characters'). Please check spelling: ")
//     if (characterPrompt.toLocaleLowerCase === "lowercase" || "uppercase" || "numerical" || "special characters" ) {

//     }
//   }
//   else alert("Your anser does not work. Please try again.")
// }




// Write password to the #password input
   function writePassword() {
    generateBtn.onclick = function () {
      var lengthPrompt = prompt("Please input a number from 8-128 to indicate the desired length of your password.")
      if (lengthPrompt >= 8 && lengthPrompt <= 128) {
        var characterPrompt = prompt("Please indicate which character types you would like to include within your password ('lowercase', 'uppercase', 'numeric', and/or 'special characters'). Please check spelling: ")
        if (characterPrompt.toLocaleLowerCase === "lowercase" || "uppercase" || "numerical" || "special characters" ) {
    
        }
      }
      else alert("Your anser does not work. Please try again.")
    }
    //  var password = generatePassword()
     var passwordText = document.querySelector("#password");

     passwordText.value = password;

   }

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
