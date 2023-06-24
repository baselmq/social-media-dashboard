import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
const CardMightKnow = ({ id }) => {
  const data = userData[id];
  const styleItem = {
    borderBottom: "none",
  };
  return (
    <div className="card__active">
      <h5 className="mb-3"> You Might Know</h5>
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
        style={styleItem}
      />
    </div>
  );
};
function ItemMightKnow(props) {
  return (
    <div className="ItemActive" style={props.style}>
      <ImageUser image={props.image} width={45} />
      <div className="d-flex flex-column justify-content-center">
        <span>{`${props.name} ${props.last}`}</span>
      </div>
    </div>
  );
}

export default CardMightKnow;
