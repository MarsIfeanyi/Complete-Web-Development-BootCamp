/**
 * CHANGING THE TEXT OF HTML ELEMENT
 *
 * we can use the innerHTML or textContent to change the text inside the selected HTML element, however both does do same thing. The innerHTML gives you the HTML that's in between the element tags, including other HTML tags but the textContent only gives you just the content and will ignore other HTML tags
 */

const h2InnerHTMLText = (document.querySelector("h2").innerHTML =
  "FullStack Blockchain Developer");
console.log(h2InnerHTMLText);

const h2TextContentText = (document.querySelector("h2").textContent =
  "FullStack Blockchain Developer");
console.log(h2TextContentText);

document.querySelector("h1").innerHTML = "<em>Front-End Engineer</em>";
