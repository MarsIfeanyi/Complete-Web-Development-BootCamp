import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function creatNote(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     ></Note>
//   );
// } //Converting this function to an arrow function and using it in the map method below

function App() {
  return (
    <div>
      <Heading></Heading>

      {/* <Note title="Title of Note" content="Content of Note"></Note> */}

      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        ></Note>
      ))}

      <Footer></Footer>
    </div>
  );
}
export default App;

// Hint: Whenever you are applying a HTML attribute such as class name or styles or onClick, they SHOULD NOT go into your custom components ie the components you created instead that they need to be applied to a HTML element such as div
