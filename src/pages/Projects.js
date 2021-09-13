import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Projects.css";
function Projects() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [dataa, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="posts">
      {dataa.map((dat) => {
        return (
          <div key={dat.id}>
            <h1 className="title">title:- {dat.title}</h1>
            <h3 style={{ marginBottom: "50px" }}>body:- {dat.title}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
