import React from "react";

const ImageUser = ({ radius = "50%", width, classImage, image, name }) => {
  let imageStyle = {
    width: `${width}px`,
    height: `${width}px`,
    borderRadius: radius,
    objectFit: "cover",
    // objectPosition: "100% 0",
  };
  return (
    <div className={classImage}>
      <img src={image} alt={name} style={imageStyle} />
    </div>
  );
};

export default ImageUser;
