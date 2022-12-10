function isPalindrome(word) {
  // Write your algorithm here
  let inputString = word.toString();

  //Convert to lowerCase
  let lowerCase = inputString.toLowerCase(); 
  //Split the word and put it in an array
  let myArray = lowerCase.split("");

  //Create new array with oposite order
  let reverse = [...myArray]
  reverse = reverse.reverse()

  //Check if they are the same

  //Convert to string
  let finalInput = myArray.join(", ");
  let reversedInput = reverse.join(", ");

  if (finalInput === reversedInput){
    //console.log(true)
    return true;
  }
  else{
    //console.log(false)
    return false;
  }
}

isPalindrome('robot')

/* 
  Add your pseudocode here
*/ //Function takes in 1 argument - a string
//    checks if its a palidrome
// //    returns: true- if it is 
//                false - if it's not

/*
  Add written explanation of your solution here
  1. Accept the input
  2.Convert to lowercase
  3.store in an array
  4.remove any spaces
  5.store the reverse order of the array in another array
  6.check if the new array and the old one are the same
  7. If yes print - TRUE, If no print - FALSE
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
