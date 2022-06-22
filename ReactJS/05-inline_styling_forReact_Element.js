/**
 * The style property here requires a value that is a JS Object.
 *
 * Hint: Why use Inline Styling?... We use it because there are certain cases where you want styles for certain React element to update on the fly.
 *
 * Hint: The value of the css properties inside the JS object has to be a string ie it must be enclosed in single or double quotes
 */

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

//Changing the styles on the fly

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
