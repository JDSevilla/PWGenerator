var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var completePassword = "";
  var passwordLength = 0;
  var chooseLength = prompt("How long would you like your password to be? Minimun length is 8 characters.");
  var Numbers = confirm("Would you like to use UpperCases in your password?");
  var LowerCases = confirm("Would you like to use lowercase letters in your password?");
  var UpperCases = confirm("Would you like to use uppercase letters in your password?");
  var Special = confirm("Would you like to use special characters in your password?");

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["~", "%"];

  var Numbers;
    for (i = 0; i < numbers.length; i++) {
      completePassword += numbers[Math.floor(Math.random () * 10)];
    }
  var LowerCases;
    for (i = 0; i < lowercase.length; i++) {
      completePassword += lowercase[Math.floor(Math.random () * 26)];
    }
  var UpperCases;
  for (i = 0; i < uppercase.length; i++) {
    completePassword += uppercase[Math.floor(Math.random () * 26)];
  }
  var Special;
  for (i = 0; i < special.length; i++) {
    completePassword += special[Math.floor(Math.random () * 2)];
  }
return(completePassword);
};

function reWriteStats() {
  console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
  console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
  console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  console.log(special[Math.floor(Math.random() * special.length)]);
}

if (chooseLength < 8 && chooseLength > 128) {
  alert("Password is too short. Please try again.")
}
else {
  chooseLength = passwordLength
}

completePassword = console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);


if (Numbers) {
  UpperCases = reWriteStats();
}
else if (LowerCases) {
  lowercase = reWriteStats();
}
else if (UpperCases) {
  uppercase = reWriteStats();
}
else if (Special) {
  special = reWriteStats();
}