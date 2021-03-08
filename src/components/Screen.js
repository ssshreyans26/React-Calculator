import React from "react";

// eslint-disable-next-line
export default ({ input }) => {
  return (
    <div className="screen">
      <div>{(input != null && input.length === 0) ? "0" : input}</div>
    </div>
  );
};