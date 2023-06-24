import React from "react";

import userData from "../../data/data";
import "../css/posts.css";

import { FaEllipsisH, FaHeart, FaComment } from "react-icons/fa";
const Posts = () => {
  return (
    <div className="container__main mb-3">
      <div className="box__posts mt-3">
        <p className="header_post m-0 p-3 border-bottom">posts</p>
        <div className="body__post p-4">
          <div className="first__Div mt-1">
            <div className="right">
              <img src={userData[0].image} className="Image_avatar" />
              <div>
                <div className="usernamePtime">username</div>
                <div className="usernamePtime">15 mints</div>
              </div>
            </div>
            <div className="left">
              <FaEllipsisH />
            </div>
          </div>
          <div className="second__div mt-4">
            <img src={userData[0].image} className="Imag_post" />
          </div>
          <div className="third__div mt-3 d-flex gap-3 align-items-center">
            <span className="who_write_post"> nadeen98 </span>
            <span className="dscription">Hi</span>
          </div>
          <div className="fourth__div mt-3">
            <div className=" d-flex  gap-2 align-items-center">
              <FaHeart />
              <span>0</span>
            </div>
            <div className=" d-flex  gap-2 align-items-center">
              <FaComment />
              <span>0 comment</span>
            </div>
          </div>
          <div className="comment mt-3">
            <input type="text" placeholder="add comment"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
