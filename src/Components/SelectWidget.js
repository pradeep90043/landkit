import React, { useEffect } from "react";

function SelectWidget(props) {
  const color = props.background;
//   useEffect(()=>props.setBackground(props.color||props.size),[color])
  return (
    <div>
      <p
        className="widgets"
        onClick={props.setBackground(color)}
        style={ {backgroundColor :color}}
      >
        {props.data }
      </p>
    </div>
  );
}

export default SelectWidget;
