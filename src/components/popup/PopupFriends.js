import React from "react";
import "../../css/index.css";
import { PathIcons } from "../../util/PathIcons";
const PopupFriends = (props) => {
  return props.trigger ? (
    <div className="popup_friends">
      <div className="popup_friends_inner">
        <span className="close_btn_friends" onClick={() => props.setTrigger(false)}>
          {PathIcons.close}
        </span>
       <span className="fs-3 mt-5 ms-5 ps-4">{props.title}</span>
        <div className="popup_friends_content">
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupFriends;
