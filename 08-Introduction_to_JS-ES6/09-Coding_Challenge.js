/**
 * Changing String Casing
 *
 */

// 1. Create a var that stores the name user enters via prompt
var yourName = prompt("whats is your name");

// 2. Capitalize the first letter of their name
// a. isolate the first character
var firstChar = yourName.slice(0, 1);
// b. Turn the first character to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

// c. Isolate the rest of the name
var restOfName = yourName.slice(1, yourName.length);
// d. Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();
// e. concatenate the first char with the rest of the char
var capitalizedName = upperCaseFirstChar + restOfName;

// 3. We use the capitalized version of their name to greet them using alert

alert("Hello, " + capitalizedName);
