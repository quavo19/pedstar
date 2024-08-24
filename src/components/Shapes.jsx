import React from "react";
import "./Shapes.css";

const Shapes = () => {
  return (
    <div className="shape-container">
      {[...Array(20)].map((_, index) => (
        <div key={index} className={`big-shape shape-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default Shapes;

