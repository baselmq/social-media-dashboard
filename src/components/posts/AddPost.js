import React from "react";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import "../../css/index.css";
import { MyIcons } from "../../util/MyIcons";
function AddPost() {
  const data = userData[0];
  return (
    <div className="row container_add_post">
      <div className="header_add_post d-flex gap-3">
        <ImageUser image={data.image} width={45} />
        <div className="btn-add_post d-flex align-items-center ps-3">
          Basel? ,mind your on WhatIs
        </div>
      </div>
      <div className="bottom_add_post d-flex justify-content-evenly mt-3">
        <div className="add_photo d-flex align-align-items-start gap-2">
          {MyIcons.image} photo/video
        </div>
        <div className="feeling  d-flex align-align-items-start gap-2">
          {MyIcons.feeling} feeling/activity
        </div>
      </div>
    </div>
  );
}

export default AddPost;
