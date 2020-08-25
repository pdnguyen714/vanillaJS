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

function player1Choice(choice) {
  // if player1 chose rock
  if (choice === "rock") {
      return "Player 1 chose rock";
  } else if (choice === "paper") {
      return "Player 1 chose paper";
  } else if (choice === "scissors") {
      return "Player 1 chose scissors";
  } else {
      return "Player 1 has chosen poorly!";
  }
    // return "Player 1 chose rock"
  // otherwise if player1 chose paper
    // return "Player 1 chose paper"
  // otherwise if player1 chose scissors
    // return "Player 1 chose scissors"
  // otherwise
    // return "Player 1 has chosen poorly!"
}

function selectShirtSize(choice) {
  // if shirt is greater than or equal 20 and less than 30
  if (choice >=20 && choice < 30) {
      return "You should select a size S";
  } else if (choice >= 30 && choice < 40) {
      return "You should select a size M";
  } else if (choice >= 40 && choice < 50) {
      return "You should select a size L";
  } else {
      return "You should select a different shirt";
  }
    // return 'You should select a size S'
  // otherwise if shirt is greater than or equal to 30 and less than 40
    // return 'You should select a size M'
  // otherwise if shirt is greater than or equal to 40 and less than 50
    // return 'You should select a size L'
  // otherwise
    // return 'You should select a different shirt'
}

function convertScoreToGrade(score) {
  // your code here
  if (score <= 100 && score >= 90) {
      return "A";
  } else if (score <= 89 && score >= 80) {
      return "B";
  } else if (score <= 79 && score >= 70) {
      return "C";
  } else if (score <= 69 && score >= 60) {
      return "D";
  } else if (score <= 59 && score >= 0) {
      return "F";
  } else {
      return "INVALID SCORE";
  }
}

// ========== loops practice ==========

function loopASequence(start, end) {
  // create a loop which runs if start is less than or equal to end
  while (start <= end) {
      console.log(start);
      start++;
  }
    // log current value of start to console
    // increment value of start
}

function loopAnArray(array) {
  // create an index variable
  var index = 0;
  // create a loop which iterates over the input array
  while (index < array.length) {
      console.log(array[index]);
      index++;
  }
    // log current array element to the console
    // increment value of index variable
}

function loopAString(string) {
  // create an index variable
  var index = 0;
  // create a loop which iterates over the input string
  while (index < string.length) {
      console.log(string[index])
      index++;
  }
    // log current string character to the console
    // increment value of index variable
}

function loopASequenceAgain(start, end) {
  // create a loop which loops from start to end
  for (x = start; x <= end; x++) {
      console.log(x);
  }
    // log current value to console
}

function loopAnArrayAgain(array) {
  // create a loop which iterates over the input array
  for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
  }
    // log current array element to the console
}

function loopAStringAgain(string) {
  // create a loop which iterates over the input string
  for (var i = 0; i < string.length; i++) {
      console.log(string[i]);
  }
    // log current string character to the console
}

function loopEveryOther(array) {
  // create a loop which iterates over every other element of the input array
  for (var i = 0; i < array.length; i+=2) {
      console.log(array[i]);
  }
    // log every other array element to the console
}

function loopStartingAtIndex(array, index) {
  // create a loop which iterates from index to the end of the input array
  for (var i = index; i < array.length; i++) {
      console.log(array[i]);
  }
    // log current array element to the console
}

function loopInReverse(array) {
  // create a loop which iterates from back to front of the input array
  for (var i = array.length -1; i > -1; i--) {
      console.log(array[i]);
  }
    // log current array element to the console
}

function useContinue(array, index) {
  // create a loop which iterates over the input array
  for (var i = 0; i < array.length; i++) {
        if (i === index) {
            continue;
        }
    console.log(array[i]);
  }
    // if current index is equal to input index
      // use described statement to skip to next iteration of loop (must include semi-colon!)
    // log current array element to the console
}

function useBreak(array, index) {
  // create a loop which iterates over the input array
  for (var i = 0; i < array.length; i++) {
      if (i > index) {
          break;
      }
     console.log(array[i]);
  }
    // if current index is greater than input index
      // use described statement to stop the loop completely (must include semi-colon!)
    // log current array element to the console
}

