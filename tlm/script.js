// function reverseSentence(string){
//     var words = string.split(' ');
//     var reversedWords = [];
//     for(var i = 0; i < words.length; i ++){
//       reversedWords.push(words[i].split('').reverse().join(''));
//     }  
//     return reversedWords.join(' ');
//  }
 
//  console.log(reverseSentence('Hello Indiana Class!'));

function wordsReverser(string){
    return string.split("").reverse().join("").split(" ").reverse().join(" ")  
    }
    
    console.log(wordsReverser('Hello Indiana Class!'));