import React, { useContext, useEffect, useRef, useState } from "react";
import user from "../../assets/icons/user.svg";
import { PathIcons } from "../../util/PathIcons";
import ImageUser from "./ImageUser";
import "./images.css";
import { FormCxt } from "../../context/FormContext";

const UploadImage = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const { setImages } = useContext(FormCxt);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    if (image) {
      // Perform any additional actions with the uploaded image
      console.log("Image uploaded:", image);
      //   const data = { image: image };
      setImages(image);
    }
  }, [image]);

  return (
    <div className="d-flex justify-content-center mb-4">
      {image ? (
        <div className="container_image">
          <ImageUser
            image={URL.createObjectURL(image)}
            width={150}
            position={"100% 0"}
          />
          <div className="icon_upload" onClick={handleImageClick}>
            {PathIcons.camera}
          </div>
        </div>
      ) : (
        <div className="container_image">
          <ImageUser image={user} width={150} />
          <div className="icon_upload" onClick={handleImageClick}>
            {PathIcons.camera}
          </div>
        </div>
      )}

      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadImage;