function loopOverKeys(object) {
  // create a loop which iterates over the input object
  for (var keys in object) {
      console.log(keys);
  }
    // log current key to the console
}

function loopOverValues(object) {
  // create a loop which iterates over the input object
  for (var keys in object) {
      console.log(object[keys]);
  }
    // log current value to the console
}

function loopAnArrayOfArrays(arrayOfArrays) {
  // create a loop which iterates over the input array
  for (var i = 0; i < arrayOfArrays.length; i++) {
      for ( var j = 0; j < arrayOfArrays[i].length; j++) {
          console.log(arrayOfArrays[i][j]);
      }
  }
    // create an inner loop which iterates over current inner array
      // log current element to the console
}

{
  // create a loop which iterates over the input object
  for (var outer in nestedObject) {
      for (var inner in nestedObject[outer]) {
          console.log(nestedObject[outer][inner])
      }
  }
    // create an inner loop which iterates over current inner object
      // log current value to the console
}

function loopAnArrayOfObjects(arrayOfObjects) {
  // create a loop which iterates over the input array
  for (var i = 0; i < arrayOfObjects.length; i++) {
      for (var inner in arrayOfObjects[i]) {
          console.log(arrayOfObjects[i][inner])
      }
  }
    // create an inner loop which iterates over current inner object
      // log current value to the console
}

function loopAnObjectOfArrays(objectOfArrays) {
  // create a loop which iterates over the input object
  for (var objects in objectOfArrays) {
      for (var i = 0; i < objectOfArrays[objects].length; i++) {
          console.log(objectOfArrays[objects][i])
      }
  }
    // create an inner loop which iterates over current inner array
      // log current value to the console
}

function generateCombinations(array1, array2) {
  // create a loop which iterates over the first array
  for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
          console.log(array1[i] + " " + array2[j]);
      }
  }
    // create an inner loop which iterates over the second array
      // log current element of first array and current element of second array to the console with space in between
}

function filterOddElements(numbers) {
  // if there are no odd nums return empty array
  if (numbers === 0) {
      return [];
  }
  // create empty arr to store odd nums
  var oddNumbers = [];
  // iterate through numbers arr
  for (var i = 0; i < numbers.length; i++) {
    // if remainder equals 1 push number into odd arr
      if (numbers[i] % 2 === 1) {
          oddNumbers.push(numbers[i]);
      }
  }
  return oddNumbers;
}

function computeSumOfAllElements(numbers) {
  // if input arr is empty return 0
  if (numbers.length === 0) {
      return 0;
  }
  // store sum to add to num arr
  var sum = 0;
  // iterate through num arr
  for (var i = 0; i < numbers.length; i++) {
    // add sum to num arr
      sum += numbers[i];
  }
  // return sum
  return sum;
}

function computeAverageOfNumbers(numbers) {
  // if input arr is empty return 0
  if (numbers.length === 0) {
      return 0;
  }
  // store a total sum
  var sum = 0;
  // iterate through num arr
  for (var i = 0; i < numbers.length; i++) {
      // add sum to current iteration in arr
      sum += numbers[i];
  }
  // return sum divided by total nums for average
  return sum / numbers.length;
}

function keyOfObjectValue(object, target) {
  // iterate through obj keys
    for (var key in object) {
      //   if target is found return key
      if (object[key] === target) {
        return key;
      } 
    }
  //   if target is not found return -1
        return -1;
  }

  function getElementsAbove40(numbers) {
    // if no numbers over 40 return 0
    if (numbers.length === 0) {
        return 0;
    }    
    // declare count total var outside loop
    var count = 0;
    // iterate through numbers arr
      for (var i = 0; i < numbers.length; i++) {
        // increment value of count var if num over 40
        if (numbers[i] > 40) {
          count++;
        }
      }
    // return count total
      return count;
    }

    function createSentence(words) {
      // store sentence result in var
      var sentence = "";
      // iterate through words arr
        for (var i = 0; i < words.length; i++) {
          // if its the last word add a period
          if (i === words.length - 1) {
              sentence += words[i] + '.';
          // otherwise add a space after each word
          } else {
              sentence += words[i] + ' ';
          }
        }
      // return completed sentence
        return sentence;
      }