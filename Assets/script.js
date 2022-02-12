//This creates my global variables that will be used for my password generator
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '?', '>', '<', ':']
var checkPassword = "Check Password"
var goodLength = true
var badLength = false
var low = true
var up = true
var num = true
var special = true


var passwordLength
function generatePassword() { //creating a function to generate a password
var generate
//creating a prompt once button is clicked to enter a character length
passwordLength = prompt ("Please choose how many characters you would like in your password- between 8 and 128 numbers:");
if ((passwordLength > 7) && (passwordLength < 129)) {
  
} else {
  //second prompt if they dont enter between 8 and 128 characters
(passwordLength =prompt ("Please try Again")
)}
var upConfirm = confirm ("Would you like uppercase letters?");//prompt asking if they want uppercase letters
console.log (upConfirm)


var lowConfirm = confirm ("Would you like lowercase letters?")//prompt asking if they want lowercase letters


var sChar = confirm ("Would you like special characters?")//prompt asking if they want special characters



var numConfirm = confirm ("Would you like numbers?")//prompt asking if they want numbers


//If they have chosen uppercase, or lowercase, or special characters, or numbers, then then can generate the password. If they haven't chosen at least one of them, they are prompted to try again
if 
(upConfirm || lowConfirm || sChar || numConfirm) {
  generate = alert ("Excellent, generating your password now:")
} else {
  alert("You must choose at least one")
}

//This is creating an array and combining with CONCAT the different variables that the password can be
console.log(x > lowerCase.length); 
var passwordArray = []
var finalPassword = ""
if (lowConfirm === true) {
  passwordArray = passwordArray.concat (lowerCase)
}
if (upConfirm === true) {
  passwordArray = passwordArray.concat (upperCase)
}
if (sChar === true) {
  passwordArray = passwordArray.concat (specialCharacters)
}
if (numConfirm === true) {
  passwordArray = passwordArray.concat (numbers)
}
console.log (passwordArray)

//We only want to find as many random index numbers as the password is long
//passwordLength. The variable x represents the random value with uses the passwordArray that we created, and nothing longer than the length of the array
for (var i = 0; i < passwordLength; i++) {
  var x =Math.floor(Math.random () * passwordArray.length)
  finalPassword = finalPassword + passwordArray[x]
//final password equals whatever it equals plus an element from the array
}
return finalPassword; //gives you a password that was generated

};

//NEED TO ADD WHILE LOOP
// Assignment Code
// This is telling java to go look for the generate ID in the HTML, and assigning it a value
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// CREATE A GENERATE PASSWORD FUNCTION, alerts for people if they dont meet criteria
// going to be generating password under generatePassword
// string up uppercase/lowercase/numbers/letter
function writePassword() {
  var password = generatePassword(); //whatever this variable equals- put it in the generator
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);