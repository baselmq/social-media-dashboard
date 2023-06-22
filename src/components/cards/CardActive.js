import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
const CardActive = () => {
  const data = userData[0];
  const styleItem = {
    borderBottom: "none",
  };
  return (
    <div className="card__active">
      <h5 className="mb-3"> Active</h5>
      <ItemActive
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.statusOnline}
      />
      <ItemActive
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.statusOnline}
      />
      <ItemActive
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.statusOnline}
      />
      <ItemActive
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.statusOnline}
        style={styleItem}
      />
    </div>
  );
};
function ItemActive(props) {
  return (
    <div className="ItemActive" style={props.style}>
      <ImageUser image={props.image} width={45} />
      <div className="d-flex flex-column justify-content-center">
        <span>{`${props.name} ${props.last}`}</span>
        <span className="status__login">{props.status}</span>
      </div>
    </div>
  );
}

export default CardActive;
