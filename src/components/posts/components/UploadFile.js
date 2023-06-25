import React, { useRef, useState } from "react";
import "../../../css/index.css";
import { PathIcons } from "../../../util/PathIcons";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../../util/KeyLang";
const UploadFile = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { t } = useTranslation();

  const handleFileChange = (e) => {
    setUploadedFiles([...e.target.files]);
  };
  const fileInputRef = useRef(null);
  return (
    <>
      {uploadedFiles.length > 0 ? (
        <div className="uploaded-files">
          {uploadedFiles.map((file, index) => {
            const fileURL = URL.createObjectURL(file);
            if (file.type.includes("image")) {
              return (
                <img
                  key={index}
                  src={fileURL}
                  alt="upload"
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
          className="upload-icon upload_area mb-3"
          onClick={() => fileInputRef.current.click()}
        >
          <span className="d-flex gap-2">
            {PathIcons.upload}
            {t(KeyLang.uploadVideoOrPhoto)}
          </span>
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
    </>
  );
};
export default UploadFile;
