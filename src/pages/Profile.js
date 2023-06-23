import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import CoverProfile from "../components/cover/CoverProfile";
import CardAbout from "../components/cards/CardAbout";
import CardPost from "../components/posts/CardPost";
import CardActive from "../components/cards/CardActive";
import CardMightKnow from "../components/cards/CardMightKnow";
import AddPost from "../components/posts/AddPost";
import AddPost1 from "../components/AddPost";
import Friends from "../components/friend_card/Friends";

const Profile = () => {
  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        <NavBar />
        <CoverProfile />
      </div>
      <div className="row mt-3 gap-2 d-flex justify-content-center">
        <div className="col-xl-3 col-lg-4 d-xl-block d-lg-block d-md-none d-sm-none">
          <div className=" d-flex flex-column gap-3">
            <CardAbout />
            <div className="d-md-flex flex-column gap-3 d-xl-none">
              <CardMightKnow />
              <CardActive />
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-7 col-md-8 ">
          <div className="d-flex flex-column gap-3">
            <AddPost />
            <AddPost1 />
            <CardPost />
          </div>
        </div>
        <div className="col-xl-3 d-xl-block d-lg-none d-md-none d-sm-none">
          <div className="d-flex flex-column gap-3">
            <CardMightKnow />
            <CardActive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
