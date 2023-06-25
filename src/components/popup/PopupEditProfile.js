import React from "react";

const PopupEditProfile = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="d-flex justify-content-between pb-3">
          <span className="fs-5 d-flex align-items-center">{props.title}</span>
          <button
            className="btn-close custom_btn-close"
            onClick={() => props.setTrigger(false)}
            aria-label="Close"
          ></button>
        </div>

        <div className="pt-1">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupEditProfile;
