import React from "react";
import NavBar from "../components/navbar/NavBar";
import CoverProfile from "../components/cover/CoverProfile";
import CardAbout from "../components/cards/CardAbout";
import CardPost from "../components/posts/CardPost";
import CardActive from "../components/cards/CardActive";
import CardMightKnow from "../components/cards/CardMightKnow";
import AddPost from "../components/posts/AddPost";
import Friends from "../components/friend_card/Friends";

const Profile = () => {
  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        <NavBar />
        <CoverProfile />
      </div>
      <div className="row mt-4 gap-3 d-flex justify-content-center">
        <div className="col-lg-3">
          <CardAbout />
        </div>
        <div className="col-lg-5 d-flex flex-column gap-3">
          <AddPost />
          <CardPost />
        </div>
        <div className="col-lg-3 d-flex flex-column gap-4">
          <CardMightKnow />
          <CardActive />
        </div>
      </div>
      <Friends />
    </div>
  );
};

export default Profile;
