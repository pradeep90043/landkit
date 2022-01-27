import React, { useEffect } from "react";

function SelectWidget(props) {
  const color = props.background;
  useEffect(()=>props.setBackground(props.color||props.size),[color])
  return (
    <div>
      <p
        className="widgets"
        onClick={props.setBackground(props.background)}
        style={{ backgroundColor: { color } }}
      >
        {props.color || props.size}
      </p>
    </div>
  );
}

export default SelectWidget;
