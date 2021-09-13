import React from "react";
import "../style/About.css";
import Services from "./Services";
import civil from "../images/about1.jpg";
import two from "../images/about2.jpg";
import three from "../images/about3.jpg";
import four from "../images/about4.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="container">
      <h1 className="headerText">ABOUT US</h1>
      <p className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolores
        quisquam deleniti, asperiores blanditiis fuga provident magni,
        distinctio excepturi fugiat esse dolore recusandae, molestias repellat
        rerum saepe maiores maxime eaque ipsum. Ad perferendis alias, deserunt
        possimus nesciunt repellendus voluptatem omnis fugit neque consequuntur
        architecto, dolor consequatur minus illum, culpa vitae!
      </p>
      <div className="underline"></div>
      <h2
        style={{
          letterSpacing: ".1rem",
          marginBottom: "50px",
        }}
        className="headerText"
      >
        WHAT WE DO?
      </h2>
      <Services
        title="civil engineering"
        image={civil}
        text="industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five  but also the leap into"
      />
      <div className="underline"></div>
      <Services
        title="Design Projects"
        image={two}
        text="industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five  but also the leap into"
      />
      <div className="underline"></div>
      <Services
        title="constructions"
        image={three}
        text="industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five  but also the leap into"
      />
      <div className="underline"></div>
      <Services
        title="architecture"
        image={four}
        text="industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five  but also the leap into"
      />
      <div className="underline"></div>
      <h1 className="headerText" style={{ fontSize: "28px" }}>
        EXCITED TO SEE OUR PROJECTS?
      </h1>
      <h3 className="headerText" style={{ fontSize: "20px" }}>
        HIT THE BUTTON BELOW NOW!
      </h3>
      <Link to="/projects">
        <button className="projectsButton">GO TO PROJECTS</button>
      </Link>
    </div>
  );
}

export default About;
