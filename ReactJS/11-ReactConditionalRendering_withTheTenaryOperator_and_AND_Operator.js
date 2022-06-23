/**
 *      The structure of Ternary Operator:
 * CONDITION ? DO IF TRUE : DO IF FALSE.
 *
 * Eg: isCloudy === true ? bringUmbrella() : bringSunscreen()
 *
 * Hint: We can use the Ternary operator to turn JS statement to an Expression
 */

import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
