// Challenge Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

const names = ["Alex", "Jacob", "Mark"]

function who_likes_it(){
    switch(names.length){
        case 0:
            return console.log("No One Like This")
            break
        case 1:
            return console.log(names[0] + ' Likes This')
            break
        case 2:
            return console.log(names[0] + ' and ' + names[1] + ' Like This')
            break
        case 3:
            return console.log(names[0] + ', ' + names[1] + ' and ' + names[2] +  ' Like This')
            break
        default:
            return console.log(names[0] + ', ' + names[1] + ' and ' + parseInt(names.length - 2) +  ' Others Like This')
    }
}

who_likes_it()

