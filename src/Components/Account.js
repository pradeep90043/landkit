import React, { useState } from "react";
import SelectWidget from "./SelectWidget";

const Account = () => {
  const [selectColored, setSelectColored] = useState();
  const [selectMake, setselectMake] = useState();
  const [name, setName] = useState();
  const [showResult, setShowResult] = useState(false);

  const colorsArr = ["red", "green", "blue"];
  const makeArr = ["small", "medium", "large", "extralarge"];
  //   const color =
  const SubmitHandler = (e) => {
    e.preventDefault();
    setShowResult(true);
  };
  return (
    <div className=" mx-5 ">
      <h1>The account page</h1>
      <form className="my-5" onSubmit={SubmitHandler}>
        <h1>Select Tent</h1>
        <div className="sections">
          <h4>Color</h4>

          <div className="widgetPiece">
            {colorsArr.map((color) => {
              return (
                <div onClick={() => setSelectColored(color)}>
                  <SelectWidget data={color} selectColored={selectColored} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="sections">
          <h4>Make</h4>
          <div className="widgetPiece">
            {makeArr.map((make) => {
              return (
                <div onClick={() => setselectMake(make)}>
                  <SelectWidget data={make} selectColored={selectMake} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="sections">
          <h4>Name</h4>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <button className="btn btn-dark text-white px-5 my-5">Submit</button>
      </form>
      { showResult && <div className="m-5">
        <h4>name:{name}</h4>
        <h4>Color:{selectColored}</h4>
        <h4>Make:{selectMake}</h4>
      </div>}
    </div>
  );
};

export default Account;
