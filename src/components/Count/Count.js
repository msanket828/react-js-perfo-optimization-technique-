import React from "react";

const Count = (props) => {
  return (
    <div className="count" style={{ margin: "10px" }}>
      <h2>
        {props.text} - {props.value}
      </h2>
    </div>
  );
};

export default Count;
