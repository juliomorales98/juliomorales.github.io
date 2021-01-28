import React from "react";
import "./project.css";

const project = (props) => {
  let description = ["Description","Descripción"];
  let images = ["Images","Imágenes"];
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <h4>{description[props.language]}:</h4>
      {props.description}
      <h4>{images[props.language]}</h4>
      {props.img}
      <div id="myModal" className="modal">
        <span className="close" onClick={CloseMaximize}>
            x
        </span>
        <img className="modal-content" id="imgMaximized" alt='' />
        <div id="caption"></div>
      </div>
    </div>
  );
};

export default project;
function CloseMaximize() {
  document.getElementById("myModal").style.display = "none";
}
