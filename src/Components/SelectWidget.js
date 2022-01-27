import React, { useEffect } from "react";

function SelectWidget(props) {
  const color = props.background;
  return (
    <div>
      <p
        className="widgets"
        onClick={props.setBackground(props.data)}
        style={{backgroundClor : props.data === props.background ? "black" : "" } } 
      >
        {props.data }
      </p>
    </div>
  );
}

export default SelectWidget;
