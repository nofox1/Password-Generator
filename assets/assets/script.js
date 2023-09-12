// Assignment code here
var lettersl = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var lettersu = ["A","B","C","D","E", "F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@","#","$","%","^","&","*","()","_","-","=",">","<","/","~",];

var length = 8;
var char = [];

function settings() {
    char = [];
    length =  parseInt(prompt('How long would you like your password pick 8 - 128 characters.'));

    while (isNaN(length) || length < 8 || length > 128){
      length = prompt('Pick bewteen 8 - 128');
    } 

    if (confirm('Would you like any lowercase letters?')){
      char = char.concat(lettersl); 
     }
    if (confirm('Would you like any uppercase letters?')){
    char = char.concat(lettersu);
    }
   if (confirm('Would you like any numbers?')){
    char = char.concat(numbers); 
    }
    if (confirm('Would you like any symbols?')){
    char = char.concat(symbols); 
    }
    return true;
}



function generatePassword() {

  var password = '';
  for(var i = 0; i < length; i++){
    var index = Math.floor(Math.random() * char.length);
    password = password + char[index];
}
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  settings();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
