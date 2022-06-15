/**
 * Create a function that tells you how many days, weeks and months you have left if you live until 90 years old. It will take your current age as input and console.logs a message with our time left in this format:
 * you have x days, y weeks and z months left.
 * assume there are 365days in a year, 52 weeks in a year and 12 months in a year
 *
 */

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log(
    "You have " +
      days +
      "days," +
      weeks +
      "weeks, and " +
      months +
      "months left"
  );
}

lifeInWeeks(20);
