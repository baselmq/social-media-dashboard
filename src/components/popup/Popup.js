import React from "react";
import { PathIcons } from "../../util/PathIcons";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="header_popup d-flex justify-content-between pb-3">
          <span className="fs-5 d-flex align-items-center">{props.title}</span>
          <button
            className="btn-close btn__close"
            onClick={() => props.setTrigger(false)}
            aria-label="Close"
          ></button>
        </div>

        <div className="pt-3">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
