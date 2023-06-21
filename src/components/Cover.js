import React from "react";
import "../css/Cover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Cover() {
  return (
    <div className="cover">
      <div
        className="cover-photo"
        style={{
          backgroundImage:
            "url(https://images.template.net/wp-content/uploads/2014/11/facebook-cover-photos-nature.jpg)",
        }}
      ></div>

      <div
        className="profile-photo"
        style={{
          backgroundImage:
            "url(https://m.timesofindia.com/photo/83890830/83890830.jpg)",
        }}
      ></div>

      <div className= "cover-container">
        <div className="name-cover">
          <div className="cover-text">
            <h2>Ashraf Khalifa</h2>
            <p>Developer</p>
          </div>
        </div>

        <div className="cover-button">
          <FontAwesomeIcon icon={faEnvelope} size="3x" color="black" />
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}
