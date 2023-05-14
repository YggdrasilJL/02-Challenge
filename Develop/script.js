/* Steps:
    */

// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChars = "";
// Write password to the #password input
function generatePassword() {
  prompt("Password length? Choose 8-128.");
  var includeLowercase = confirm("Include lowercase?");
  var includeUppercase = confirm("Include Uppercase?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include Special characters?");

  if (includeLowercase) {
    possibleChars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumeric) {
    possibleChars += "0123456789";
  }

  if (includeSpecial) { //didnt include space because alot of websites dont allow spaces to be used in passwords
    possibleChars += "()*+,-./:;<=>?@[\]^_`{|}~"
  }
}

function writePassword() {
  var password = generatePassword(possibleChars);
  // const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
