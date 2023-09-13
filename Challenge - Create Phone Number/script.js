// Challenge Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    if(numbers  <= 10){
      const list = [...Array(numbers).keys()].slice(1)
      list.push(0)
      let mask = "(XXX) XXX-XXXX"
      list.forEach(item => {
        mask = mask.replace("X",item)
      })
      return console.log("Phone Generated: " + mask)
    }
    else {
      return console.log("Number has to be greater than 10")
    }
  }
  
createPhoneNumber(10)