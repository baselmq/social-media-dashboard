import React, { useState } from "react";
import ImageUser from "../../cache_image/ImageUser";
import userData from "../../../data/data";
import "../../../css/index.css";
import UploadFile from "./UploadFile";
import { KeyLang } from "../../../util/KeyLang";
import { useTranslation } from "react-i18next";
const CreatePost = (props) => {
  const [postContent, setPostContent] = useState("");
  const { t } = useTranslation();

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };
  const handlePostSubmit = () => {
    console.log(postContent);
  };
  return (
    <div className="container_create_post">
      <div className="d-flex align-items-center gap-3">
        <ImageUser image={userData[0].image} width={50} />
        <div className="">{userData[0].firstName}</div>
        <div style={{ fontWeight: "bold" }}>
          {props.text}
          {props.selectedFeeling}
          {props.selectedFeelingEmoji}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          name="textarea_create_post"
          className="textarea_create_post"
          placeholder="What's on your mind? (username)"
          cols="30"
          rows={6}
          value={postContent}
          onChange={handlePostChange}
        ></textarea>
      </div>
      {/* ***-------------UploadFile***------------- */}
      <UploadFile />

      {/* ***-------------btn post***------------- */}
      <button
        style={{
          backgroundColor: !postContent.trim() ? "#BCBCBC" : "#a303a0",
        }}
        className="btn_create_post mt-3 "
        disabled={!postContent.trim()}
        onClick={handlePostSubmit}
      >
        {t(KeyLang.postButton)}
      </button>
    </div>
  );
};

export default CreatePost;
