import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";

const CardActive = ({ id }) => {
  const data = userData[id];
  const styleItem = {
    borderBottom: "none",
  };
  
  const activeUser = localStorage.getItem("activeUser");

  const currentUser = userData.find((user) => user.email === activeUser);

  const activeFriends = currentUser.friends.filter(
    (friend) => friend.statusLogin === true
  );

  return (
    <div className="card__active">
      <h5 className="mb-3">Active</h5>
      {activeFriends.map((friend) => (
        <ItemActive
          key={friend.email}
          image={friend.image}
          name={friend.fullName}
          last=""
          status={friend.statusLogin}
        />
      ))}
      <ItemActive image={data.image} name={data.firstName} last={data.lastName} status={data.statusLogin} style={styleItem} />
    </div>
  );
};

function ItemActive(props) {
  return (
    <div className="ItemActive" style={props.style}>
      <ImageUser image={props.image} width={45} />
      <div className="d-flex flex-column justify-content-center">
        <span>{`${props.name} ${props.last}`}</span>
        <span className="status__login">{props.status ? "Online" : "Offline"}</span>
      </div>
    </div>
  );
}

export default CardActive;
