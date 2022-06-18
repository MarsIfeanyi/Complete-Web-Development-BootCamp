$("h1").addClass("big-title");

// $("button").on("click", function () {
//   $("h1").hide();
// });

// $("button").on("click", function () {
//   $("h1").show();
// });

// $("button").on("click", function () {
//   $("h1").toggle();
// });

// $("button").on("click", function () {
//   $("h1").fadeIn();
// });

// $("button").on("click", function () {
//   $("h1").fadeOut();
// });

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//   $("h1").slideDown();
// });

// $("button").on("click", function () {
//   $("h1").slideUp();
// });

// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

//Hint: You can only use animate on css property that has a numeric value...Make sure that it is a number value

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

// $("button").on("click", function () {
//   $("h1").animate({ color: red });
// }); //will not work because it is not a numeric value

//chaining methods
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
