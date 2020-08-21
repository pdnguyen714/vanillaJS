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

function accessAnElement(array, index) {
  // create a result variable,
  var result;
  // assign it to an expression that accesses the element within array at the index
  result = array[index];
  // return the result variable
  return result;
}

function reassignAnElement(array, index, newValue) {
  // reassign the value in the array, located at the index, to the newValue parameter
  array[index] = newValue;
  // return the input array
  return array;
}

function getArrayLength(array) {
  // create a length variable
  var length;
  // assign it to the length of the array
  length = array.length;
  // return the length variable
  return length;
}

function getLastElement(array) {
  // create a lastIndex variable
  // assign it to the last index in the array
  var lastIndex = array.length - 1;
  // create a lastElement variable
  var lastElement = array[lastIndex];
  // assign it to the last element in the string (make use of lastIndex)
  // return the lastElement variable
  return lastElement;
}

function applyPush(array, element) {
  // add the element to the back of the array
  array.push(element);
  // return the array
  return array;
}

function applyPop(array) {
  // create a popped variable
  var popped = array.pop();
  // assign it to an expression removing the last element from the array
  // return the popped variable
  return popped;
}

function applyUnshift(array, element) {
  // add the element to the front of the array
  array.unshift(element);
  // return the array
  return array;
}

function applyShift(array) {
  // create a shifted variable
  var shifted = array.shift();
  // assign it to an expression removing the first element from the array
  // return the shifted variable
  return shifted;
}

function addAnElementInGeneral(array, index, element) {
  // add the element to the array at the index given
  array.splice(index, 0, element);
  // (be sure not to replace any existing elements)
  // return the array
  return array;
}

function removeAnElementInGeneral(array, index) {
  // remove the element from the array at the index given
  array.splice(index, 1);
  // return the array
  return array;
}

function applySplice(array, index, item1, item2) {
  // remove two elements from the array at the index given, and adds item1 and item2 in their place
  array.splice(index, 2, item1, item2);
  // return the array
  return array;
}

function isAnArray(input) {
  // create a result variable
  var result;
  // assign it to a call to the applicable method
  result = Array.isArray(input)
  // return the result variable
  return result;
}

function applySlice(array, start, end) {
  // create a sliceOfArray variable
  var sliceOfArray = array.slice(start, end);
  // assign it to a portion of the array from before start, up to, but not including end
  // return the sliceOfArray variable
  return sliceOfArray;
}

function makeACopy(array) {
  // create a copyOfArray variable
  var copyOfArray = array.slice();
  // assign it to a copy of the array
  // return the copyOfArray variable
  return copyOfArray;
}

function applyConcat(array1, array2) {
  // create a concattedArray variable
  var concattedArray = array1.concat(array2);
  // assign it to the contents of both array1 and array2
  // return the concattedArray variable
  return concattedArray;
}

function applyJoin(arrayOfStrings, string) {
  // create a joinedString variable
  var joinedString = arrayOfStrings.join(string);
  // assign it to a string which is all of the strings in the input array separated by the input string
  // return the joinedString variable
  return joinedString;
}

function applySplit(stringToBeSplit, splitter) {
  // create a splitString variable
  var splitString = stringToBeSplit.split(splitter);
  // assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
  // return the splitString variable
  return splitString;
}

function applyIndexOfToArray(array, element) {
  // create an index variable
  var index = array.indexOf(element);
  // assign it to the index inside of array where element can be found
  // return the index variable
  return index;
}

// ========== objects practice ==========

function createObject() {
  // create a result variable,
  var result = {};
  return result;
  // assign it to a new object
  // return the result variable
}

function accessAProperty(object, key) {
  // create a result variable,
  var result = object[key];
  // assign it to an expression that accesses the property in the object located at the key
  // return the result variable
  return result;
}

function reassignAProperty(object, key, newValue) {
  // reassign the property's value in the object, located at the key, to the newValue parameter
  object[key] = newValue;
  // return the input object
  return object;
}

function removeAProperty(object, key) {
  // remove the property at the given key from the object
  delete object[key];
  // return the object
  return object;
}

function isPropertyPresent(object, key) {
  // create an isPresent variable
  var isPresent = object[key] !== undefined;
  // assign it to a comparison between object's value at key and undefined
  // return the isPresent variable
  return isPresent;
}

