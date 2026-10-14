import { useState } from "react";

export function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [changeColor, setChangeColor] = useState(false);

  function handleClick() {
    setHeadingText("Submited");
  }
  function mouseEnter() {
    setChangeColor(true);
  }

  function mouseLeave() {
    setChangeColor(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{
          backgroundColor: changeColor ? "purple" : "white",
          color: changeColor ? "white" : "cadetblue",
        }}
      >
        Submit
      </button>
    </div>
  );
}
