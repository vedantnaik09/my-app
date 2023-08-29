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
          {/* <a className="navbar-brand" href="#">
            {props.title}
          </a> */}
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
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
              
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li> 
                {/* <a className="nav-link" href="/about">
                  {props.aboutText}
                </a>*/}
              
            </ul>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'red'}} onClick={()=>props.changeColor("hsl(338, 98%, 18%)")} >
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'blue'}} onClick={()=>props.changeColor("hsl(242, 33%, 15%)")} >
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'green'}} onClick={()=>props.changeColor("hsl(120, 76%, 5%)")}>
                  
                </button>
                <button type="button" className="btn btn-primary mx-1" style={{...circle, "backgroundColor":'cyan'}} onClick={()=>props.changeColor("	hsl(177, 49%, 17%)")}>
                
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
