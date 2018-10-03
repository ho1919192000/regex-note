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

/*Regular Expressions: Find More Than the First Match*/
//g is for global search. Meaning it'll match all occurrences.
//You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

/*Regular Expressions: Match Anything with Wildcard Period*/
//You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
let words = exampleStr.match(unRegex);
console.log(words); //fun

/*Regular Expressions: Match Single Character with Multiple Possibilities*/
//For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

/*Regular Expressions: Match Letters of the Alphabet*/
//Inside a character set, you can define a range of characters to match using a hyphen character: -.
//For example, to match lowercase letters a through e you would use [a-e].
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

/*Regular Expressions: Match Numbers and Letters of the Alphabet*/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*Regular Expressions: Match Single Characters Not Specified*/
//To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/*Regular Expressions: Match Characters that Occur One or More Times*/
//You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);//["ss", "ss"]

/*Regular Expressions: Match Characters that Occur Zero or More Times*/
//There's also an option that matches characters that occur zero or more times.
//The character to do this is the asterisk or star: *.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

/*Regular Expressions: Find Characters with Lazy Matching*/
//you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);//<h1>

/*Regular Expressions: Find One or More Criminals in a Hunt*/
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/; // Change this line
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);//["CCC", index: 12, input: "P1P2P3P4P5P6CCCP7P8P9", groups: undefined]

/*Regular Expressions: Match Beginning String Patterns*/
//Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

/*Regular Expressions: Restrict Possible Usernames*/
//1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
//2) Username letters can be lowercase and uppercase.
//3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
let username = "JackOfAllTrades";
let userCheck = /[^\d][\w\w]|[^\d]\d+$/; 
let userCheck2 = /^[\w]{2,}\d*$/;
//{3,}: three or more times for the word character
// Change this line
let result = userCheck.test(userCheck2);

/*Regular Expressions: Specify Exact Number of Matches*/
//For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/
//Change the regex timRegex to match the word "Timber" only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

/*Regular Expressions: Check for All or None*/
//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/*Regular Expressions: Positive and Negative Lookahead*/
//A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

/*Regular Expressions: Match Whitespace*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/*Regular Expressions: Match Non-Whitespace Characters*/
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/*Regular Expressions: Specify Upper and Lower Number of Matches*/
//Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

/*Regular Expressions: Specify Only the Lower Number of Matches*/
//Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

/*Regular Expressions: Reuse Patterns Using Capture Groups*/
//You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
//To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);