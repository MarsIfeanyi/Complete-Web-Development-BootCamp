/**
 *  Properties in react is similar to attributes in html. Props are the custom attributes we create in our react components.
 *
 * Hint:Whenever you are using HTML predetermined attributes, they always have to go into the HTML elements which are in lowercase...
 *
 * React Props is just like you are creating a JS object with key-values pairs and then the whole object gets sent over as the props object and then you can tap into it using dot notation
 */

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
