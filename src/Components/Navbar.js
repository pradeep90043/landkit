import React from "react";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 ">
        <div className="container-fluid">
         <Link to="/" className="navbar-brand text-primary"  > 
        Landkit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
               <Link to="/landings" className="nav-link" > 
                  Landings
                </Link>
              </li>
              <li className="nav-item">
               <Link to="/pages" className="nav-link" > 
                  pages
                </Link>
              </li>
              <li className="nav-item">
               <Link to="/account" className="nav-link" > 
                  Account
                </Link>
              </li>
              <li className="nav-item">
                
               <Link to="/documentation" className="nav-link" > 
                  Documentation
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary" >Buy Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
