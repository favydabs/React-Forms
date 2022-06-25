import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  //const [isMousedOver, setMouseOver] = (false);

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }
  function handleClick() {
setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        //style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        //onMouseOver={handleMouseOver}
        //onMouseOut={handleMouseOut}
      >
        Submit</button>
    </div>
  );
}

export default App;
