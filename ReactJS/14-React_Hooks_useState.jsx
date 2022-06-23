/**
 * Hint: One of the rules of Using Hooks is that you must use Hooks inside a functional component...
 *
 * useState(), whatever that is inside the parenthesis is our starting state.
 *
 * Hint: The output of useState is an array
 */

import React, { useState } from "react";

function App() {
  //Destructuring
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
