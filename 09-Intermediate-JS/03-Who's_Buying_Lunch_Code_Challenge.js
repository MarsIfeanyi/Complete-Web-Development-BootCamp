/**
 *  Write a function which selects a random name from a list of names. The person selected will have to pay for everybody's food bill
 */

var names = ["mars", "kelly", "mike", "davis", "paul"];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + "is going to buy lunch today!";
}
