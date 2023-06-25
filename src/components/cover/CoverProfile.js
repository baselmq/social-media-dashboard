import React from "react";
import "../../css/index.css";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import Buttons from "../btn/Buttons";
import { PathIcons } from "../../util/PathIcons";
import Friends from "../friend_card/Friends";
import { useState } from "react";
import PopupFriends from "../popup/PopupFriends";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
const CoverProfile = ({ id }) => {
  const data = userData[id];
  const [buttonPopup, setButtonPopup] = useState(false);
  const { t } = useTranslation();

  buttonPopup
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="">
      <div className="container_profile">
        <img className="cover_profile" src={data.imageCover} alt="cover" />
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
              onClick={() => setButtonPopup(true)}
            >{`${250} ${t(KeyLang.friend)}`}</div>
            {/* Popup */}
            <PopupFriends
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              title={"Friends"}
            >
              <Friends />
            </PopupFriends>
            <div className="d-flex gap-3">
              <Buttons
                text={t(KeyLang.message)}
                onPress={click}
                icon={PathIcons.messenger}
              />
              <Buttons
                text={t(KeyLang.addFriend)}
                onPress={click}
                icon={PathIcons.addFriend}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function click() {
  console.log(1);
}
export default CoverProfile;
