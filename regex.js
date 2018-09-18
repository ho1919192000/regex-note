/*Regular Expressions: Using the Test Method*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Returns true

/*Regular Expressions: Match Literal Strings*/
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false

/*Regular Expressions: Match a Literal String with Different Possibilities*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

/*Regular Expressions: Ignore Case While Matching*/
//You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // Change this line
let result = fccRegex.test(myString);

/*Regular Expressions: Extract Matches*/
//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line