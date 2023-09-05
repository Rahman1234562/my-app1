import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper was clicked" + text);
       let newText = text.toUpperCase();
       setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }
    const[text, setText] = useState("use the text");

  return (
    <div>
       <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="textBox" className="form-label">
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2 " onClick={handleUpClick}>tap to upperCase</button>
      </div>
    </div>
  );
}
