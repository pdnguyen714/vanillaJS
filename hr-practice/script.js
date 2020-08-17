// ========== targeting elements practice ==========

// var elements = document.getElementsByClassName("title");
// var target = elements[1];
// target.innerHTML = "DISCOVER YOUR INNER HACKER";
// target.style.background = "black";
// target.style.color = "white";

// ========== index practice ==========

// var testString = 'words';

// var firstCharacter = testString[0]; // accesses the first character: 'w'
// var thirdCharacter = testString[2]; // accesses the third character: 'r'
// console.log(firstCharacter); // will log 'w'
// console.log(thirdCharacter); // will log 'r'

// ========== function practice ==========

// function returnACharacter(string, index) {
//     return string[index];
//   }
//   var character = returnACharacter('tea', 1);
//   console.log('character:', character);

// ========== arrays practice ==========
// function returnAnElement(array, index) {
//     return array[index];
//   }
  
//   var scores = [98, 85, 91, 78, 82];
//   var position = 3;
//   var positionElement = returnAnElement(scores, position);
//   console.log('positionElement:', positionElement);
  
  // ========== objects practice ==========
//   function returnAValue(obj, key) {
//     return obj[key];
//   }
  
//   var computer = {
//     name: "MacBook Pro",
//     version: "10.14.6",
//     processor: "2 GHz Intel Core i7",
//     memory_gb: 8
//   };
//   var nameOfKey = "version";
//   var valueAtKey = returnAValue(computer, nameOfKey);
//   console.log('valueAtKey:', valueAtKey);

// ========== booleans practice ==========
// var haveACar = true;
// var bussesAreRunning = true;

// var willAttendEvent = haveACar || bussesAreRunning;
// console.log("I will attend the event:", willAttendEvent);

// ========== numbers practice ==========
function getSum(num1, num2) {
  // create a result variable,
  var result;
  // assign it to num1 and num2 added together
  var result = num1 + num2;
  // return the result variable
  return result;
}

function getDifference(num1, num2) {
  // create a result variable,
  var result;
  // assign it to num1 minus num2
  result = num1 - num2;
  // return the result variable
  return result;
}

function getProduct(num1, num2) {
  // create a result variable,
  var result;
  // assign it to num1 times num2
  result = num1 * num2;
  // return the result variable
  return result;
}

function getQuotient(num1, num2) {
  // create a result variable,
  var result;
  // assign it to num1 divided by num2
  result = num1 / num2;
  // return the result variable
  return result;
}

function getPower(num1, num2) {
  // create a result variable,
  var result;
  // assign it to num1 raised to the num2 power
  result = num1 ** num2;
  // return the result variable
  return result;
}

function getRemainder(num1, num2) {
  // create a result variable,
  var result;
  // assign it to remainder after dividing num1 by num2
  result = num1 % num2;
  // return the result variable
  return result;
}

function increment(base, incrementer) {
  // reassign base to result of incrementing base by incrementer
  base += incrementer;
  // return base
  return base;
}

function decrement(base, decrementer) {
  // reassign base to result of decrementing base by decrementer
  base -= decrementer;
  // return base
  return base;
}

function applyTimesEquals(base, multiplier) {
  // reassign base to result of multiplying base by multiplier
  base *= multiplier;
  // return base
  return base;
}

function getAbsoluteValue(num) {
  // create a result variable
  var result;
  // assign it to absolutely value of input num
  result = Math.abs(num);
  // return result
  return result;
}

function roundDown(num) {
  // create a result variable
  var result;
  // assign it to input, rounded down
  result = Math.floor(num);
  // return result
  return result;
}

function roundUp(num) {
  // create a result variable
  var result;
  // assign it to input, rounded up
  result = Math.ceil(num);
  // return result
  return result;
}

function applyParseInt(numString) {
  // create a result variable
  var result;
  // assign it to parsed integer from input string
  result = Number.parseInt(numString);
  // return result
  return result;
}

function applyParseFloat(numString) {
  // create a result variable
  var result;
  // assign it to parsed float from input string
  result = Number.parseFloat(numString);
  // return result
  return result;
}

function generateRandomNumber(min, max) {
  // create a result variable
  var result;
  // assign it to formula for random number between min and max
  result = Math.random() * (max - min) + min;
  // return result
  return result;
}

function applyGreaterThan(num1, num2) {
  // create a result variable
  var result;
  // assign it expression comparing if num1 is greater than num2
  result = num1 > num2;
  // return result
  return result;
}

function applyLessThanOrEqualTo(num1, num2) {
  // create a result variable
  var result;
  // assign it expression comparing if num1 is less than or equal num2
  result = num1 <= num2;
  // return result
  return result;
}

// ========== strings practice ==========
function createString() {
  // create a result variable,
  var result;
  // assign it to a new string
  result = "string";
  // return the result variable
  return result;
}

function accessACharacter(string, index) {
  // create a result variable,
  var result;
  // assign it to an expression that accesses the character within string at the index
  result = string[index]
  // return the result variable
  return result;
}

function reassignAString(string) {
  // reassign input string to described string
  input = "reassigned";
  // return the input string
  return input;
}

function addTogetherTwoStrings(string1, string2) {
  // create a result variable
  var result;
  // assign it to an expression which adds together string1 and string2
  result = string1 + string2;
  // return the result variable
  return result;
}

function createFullName(firstName, lastName) {
  // create a fullName variable
  var fullName;
  // assign it to an expression adding first and last name with a space in between
  fullName = firstName + " " + lastName;
  // return the fullName variable
  return fullName;
}

function interpolateAString(activity, dayOfTheWeek) {
  // create a result variable
  var result;
  // assign it to an expression which interpolates the input parameters into the described message
  result = "We will go " + activity + " on " + dayOfTheWeek + ".";
  // return the result variable
  return result;
}

function getStringLength(string) {
  // create a length variable
  var length;
  // assign it to the length of the string
  length = string.length;
  // return the length variable
  return length;
}

function getLastCharacter(string) {
  // create a lastIndex variable
  // assign it to the last index in the string
  var lastIndex = string.length - 1;
  // create a lastCharacter variable
  // assign it to the last character in the string (make use of lastIndex)
  var lastCharacter = string[lastIndex];
  // return the lastCharacter variable
  return lastCharacter;
}

function applySubString(string, start, end) {
  // create a subString variable
  var subString;
  // assign it to a portion of the string from before start, up to, but not including end
  subString = string.substring(start, end);
  // return the subString variable
  return subString;
}

function applyIndexOf(string, subString) {
  // create an index variable
  var index;
  // assign it to the index inside of string where subString can first be found
  index = string.indexOf(subString);
  // return the index variable
  return index;
}

function applyToString(param) {
  // create a stringVersion variable
  var stringVersion;
  // assign it to the string version of the input param
  stringVersion = param.toString();
  // return the stringVersion variable
  return stringVersion;
}

function generateHaiku(firstLine, secondLine, thirdLine) {
  // create a haiku variable
  var haiku;
  // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
  haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
  // return the haiku variable
  return haiku;
}

// ========== arrays practice ==========

function createArray() {
  // create a result variable,
  var result;
  // assign it to a new array
  result = [];
  // return the result variable
  return result;
}