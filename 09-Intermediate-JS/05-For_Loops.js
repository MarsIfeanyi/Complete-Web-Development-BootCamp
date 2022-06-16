/**
 * For loops works same as while loop but instead of testing a condition, we are specifying the number of times we want the loop to run.
 *
 * For (start, end, change){
 *
 * DO Something
 * }
 *
 * Hint: The difference between while and for loop is that:
 * While checks for the "State" and for loop tries to "Iterate"
 */

//Modifying the FizzBuzz using for loop

var output = [];
// here we need a container to keep track of the number counts

function fizzBuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }

  console.log(output);
}
