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
  var haveACar = true;
  var bussesAreRunning = true;
  
  var willAttendEvent = haveACar || bussesAreRunning;
  console.log("I will attend the event:", willAttendEvent);