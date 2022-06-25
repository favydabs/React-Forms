import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  //const [isMousedOver, setMouseOver] = (false);

  function handleChange(event) {
    //console.log(event.target.value);
    setName(event.target.value);
  }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }
  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
        //style={{ backgroundColor: isMousedOver ? "black" : "white" }}

        //onMouseOver={handleMouseOver}
        //onMouseOut={handleMouseOut}
        >
          Submit</button>
      </form>
    </div>
  );
}

export default App;
