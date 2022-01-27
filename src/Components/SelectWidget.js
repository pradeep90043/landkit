import React, { useEffect } from "react";

function SelectWidget({data,selectColored}) {
//   const color = props.background;
  return (
    <div>
      <p
        className= { selectColored ===data ? "widgets widgetPieceColor" : "widgets"}
      >
        {data }
      </p>
    </div>
  );
}

export default SelectWidget;
