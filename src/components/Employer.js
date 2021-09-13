import React from "react";
import "../style/Employer.css";
function Employer({ image, name, role }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{role}</p>
      <div className="underLine2"></div>
    </div>
  );
}

export default Employer;
