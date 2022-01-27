import React from "react";
import SelectWidget from "./SelectWidget";

const Account = () => {
  return (
    <div>
      <h1>The account page</h1>
      <form>
        <h1>Select Tent</h1>
        <div className="sections">
          <h4>Color</h4>
          <div className="widgetPiece"> 
            <SelectWidget color="Red" />
            <SelectWidget color="Blue"  />
            <SelectWidget color="Green" />
          </div>
        </div>
        <div className="sections">
          <h4>Make</h4>
          <div className="widgetPiece" >
            <SelectWidget size = "small" />
            <SelectWidget size = "medium" />
            <SelectWidget size = "large" />
            <SelectWidget size = "extralarge" />
          </div>
        </div>

        <div className="sections">
          <h4>Name</h4>
          <input type="text" />
        </div>

        <button className="btn btn-dark text-white px-5">Submit</button>
      </form>
    </div>
  );
};

export default Account;
