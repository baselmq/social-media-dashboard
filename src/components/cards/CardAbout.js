import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";
import userData from "../../data/data";
<<<<<<< HEAD

function CardAbout() {
  const activeUser = localStorage.getItem("activeUser");

  const currentUser = userData.find((user) => user.email === activeUser);

=======
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
function CardAbout({ id }) {
  const { t } = useTranslation();

  const data = userData[id];
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
  const styleItem = {
    borderBottom: "none",
  };

  return (
    <div className="card__about">
<<<<<<< HEAD
      <h5 className="mb-3">About</h5>
      <ItemAbout classIcon={"fa-user"} text={currentUser.gender} />
=======
      <h5 className="mb-3">{t(KeyLang.About)}</h5>
      <ItemAbout classIcon={"fa-user"} text={data.gender} />
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
      <ItemAbout
        classIcon={"fa-cake-candles"}
        text={`Born ${currentUser.birthDate}`}
      />
      <ItemAbout classIcon={"fa-location-dot"} text={currentUser.location} />
      <ItemAbout classIcon={"fa-envelope"} text={currentUser.email} />
      <ItemAbout classIcon={"fa-phone"} text={currentUser.phone} style={styleItem} />
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
