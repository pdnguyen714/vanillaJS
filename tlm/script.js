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

    function btnSearch(btnName, res){
        mongoose.connect('mongodb://localhost/Recipes', function(err, db){
            db.collection('Recipes').find({'recipe.category':btnName}).sort({_id:-1}).toArray(function(err,doc){
                if(doc.length>0){
                    let createdBy= [];
                    let recipeInfo = [];
                    doc.forEach(recipeArr => {
                        createdBy.push(recipeArr.createdBy);
                        recipeArr.recipe.forEach(info => {
                            if(info.category === btnName){
                                recipeInfo.push(info);
                            }
                        });
                    });
                    res.render('btnSearch',{createdBy, recipeInfo});
                }else{
                    let zero ="Sorry we don't have any recipes for this category yet! Feel free to add your own!";
                    res.render('index',{zero});
                }
                db.close()
            });
        });
    }    