import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Heading></Heading>

      <Note></Note>

      <Footer></Footer>
    </div>
  );
}
export default App;

// Hint: Whenever you are applying a HTML attribute such as class name or styles or onClick, they SHOULD NOT go into your custom components ie the components you created instead that they need to be applied to a HTML element such as div
