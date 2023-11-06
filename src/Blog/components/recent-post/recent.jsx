import React from "react";
import "./style.css";
function recent() {
  return (
    <div className="recent-comp">
      <div className="left-recent">
        <p className="title">
          How a visual artist redefines success in graphic design
        </p>

        <p className="date">April 09 2022</p>
      </div>

      <div className="right-recent">
        <img src="/assets/thumbnail-1.png" alt="placehokder" />
      </div>
    </div>
  );
}

export default recent;
