import React, { useState } from "react";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Button } from "@material-ui/core";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img
            src={logo}
            alt="LOGO"
            style={{ cursor: "pointer" }}
            className="logo"
          />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Button onClick={toggleNavbar}>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
