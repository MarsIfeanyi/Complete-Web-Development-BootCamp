// document.getElementsByTagName, Allows you to select elements based on the HTML Tag name
const tagName = document.getElementsByTagName("li");
console.log(tagName);

const thirdListItem = (document.getElementsByTagName("li")[2].style.color =
  "blue");
console.log(thirdListItem);

const lengthOfList = document.getElementsByTagName("li").length;
console.log(lengthOfList);

//document.getElementsByClassName, Allows you to select  element based on the Class Name

const Button = document.getElementsByClassName("btn");
console.log(Button);
const lengthBtn = document.getElementsByClassName.length;
console.log(lengthBtn);
// const buttonColor = (document.getElementsByClassName("btn")[2].style.color =
//   "yellow");
