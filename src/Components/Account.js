import React, { useState } from "react";
import SelectWidget from "./SelectWidget";

const Account = () => {
    const [background, setBackground] = useState()
    const [name, setName] = useState()
    const SubmitHandler = (e) => {
        e.preventDefault()


    }
  return (
    <div className=" mx-5 " >
      <h1>The account page</h1>
      <form className="my-5" onSubmit={SubmitHandler} >
        <h1>Select Tent</h1>
        <div className="sections">
          <h4>Color</h4>
          <div className="widgetPiece"> 
            <SelectWidget data="Red" background={background} setBackground={setBackground} />
            <SelectWidget data="Blue" background={background} setBackground={setBackground} />
            <SelectWidget data="Green" background={background} setBackground={setBackground} />
          </div>
        </div>
        <div className="sections">
          <h4>Make</h4>
          <div className="widgetPiece" >
            <SelectWidget data = "small" background={background} setBackground={setBackground} />
            <SelectWidget data = "medium"  background={background} setBackground={setBackground}/>
            <SelectWidget data = "large" background={background} setBackground={setBackground} />
            <SelectWidget data = "extralarge" background={background} setBackground={setBackground} />
          </div>
        </div>

        <div className="sections">
          <h4>Name</h4>
          <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>

        <button className="btn btn-dark text-white px-5">Submit</button>
      </form>
      <div className="m-5">
          <h4>name:{name}</h4>
          <h4>Color:{name}</h4>
          <h4>Make:{name}</h4>

      </div>
    </div>
  );
};

export default Account;
