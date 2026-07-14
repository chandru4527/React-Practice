import React from "react";

export const Child = React.memo(({ handleClick }) => {
  console.log("Child Render");

  return (
    <div>
      <h1>Child Component</h1>

      <button className="border"
        onClick={handleClick}>
        Child Button
      </button>
    </div>
  );
});