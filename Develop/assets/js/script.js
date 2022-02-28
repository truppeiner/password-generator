// Assignment code here

//establishes character variables
var charNumbers = "0123456789";
var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "!@#$%^&*()";

// generator functions 


//BEGIN GENERATE PASSWORD FUNCTION
function generatePassword() {
  //variables for user selection and final password
  var userSelection = '';
  var createdPassword = '';

  //establishes how long password is 
  var passwordLength = window.prompt("How many characters would you like your password to be? Must be between (8-128) characters!");
    if (passwordLength > 128 || passwordLength <8 ) {
      var confirmLength = window.alert("Password must be between 8 and 128 characters, please resubmit");
      generatePassword();
    };
  
  //asks if user wants numbers
  let numbers = window.confirm("Would you like numbers in your password?")
    if(numbers) {
      userSelection = userSelection.concat(charNumbers);
    };

  //asks if user wants lowercase
  let lowerCase = window.confirm("Would you like lowercase letters in your password?");
    if(lowerCase) {
      userSelection = userSelection.concat(charLowerCase);
    };

  //asks if users want upercase 
  let upperCase = window.confirm("Would you like uppercase letters in your password?"); 
    if(upperCase) {
      userSelection = userSelection.concat(charUpperCase);
    };
  
  //asks if users want special characters 
  let special = window.confirm("Would you like special characters in your password?");
    if(special) {
      userSelection = userSelection.concat(charSpecial);
    };

  //returns the user selection for password parameter 
  console.log(userSelection);

  //makes sure generation was added 
  if (userSelection.length === 0)
    return;

  //for loop to generate random chars according to variables added
  for (var i = 0; i < passwordLength ; i++) {
    var Index = Math.floor(Math.random() * userSelection.length);
    var random = userSelection[Index];
    createdPassword = createdPassword.concat(random);
  };

  return createdPassword;
};

//END GENERATE PASSWORD FUNCTION

  


// Get references to the #generate element
// assigns generate button to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function to display password upon generation
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// when you click on generate, it runs the writepassword function
generateBtn.addEventListener("click", writePassword);
