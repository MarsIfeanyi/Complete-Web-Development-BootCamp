/**
 * The UI that somebody is looking at your website sees is a function of the state of your app.
 * UI = f(State), thus UI changing are reflecting the change in state.
 *
 * Declarative Programming: We declaring when we are writing our code how our UI should look under different conditions depending upon the state
 */

import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
