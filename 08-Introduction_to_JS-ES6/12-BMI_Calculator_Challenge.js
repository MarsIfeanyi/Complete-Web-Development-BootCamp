/**
 * Create a BMI Calculator using JS
 *
 * BMI = weight/height*height
 */

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}

bmiCalculator(400, 20);
