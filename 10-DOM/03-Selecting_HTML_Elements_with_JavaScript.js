// document.getElementsByTagName, Allows you to select elements based on the HTML Tag name
const tagName = document.getElementsByTagName("li");
console.log(tagName);

const thirdListItem = (document.getElementsByTagName("li")[2].style.color =
  "blue");
console.log(thirdListItem);

const lengthOfList = document.getElementsByTagName("li").length;
console.log(lengthOfList);

//document.getElementsByClassName, Allows you to select  element based on the Class Name... Notice the plural ie Elements, thus it produces an array of Elements, Thus to get a particular item you will use the square bracket and the index.

const Button = document.getElementsByClassName("btn");
console.log(Button);
const lengthBtn = document.getElementsByClassName.length;
console.log(lengthBtn);
// const buttonColor = (document.getElementsByClassName("btn")[2].style.color =
//   "yellow");

// document.getElementById... Notice that it is singular ie Element, thus it is unique. Thus only only get back one item instead of an array

document.getElementById("title").innerHTML = "Welcome to my Dev Journey";

//Another method that we can use to select single element is the querySelector method... Hint: in querySelector(), the string you are going to put inside the parentheses is a selector

const bigHeading = document.querySelector("h1"); //selects the h1
console.log(bigHeading);

const headingTitle = document.querySelector("#title"); //Selects the ID
console.log(headingTitle);

//Combining Selectors
const listAnchor = document.querySelector("li a"); //Selects only the anchor tag inside the list items
console.log(listAnchor);

document.querySelector("li.item"); //selecting an elements that has the class of item and is also li element...However here it returns only the first element that matches the selectors, thus if you want to return all the elements then use querySelectorAll
