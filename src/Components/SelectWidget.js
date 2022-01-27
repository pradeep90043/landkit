import React, { useEffect } from "react";

function SelectWidget({data,selectColored}) {
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
