import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import main from "../images/home.jpg";
import Employer from "../components/Employer";
import mazen from "../images/mazen.jpg";
import fayez from "../images/fayez.jpg";
import ziad from "../images/ziad.jpg";
import yasser from "../images/yasser.jpg";
import amr from "../images/amr.jpg";
function Home() {
  return (
    <div className="home">
      <div className="header" style={{ backgroundImage: `url(${main})` }}>
        <div className="animation">
          <h1>
            A LEAD CONSTRUCTION COMPANY IN <span> MIDDLE EAST</span>
          </h1>
        </div>
        <Link to="/projects">
          <button>VIEW OUR PROJECTS</button>
        </Link>
      </div>
      <h1 style={{ marginTop: "50px" }}>OUR HEROS</h1>
      <div className="underLine"></div>

      <div className="employersContainer">
        <Employer name="Mazen Fayez" image={mazen} role="FOUNDER" />

        <Employer name="Ziad Hesham" image={ziad} role="CFO" />

        <Employer name="Fayez Ezzat" image={fayez} role="OWNER" />

        <Employer name="Yasser Rabie" image={yasser} role="MARKETING MANAGER" />

        <Employer name="Amr Fayez" image={amr} role="SOFTWARE ENGINEER" />
      </div>
      <Link to="/about">
        <button className="aboutButton">Know more about us</button>
      </Link>
    </div>
  );
}

export default Home;
