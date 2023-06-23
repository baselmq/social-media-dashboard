import React, { useRef, useState } from "react";

const UploadFile = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

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
          className="upload-icon upload__icon mb-3"
          onClick={() => fileInputRef.current.click()}
        >
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
    </>
  );
};
export default UploadFile;
