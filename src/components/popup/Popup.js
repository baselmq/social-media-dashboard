import React from "react";
import "../../css/index.css";
import { PathIcons } from "../../util/PathIcons";
const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <span className="close-btn" onClick={() => props.setTrigger(false)}>
          {PathIcons.close}
        </span>
       <span className="fs-3 mt-5 ms-5 ps-4">{props.title}</span>
        <div className="popup-content">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
