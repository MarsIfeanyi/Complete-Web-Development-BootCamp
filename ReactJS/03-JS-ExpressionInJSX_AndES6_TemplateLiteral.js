/**
 *
 * Hint: You use {} bracket to write JS Expressions... You can add any JS expression in between the curl braces but you can't write JS statements inside the curl braces.
 *
 * Hint: The difference between an expression and statement is that an expression will be evaluated to a value
 */

import React from "react";
import ReactDOM from "react-dom";

const fName = "Mars";
const lName = "Ifeanyi";
const num = 100;

ReactDOM.render(
  <div>
    {/* <h1>
      Hello {fName} {lName}!
    </h1> */}

    <h1>Hello {fName + " " + lName}!</h1>

    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
