//Code without JQuery
for (let i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}

//With JQuery...

$("h1").click(function () {
  $("h1").css("color", "purple");
});

//Detecting Keypress and Keyboard events

$("input").keydown(function (event) {
  console.log(event.key);
});

//Changing the text of h1 on keypress
$("input").keydown(function (event) {
  $("h1").text(event.key);
});

//Another easier way of adding event listeners...it takes two parameters the first one is the event that you are looking to listen for and the 2nd parameter is the callback function

$("h2").on("mouseover", function () {
  $("h2").css("color", "blue");
});
