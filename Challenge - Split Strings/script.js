// Challenge - Split Strings


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

let letters = [
    'ab',
    'cd',
    'ef',
    'ghi'
]

letters.forEach((item) => {
    switch(item.length % 2){
        case 0:
            console.log(item)
            break
        default :
            console.log(item + '_')
    }
})