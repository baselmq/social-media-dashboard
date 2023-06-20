import React from "react";

const ImageUser = (props) => {
  let imageStyle = {
    width: `${props.width}px`,
    height: `${props.width}px`,
    borderRadius: " 50%",
    objectFit: "cover",
    // objectPosition: "100% 0",
  };
  return (
    <div>
      <img src={props.image} alt={props.name} style={imageStyle} />
    </div>
  );
};

export default ImageUser;
