import React from "react";
import "../style/Services.css";
function Services({ text, image, title }) {
  return (
    <div className="containerr">
      <div className="leftSidee">
        <img src={image} alt="Sora" className="imageContainer" />
      </div>
      <div className="rightSidee">
        <h1 className="title">{title}</h1>
        <p>{text}</p>
      </div>
      <div className="underLine3"></div>
    </div>
  );
}

export default Services;
