import React, { useState } from "react";
import "./styles.css";

var output = "";

var fonts = [
  "cursive",
  "Courier",
  "serif",
  "Brush Script MT",
  "fantasy",
  "monospace",
  "sans-serif"
];
export default function App() {
  var [input, setinput] = useState("");

  function inputhandler(event) {
    setinput(event.target.value);
  }

  return (
    <div className="App">
      <h2 style={{ backgroundColor: "wheat" }}>Refont</h2>

      <input
        id="input"
        onChange={inputhandler}
        placeholder="Put you text here and get awesome fonts!"
      ></input>

      {fonts.map(function (font) {
        return (
          <h1 key={font} id="res-disp" style={{ fontFamily: font }}>
            {input}
          </h1>
        );
      })}
    </div>
  );
}
