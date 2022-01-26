import React,{useState} from "react";


export default function TextForm(props) {
  const [text,setText]=useState('');
  const handleOnChange=(event)=>{
      setText(event.target.value)
     
  }
  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
}
const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
}
const handleClearText = ()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!","success");
}
const handleCopy=()=>{
  var text=document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to clipboard!","success");
}
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!","success");
}
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#030d3a" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#030d3a",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extraspaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#030d3a" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length === 1 ? 0 : text.split(" ").length - 1} words
          and {text.length === 0 ? 0 : text.length - 1} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text  above to preview"}
        </p>
      </div>
    </>
  );
}
