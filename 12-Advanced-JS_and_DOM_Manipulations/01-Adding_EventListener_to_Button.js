/**
 * Hint: AddEventListeners() takes two parameters. the 1st is the Event type you want to listen to and the 2nd is the Listener ie the object which receives the notification when an event of the specified type happens. This must be an object implementing the Eventlistener interface or a JS function
 */

//Selecting only the first button
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

//Using Anonymous function... function that don't have a name

document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked");
});

//Selecting all the buttons and indexing the array
// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[2].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[3].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[4].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[5].addEventListener("click", function () {
//   alert("I got clicked");
// });

// document.querySelectorAll("button")[6].addEventListener("click", function () {
//   alert("I got clicked");
// });

//Selecting all the button elements using for loop and the class

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  });
}
