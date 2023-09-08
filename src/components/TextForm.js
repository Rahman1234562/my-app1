import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLuClick = () => {
    // console.log("upper was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("upper was clicked" + text);
    let newText = ' ';
    setText(newText);
  };


  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("");
  

  return (
    <div>

      <div className="container mb-3"  style={{color: props.mode=== "dark" ? "white" : "#042743"}}>
      <h1>{props.heading}</h1>
        <label htmlFor="textBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode=== "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "#042743"}}
          id="textBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
          tap to upperCase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLuClick}>
          tap to lowerCase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>
        clear text
        </button>
         
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
        copy text
        </button>

        <button className="btn btn-primary my-2 mx-1" onClick={removeExtraSpace}>
       remove Extra space
        </button>
      </div>
      <div className="container" style={{color: props.mode=== "dark" ? "white" : "#042743"}}>
        <h2>your text Proview</h2>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <p>{text.split( " ").length -1} space count</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter your text in the text box above to preview your text"}</p>
      </div>
    </div>
  );
}
