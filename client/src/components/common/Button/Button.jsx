import React from "react";

export default function Button({ text, handleButtonClick }) {
  return (
    <button
      onClick={() => {
        console.log("click");
        handleButtonClick();
      }}>
      {text}
    </button>
  );
}
