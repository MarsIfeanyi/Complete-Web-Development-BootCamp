/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print " Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
 */

var output = [];
var count = 1; // here we need a container to keep track of the number counts

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;

  console.log(output);
}

// Hint: The order of your if statement matters
