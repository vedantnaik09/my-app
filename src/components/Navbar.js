import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const circle = {
    "width": "15px",
    "height": "15px",
    "padding": "6px 0px",
    "borderRadius": "15px",
    "fontSize": "8px",
    "textAlign": "center",
  };
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'red'}} onClick={()=>props.changeColor("#5a0122")} >
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'blue'}} onClick={()=>props.changeColor("#1b1a34")} >
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'green'}} onClick={()=>props.changeColor("#031603")}>
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'cyan'}} onClick={()=>props.changeColor("#16403e")}>
                
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'white'}} onClick={()=>{props.changeColor("white")
                props.setMode("light")}}>
                  
                </button>
              </div>             
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProp = { title: "DefaulTitle", aboutText: "Default About" };
