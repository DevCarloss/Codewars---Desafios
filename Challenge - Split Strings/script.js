// Challenge - Split Strings


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
    var list = str.match(/.{1,2}/g).map(function (array) {
      switch(array.length % 2){
          case 1 :
            return array + '_'
            break
          default :
            return array
      }
    })
    return console.log(list)
  }
  
  solution('abcdefg')