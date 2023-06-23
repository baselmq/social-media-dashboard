import React from "react";
import "./card_friend.css";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import { PathIcons } from "../../util/PathIcons";
const CardFriend = () => {
  return (
    <div className="card_friend col-lg-5 p-4">
      <div className=" d-flex align-items-center gap-3">
        <ImageUser image={userData[0].image} width={80} radius={"20%"} />
        <div>
          <span className="d-block">{`${userData[0].firstName} ${userData[0].lastName}`}</span>
          <span className="d-block mutual-text">{45} mutual friends</span>
        </div>
      </div>
      <span className="icon_dots_card_friend">{PathIcons.menuDots}</span>
    </div>
  );
};

export default CardFriend;
