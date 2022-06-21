//const React = require('react');
//const ReactDom = require('react-dom');

import React from "react";
import ReactDom from "react-dom";

/**
The render function takes 3 inputs.
1. What to show
2. Where to show it.
3. callback function to tell us when the render function is completed (Optional )

Hint: The render method can only take in a single HTML element, thus if you have more than one 
HTML element then embeded it into a div, because anything that goes inside a div comes out as a single HTML element, while the rest becomes its children
*/

ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <p>Front-End Engineer</p>
  </div>,

  document.getElementById("root")
); //Here we used the render method to display h1 inside the root. The root is located inside the index.html
