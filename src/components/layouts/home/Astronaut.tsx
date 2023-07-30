import React from "react";

const Astronaut = () => {
  return (
    <div className="overflow-hidden flex justify-center pt-24">
    <div className="astronaut">
      <div className="head"></div>
      <div className="arm arm-left"></div>
      <div className="arm arm-right"></div>
      <div className="body">
        <div className="panel"></div>
      </div>
      <div className="leg leg-left"></div>
      <div className="leg leg-right"></div>
      <div className="schoolbag"></div>
    </div>
    </div>
  );
};

export default Astronaut;
