import React from "react";
import "../../css/index.css";
const Buttons = (props) => {
  return (
    <button className="btnWithIcon" onClick={props.onPress}>
      {props.icon} {props.text}
    </button>
  );
};

export default Buttons;
