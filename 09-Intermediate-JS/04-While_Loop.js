/**
 * 
 * while(something is true){

    //Do Something...Thus the code inside this block will continue to run again and again WHILE the condition is true
}
 */

//Modifying the FizzBuzz Challenge

var output = [];
var count = 1; // here we need a container to keep track of the number counts

function fizzBuzz() {
  while (count <= 101) {
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
  }

  console.log(output);
}
