import React from "react";

const Count = (props) => {
  console.log(props.text+' Running');
  return (
    <div className="count" style={{ margin: "10px" }}>
      <h2>
        {props.text} - {props.value}
      </h2>
    </div>
  );
};

export default React.memo(Count);
