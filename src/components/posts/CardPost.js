import React from "react";
import "../../css/index.css";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { PathIcons } from "../../util/PathIcons";
import InputField from "../inputs/InputField";
const CardPost = ({ id }) => {
  const data = userData[id];
  return (
    <div className="row container_post">
      <div className="col-12 p-4">
        <div className="header_post d-flex align-items-center gap-3">
          <ImageUser image={data.image} width={60} />
          <div>
            <span className="user_name_post d-block">{data.firstName}</span>
            <span className="time_post d-block">{`${15} mins ago`}</span>
          </div>
          <span className="menu_dots_post">{PathIcons.menuDots}</span>
        </div>
        <div className="body_post py-4">
          <img src={data.imageCover} alt="image_post" />
          <p className="pt-3 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum
            possimus voluptatibus a quod. Labore illum doloremque, quos ab
            reprehenderit, perferendis consectetur laudantium soluta nemo sequi
            eaque magnam laboriosam reiciendis!
          </p>
        </div>
        <div className="footer_post">
          <div className="d-flex gap-4">
            <div className="like-post d-flex align-items-center gap-2">
              {PathIcons.like}
              {` ${150}K`}
            </div>
            <div className="comment-post d-flex align-items-center gap-2">
              {PathIcons.comment}
              {` ${3000}`}
            </div>
          </div>
          <InputField />
        </div>
      </div>
    </div>
  );
};

export default CardPost;
