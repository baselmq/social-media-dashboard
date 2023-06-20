import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/index.css";
import userData from "../data/data";
function CardAbout() {
  const data = userData[0];
  const styleItem = {
    borderBottom: "none",
  };

  return (
    <div className="card__about">
      <h5 className="mb-3">About</h5>
      <ItemAbout classIcon={"fa-user"} text={data.gender} />
      <ItemAbout
        classIcon={"fa-cake-candles"}
        text={`Born ${data.birthDate}`}
      />
      <ItemAbout classIcon={"fa-location-dot"} text={data.location} />
      <ItemAbout classIcon={"fa-envelope"} text={data.email} />
      <ItemAbout classIcon={"fa-phone"} text={data.phone} style={styleItem} />
    </div>
  );
}
function ItemAbout(props) {
  return (
    <div
      className="d-flex align-items-center gap-2 item__about"
      style={props.style}
    >
      <i className={`fa-solid ${props.classIcon}`}></i>
      <span>{props.text}</span>
    </div>
  );
}
export default CardAbout;
