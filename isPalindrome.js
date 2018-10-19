let givenString = process.argv[2];
let lengthOfString = givenString.length;
let reverseString ="";
for(let characterIndex=lengthOfString-1; characterIndex >= 0 ; characterIndex--) {
  reverseString = reverseString+""+givenString[characterIndex];
}

if(givenString == reverseString) {
console.log("String is palindrome");
} else {
  console.log("not palindrome");
}

