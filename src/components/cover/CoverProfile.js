import React from "react";
import coverImage from "../../assets/images/cover.jpg";
import "../../css/index.css";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import Buttons from "../btn/Buttons";
import { PathIcons } from "../../util/PathIcons";
const CoverProfile = () => {
  const data = userData[0];
  return (
    <div className="container_profile">
      <img className="cover_profile" src={coverImage} alt="cover" />
      <ImageUser
        image={data.image}
        name={data.name}
        classImage={"image_profile"}
      />
      <div className="bottom_cover mt-4 px-5">
        <div className="user_name fs-3">{`${data.firstName} ${data.lastName}`}</div>

        <div className="btn_cover pt-2">
          <div
            className="fs-6 friends-profile"
            onClick={openFriend}
          >{`${250} friends`}</div>
          <div className="d-flex gap-3">
            <Buttons
              text={"message"}
              onPress={click}
              icon={PathIcons.messenger}
            />
            <Buttons
              text={"add friend"}
              onPress={click}
              icon={PathIcons.addFriend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
function click() {
  console.log(1);
}
function openFriend() {}
export default CoverProfile;