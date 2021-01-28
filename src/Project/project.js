import React from "react";
import "./project.css";

const project = (props) => {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <h4>Description:</h4>
      {props.description}
      <h4>Images</h4>
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
