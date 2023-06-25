import React, { useState } from "react";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import "../../css/index.css";
import { PathIcons } from "../../util/PathIcons";
import Popup from "../popup/Popup";
import CreatePost from "./components/CreatePost";
import Felling from "./components/Felling";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
function AddPost({ id }) {
  const data = userData[id];
  const [buttonPopup, setButtonPopup] = useState(false);
  const [felling, setFelling] = useState(false);
  const { t } = useTranslation();

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
          Basel? ,{t(KeyLang.mindYourOnWhatIs)}
        </div>
      </div>
      <div className="bottom_add_post d-flex justify-content-evenly mt-3">
        <div
          className="add_photo d-flex align-align-items-start gap-2"
          onClick={() => setButtonPopup(true)}
        >
          {PathIcons.image} {t(KeyLang.photoVideo)}
        </div>
        <div
          className="feeling d-flex align-align-items-start gap-2"
          onClick={() => setFelling(true)}
        >
          {PathIcons.feeling} {t(KeyLang.feelingActivity)}
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        title={t(KeyLang.createPost)}
      >
        <CreatePost />
      </Popup>
      <Popup
        trigger={felling}
        setTrigger={setFelling}
        title={t(KeyLang.howAreYouFeeling)}
      >
        <Felling />
      </Popup>
    </div>
  );
}

export default AddPost;
