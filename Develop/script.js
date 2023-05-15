// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("Password length? Choose 8-128.");
  var possibleChars = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8-128");
    return generatePassword(); //This fixed the bug where the 'confirm(s)' was running multiple times due to incorrect requirement inputs.
  }

  inclusions();

  function inclusions() {

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
    possibleChars += "()*+,-./:;<=>?@[\]^_`{|}~";
  }

  if (possibleChars === "") {
    alert("Please include at least one of the character types.");
    inclusions();
  }
 }

 var password = "";

 for (var i = 0; i < passwordLength; i++) {
  password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
 }

 return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
