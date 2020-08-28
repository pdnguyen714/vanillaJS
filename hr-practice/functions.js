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

  function isLessThan(num1, num2) {
    // your code here
    if (num1 > num2) {
        return true;
    } else {
        return false;
    }
  }

  function isGreaterThan(num1, num2) {
    // your code here
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
  }

  function isEqualTo(num1, num2) {
    // your code here
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
  }

  function isEven(num) {
    // your code here
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
  }

  function isOdd(num) {
    // your code here
    if (num % 2 === 1) {
        return true;
    } else {
        return false;
    }
  }

  function isSameLength(word1, word2) {
    // your code here  
    if (word1.length === word2.length) {
        return true;
    } else {
        return false;
    }
  }

  function areBothOdd(num1, num2) {
    // your code here
    if (num1 % 2 === 1 && num2 % 2 === 1) {
        return true;
    } else {
        return false;
    }
  }

  function isEitherEven(num1, num2) {
    // your code here
    if (num1 % 2 === 0 || num2 % 2 === 0) {
        return true;
    } else {
        return false;
    }
  }

  function isOddLength(word) {
    // your code here
    if (word.length % 2 === 1) {
        return true;
    } else {
        return false;
    }
  }

  function isEvenLength(word) {
    // your code here
    if (word.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
  }

  function isEvenAndGreaterThanTen(num) {
    // your code here
    if (num % 2 === 0 && num > 10) {
        return true;
    } else {
        return false;
    }
  }

  function average(num1, num2) {
    // your code here
    var numArr = [num1, num2];
    var total = num1 + num2;
    return total / numArr.length;
  }

  function computeAreaOfATriangle(base, height) {
    // your code here
    return base * height / 2;
  }

  function cube(num) {
    // your code here
    return num * num * num;
  }