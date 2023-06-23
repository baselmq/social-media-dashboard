import React, { useState } from "react";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import "../../css/index.css";
import { PathIcons } from "../../util/PathIcons";
import Popup from "../popup/Popup";
import CreatePost from "./components/CreatePost";
function AddPost() {
  const data = userData[0];
  const [buttonPopup, setButtonPopup] = useState(false);
  // buttonPopup
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");
  return (
    <div className="row container_add_post">
      <div className="header_add_post d-flex gap-3">
        <ImageUser image={data.image} width={45} />
        <div
          className="btn-add_post d-flex align-items-center ps-3"
          onClick={() => setButtonPopup(true)}
        >
          Basel? ,mind your on WhatIs
        </div>
      </div>
      <div className="bottom_add_post d-flex justify-content-evenly mt-3">
        <div
          className="add_photo d-flex align-align-items-start gap-2"
          onClick={() => setButtonPopup(true)}
        >
          {PathIcons.image} photo/video
        </div>
        <div className="feeling d-flex align-align-items-start gap-2">
          {PathIcons.feeling} feeling/activity
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        title={"Create Post"}
      >
        <CreatePost />
      </Popup>
    </div>
  );
}

export default AddPost;
