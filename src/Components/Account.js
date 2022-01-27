import React, { useState } from "react";
import SelectWidget from "./SelectWidget";

const Account = () => {
    const [background, setBackground] = useState()
  return (
    <div className=" mx-5 " >
      <h1>The account page</h1>
      <form className="my-5" >
        <h1>Select Tent</h1>
        <div className="sections">
          <h4>Color</h4>
          <div className="widgetPiece"> 
            <SelectWidget color="Red" background={background} setBackground={setBackground} />
            <SelectWidget color="Blue" background={background} setBackground={setBackground} />
            <SelectWidget color="Green" background={background} setBackground={setBackground} />
          </div>
        </div>
        <div className="sections">
          <h4>Make</h4>
          <div className="widgetPiece" >
            <SelectWidget size = "small" background={background} setBackground={setBackground} />
            <SelectWidget size = "medium"  background={background} setBackground={setBackground}/>
            <SelectWidget size = "large" background={background} setBackground={setBackground} />
            <SelectWidget size = "extralarge" background={background} setBackground={setBackground} />
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
