$("h2").css("color", "blue");

$("button");

//Getting the property values
const getTheFontSize = $("h1").css("font-size");
console.log(getTheFontSize);

const getTheColor = $("h1").css("color");
console.log(getTheColor);

//Hint: If you have two properties inside the parentheses of the css, then you are Setting the value in it, but if you have only one property then you are getting the value in it...

//Hint: Because of Separation of concerns adding styles directly to our JS file is not a good practice. All styles should be written in the styles. css

$("h1").addClass("big-title");

//Adding Multiple styles
$("h1").addClass("big-title margin-50");
