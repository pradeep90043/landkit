import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="description">
          <h1>
            Welcome to <span className=" text-primary">Landkit</span> . Develop
            anything.
          </h1>
          <p style={{color:"#869ab8"}} >
            Build a beautiful, modern website with flexible Bootstrap components
            built from scratch.
          </p>
          <button className=" btn btn-primary m-2">View all pages <AiOutlineArrowRight/> </button>
          <button className="btn btn-light">Documentation</button>
        </div>
        <div className="image">
          <img
            src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
            alt="landkit"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
