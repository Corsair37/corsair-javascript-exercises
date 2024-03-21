const reverseString = function(input) {
   const strungInput = String(input);
   const reverseInput = strungInput.split("").reverse().join("")
   return reverseInput

};

// Do not edit below this line
module.exports = reverseString;
