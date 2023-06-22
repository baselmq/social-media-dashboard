import React from "react";
import CardFriend from "./CardFriend";
import "./card_friend.css";
const Friends = () => {
  return (
    <>
      <div className="Container_ mt-5">
        <div className="Container_center">
          <h1 className="border-bottom header__friends p-4">Friends</h1>
          <div className=" body__friends ">
            <CardFriend />
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
