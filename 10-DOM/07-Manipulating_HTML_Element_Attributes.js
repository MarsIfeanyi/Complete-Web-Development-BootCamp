/**
 * Everything that goes inside the HTML tags other than the tag name are attributes
 */

const listTheAttributes = document.querySelector("a").attributes; //gives a list of all the attributes attached to the HTML element ie anchor tag
console.log(listTheAttributes);

//Retrieving the current value of the attribute
const getTheAttribute = document.querySelector("a").getAttribute("href");
console.log(getTheAttribute);

//changing the attribute
let setTheAttribute = document
  .querySelector("a")
  .setAttribute("href", "https://www.linkedin.com/in/marcellus-ifeanyi");
// Hint:setAttribute takes two parameters the first one is what you want to change and the 2nd value what you are changing it to
console.log(setTheAttribute);
