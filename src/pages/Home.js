import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Popup from "../components/popup/Popup";
import Friends from "../components/friend_card/Friends";

const Home = () => {
  const [buttonPopup ,setButtonPopup] = useState(false)
  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        <NavBar />
        <Friends/>
      </div>
    </div>
  );
};

export default Home;
