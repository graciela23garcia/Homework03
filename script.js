///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var specialChar = "!@#$%^&*()"

var upperCase = "ABCDEFGFIJKLMNOPQRSTUVWXYZ"

var characters = "abcdefghijklmnopqrstuvwxyz" 

var numbers = "1234567890"

var passLength = prompt("How long would you like your password to be?");

function generatePassword() {
  //How long is the password? this will need an input from user 
  //Ask the prompt questions, that will make up password
  //var passLength = prompt("How long would you like your password to be?");

    //Special characters
  var theSpecialChar = confirm("Would you like special characters in your password");
  if (theSpecialChar) {
    characters += specialChar;
  }
    //uppercase letters
  var theUpperCase = confirm("Would you like to include uppercase letters in your password?");
  if (theUpperCase) {
    characters += upperCase;
  }
    //lowercase letters 
  // var theLowerCase = confirm("Would you like to include lowercase letters in your password?");
    //numbers 
  var theNumbers = confirm("Would you like to include numbers in your password?");
  if (theNumbers) {
    characters += numbers;
  }
  //define a variable for each of the promps above with a string of what they are. 
 
  
}
generatePassword();
console.log(characters);

//Loop to generate random password
function password(l, c) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += c.charAt(Math.floor(Math.random() * c.length));
  }
  return pwd;
}

//password(passLength, characters);
console.log(password(passLength, characters));




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password(passLength, characters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
