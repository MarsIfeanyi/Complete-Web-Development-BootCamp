/**
 *  The more that you to scroll and the longer a single file is, the harder it is to understand the cose that's in it.
 *
 * Components allows us to split up a large file or a complex web structure into smaller components.And we get the added benefit of reusing each of these components when we need the same functionality.
 *
 * Hint: WE use functions to create custom component...The naming for the component is capitalized for the first letter
 *
 * Inside your source folder(src) create Heading.JSX
 */

//Creating custom component
function Heading() {
  return <h1> My Favorite Foods</h1>;
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./src06/components/App";

ReactDOM.render(<App />, document.getElementById("root"));
