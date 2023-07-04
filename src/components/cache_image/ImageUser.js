import React from "react";

const ImageUser = ({
  radius = "50%",
  width,
  classImage,
  image,
  name,
  position = "0",
}) => {
  let imageStyle = {
    width: `${width}px`,
    height: `${width}px`,
    borderRadius: radius,
    objectFit: "cover",
    objectPosition: position,
    // objectPosition: "100% 0",
  };
  return (
    <div className={classImage}>
      <img src={image} alt={name} style={imageStyle} />
    </div>
  );
};

export default ImageUser;
