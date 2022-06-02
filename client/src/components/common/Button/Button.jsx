import React from "react";

export default function Button({ text, handleButtonClick }) {
  return (
    <button
      onClick={() => {
        handleButtonClick();
      }}>
      {text}
    </button>
  );
}
