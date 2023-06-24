import React, { useRef, useState } from "react";
import userData from "../data/data";
import "../../src/css/addpost.css";

import { FaVideo, FaCamera, FaSmile, FaUpload } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddPost = () => {
  const data = userData[0];
  const [showPopup, setShowPopup] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [showPhotoVideoPopup, setShowPhotoVideoPopup] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleInputClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    console.log("Post submitted:", postContent);
    console.log("upladfils: " + fileInputRef);
  };

  const handlePhotoVideoClick = () => {
    setShowPhotoVideoPopup(true);
  };

  const handleClosePopupPhotoVideo = () => {
    setShowPhotoVideoPopup(false);
  };

  const handleFileChange = (e) => {
    setUploadedFiles([...e.target.files]);
  };

  return (
    <div className="div__container">
      <div className="box__post border p-3">
        <div className="ImgPlusPost border-bottom pb-2">
          <img src={data.image} className="Imag_avatar" alt="Avatar" />
          {showPopup ? (
            <input
              type="text"
              className="input__post"
              placeholder="What's on your mind? (username)"
              disabled
            />
          ) : (
            <input
              type="text"
              className="input__post"
              placeholder="What's on your mind? (username)"
              onClick={handleInputClick}
            />
          )}
        </div>
        <div className="Upload__option p-2">
          {/* <button className='d-flex justify-content-center align-items-center items__options__post gap-2'>
            <FaVideo className='video' />
            <p className='m-0'>Live Video</p>
          </button> */}
          <button
            className="d-flex justify-content-center align-items-center items__options__post gap-2"
            onClick={handlePhotoVideoClick}
          >
            <FaPhotoVideo className="camera" />
            <p className="m-0">Photo/Video</p>
          </button>
          <button className="d-flex justify-content-center align-items-center items__options__post gap-2">
            <FaSmile className="imoje" />
            <p className="m-0">Feeling/Activity</p>
          </button>
        </div>
      </div>
      {/* pop up for input text */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header border-bottom pb-2">
              <p className="title_header text-center">Create Post</p>
              <button
                type="button"
                className="btn-close btn__close"
                aria-label="Close"
                onClick={handleClosePopup}
              ></button>
            </div>
            <div className="popup-body">
              <div className="DIV__usernameprofile mt-2">
                <img src={data.image} className="Imag_avatar" alt="Avatar" />
                <p className="m-0 ">user name</p>
              </div>
              <div>
                <textarea
                  className="textarea_input"
                  placeholder="What's on your mind? (username)"
                  rows={6}
                  value={postContent}
                  onChange={handlePostChange}
                ></textarea>
              </div>
              <div>
                <button
                  className="btn__post"
                  disabled={!postContent.trim()}
                  onClick={handlePostSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* pop up for video and photo  */}
      {showPhotoVideoPopup && (
        <div className="photo-video-popup">
          <div className="popup-content">
            <div className="popup-header border-bottom pb-2">
              <p className="title_header text-center">Create Post</p>
              <button
                type="button"
                className="btn-close btn__close"
                aria-label="Close"
                onClick={handleClosePopupPhotoVideo}
              ></button>
            </div>
            <div className="popup-body">
              <div className="DIV__usernameprofile mt-2">
                <img src={data.image} className="Imag_avatar" alt="Avatar" />
                <p className="m-0 ">user name</p>
              </div>
              <div>
                <textarea
                  className="textarea_input"
                  placeholder="What's on your mind? (username)"
                  rows={3}
                  value={postContent}
                  onChange={handlePostChange}
                ></textarea>
              </div>

              {uploadedFiles.length > 0 ? (
                <div className="uploaded-files">
                  {uploadedFiles.map((file, index) => {
                    const fileURL = URL.createObjectURL(file);
                    if (file.type.includes("image")) {
                      return (
                        <img
                          key={index}
                          src={fileURL}
                          alt="UploadedImage"
                          className="display__upload"
                        />
                      );
                    } else if (file.type.includes("video")) {
                      return (
                        <video key={index} controls className="display__upload">
                          <source src={fileURL} type={file.type} />
                        </video>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <div
                  className="upload-icon upload__icon mb-3"
                  onClick={() => fileInputRef.current.click()}
                >
                  <FaUpload className="upload-icon" />
                  <p>Upload Video or photo</p>
                </div>
              )}
              <div>
                <input
                  type="file"
                  accept="image/*, video/*"
                  multiple
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <button
                  className="btn__post"
                  disabled={!postContent.trim()}
                  onClick={handlePostSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
