function isOldEnoughToDrink(age) {
    // your code here
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
  }

function isOldEnoughToDrive(age) {
// your code here
if (age >= 16) {
    return true;
} else {
    return false;
}
}

function isOldEnoughToVote(age) {
// your code here
if (age >= 18) {
    return true;
} else {
    return false;
}
}

function isOldEnoughToDrinkAndDrive(age) {
// your code here
if (age >= 21) {
    return false;
} else {
    return false;
}
}

function getProperty(obj, key) {
// your code here
return obj[key];
}

function addProperty(obj, key) {
// your code here
obj[key] = true;
}

function removeProperty(obj, key) {
// your code here
obj[key] = undefined;
}

function getFullName(firstName, lastName) {
// your code here
return firstName + " " + lastName;
}

function getLengthOfWord(word) {
// your code here
return word.length;
}

function getLengthOfTwoWords(word1, word2) {
// your code here
return word1.length + word2.length;
}

function checkAge(name, age) {
// your code here
if (age < 21) {
    return "Go home, " + name + '!';
} else {
    return "Welcome, " + name + '!';
}
}

function isGreaterThan10(num) {
    // your code here
    if (num > 10) {
        return true;
    } else {
        return false;
    }
  }

function isLessThan30(num) {
    // your code here
    if (num < 30) {
        return true;
    } else {
        return false;
    }
  }

function equalsTen(num) {
    // your code here
    if (num === 10) {
        return true;
    } else {
        return false;
    }
  }