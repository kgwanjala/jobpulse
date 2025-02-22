import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  function resetField() {
    setText("hello");
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={resetField}>Reset</button>
    </>
  );
}