function isAnObject(input) {
  // create an isObject variable
  var isObject = typeof input === "object";
  // assign it to whether the input is an object type
  // create an isNotAnArray variable
  var isNotAnArray = !Array.isArray(input);
  // assign it to whether the input is not an array
  // create an isObjectAndNotAnArray variable
  var isObjectAndNotAnArray = isObject && isNotAnArray;
  // assign it to a combination of isObject AND isNotAnArray
  // return the isObjectAndNotAnArray variable
  return isObjectAndNotAnArray;
}

function getAllKeys(obj) {
  // create a keys variable
  var keys = Object.keys(obj);
  // assign it to an expression which will generate an array of all of the keys in obj
  // return to the keys variable
  return keys;
}

function getAllValues(obj) {
  // create a values variable
  var values = Object.values(obj);
  // assign it to an expression which will generate an array of all of the values in obj
  // return to the values variable
  return values;
}

function applyUnshiftAgain(arrayOfArrays, index, element) {
  // add the element to the front of the inner array within the array of arrays located at the index
  arrayOfArrays[index].unshift(element);
  // return the array of arrays
  return arrayOfArrays;
}

function isAnArrayAgain(inputObj, key) {
  // create a result variable
  var result = Array.isArray(inputObj[key]);
  // assign it to a call to the applicable method
  // return the result variable
  return result;
}

function getAllKeysAgain(obj, key) {
  // create a keys variable
  var keys = Object.keys(obj[key]);
  // assign it to an expression which will generate an array of all of the keys located within obj at key
  // return to the keys variable
  return keys;
}

function removeAPropertyAgain(arrayOfObjects, index, key) {
  // remove the property at the given key from the object at the given index
  delete arrayOfObjects[index][key];
  // return the input array of objects
  return arrayOfObjects;
}

function isItUndefined(param) {
  // if param is defined (or not undefined)
  if (param !== undefined) {
      return "Input is defined";
  }
    // return 'Input is defined'
}

function fewerApples(apples, oranges) {
  // if there are fewer apples than oranges
  if (apples < oranges) {
      return "There are fewer apples than oranges";
  }
    // return 'There are fewer apples than oranges'
}

function validLengthPassword(password) {
  // if password length is greater than 4 and less than 15
  if (password.length > 4 && password.length < 15) {
      return "Password length is valid";
  }
    // return 'Password length is valid'
}

function findAgent(agentList, agentToSearchFor) {
  // if agentToSearchFor is present within agentList
  if (agentList.indexOf(agentToSearchFor) > -1)
  return agentToSearchFor + ' is present within Agent list';
    // return '{agentToSearchFor} is present within Agent list'
}

function generateReportSummary(reportTotals, teamName) {
  // if teamName's report total is greater than 5
  var teamTotal = reportTotals[teamName];
  if (teamTotal > 5) {
        // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
        return teamName + ' has surpassed goal with ' + teamTotal + ' reports';

  }
}

function isItTruthy(param) {
  // if param is truthy
  if (param) {
      return "Input is truthy";
  } else {
      return "Input is falsy";
  }
    // return 'Input is truthy'
  // otherwise
    // return 'Input is falsy'
}

function balancePets(dogs, cats) {
  // if there are more than 8 dogs and fewer than 9 cats
  if (dogs > 8 && cats < 9) {
      return 'number of cats and dogs is acceptable';
  } else {
      return 'number of cats or dogs is not acceptable';
  }
    // return 'number of cats and dogs is acceptable'
  // otherwise
    // return 'number of cats or dogs is not acceptable'
}

{
  // if password length is greater than 8
  if (password.length > 8) {
      return 'Password is long enough'
  } else {
      return 'Please enter a password of at least 9 characters';
  }
    // return 'Password is long enough'
  // otherwise
    // return 'Please enter a password of at least 9 characters'
}

function findIngredient(ingredientList, ingredientToSearchFor) {
  // if ingredientToSearchFor is present within ingredientList
  if (ingredientList.indexOf(ingredientToSearchFor) > -1) {
      return ingredientToSearchFor + ' is on the list';
  } else {
      return ingredientToSearchFor + ' is not on the list';
  }
    // return '{ingredientToSearchFor} is on the list'
  // otherwise
    // return '{ingredientToSearchFor} is not on the list'
}

function measureRequiredFruit(fruitTotals) {
  // if there are more than 3 bananas and more than 10 strawberries
  var totalBananas = fruitTotals.bananas;
  var totalStrawberries = fruitTotals.strawberries;
  if (totalBananas > 3 && totalStrawberries > 10) {
      return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries + ' strawberries';
  }else {
      return 'We do not have enough of both fruits';
  }
    // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
  // otherwise
    // return 'We do not have enough of both fruits'
}