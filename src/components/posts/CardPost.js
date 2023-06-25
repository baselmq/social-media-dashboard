import React from "react";
import "../../css/index.css";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { PathIcons } from "../../util/PathIcons";
import InputField from "../inputs/InputField";

const CardPost = () => {
  const activeUser = localStorage.getItem("activeUser");
  const currentUser = userData.find((user) => user.email === activeUser);

  // Assuming you have a 'post' array in your data
  const posts = currentUser ? currentUser.post : [];

  if (!posts || posts.length === 0) {
    return null; // Return null or handle the empty case accordingly
  }

  return (
    <div className="row container_post">
      {posts.map((post, index) => {
        const { dataPost, likes = [], comments = [] } = post;

        return (
          <div className="col-12 p-4" key={index}>
            <div className="header_post d-flex align-items-center gap-3">
              <ImageUser image={dataPost.image} width={60} />
              <div>
                <span className="user_name_post d-block">
                  {`${currentUser.firstName} ${currentUser.lastName}`}
                </span>
                <span className="time_post d-block">{`${dataPost.datePost}`}</span>
              </div>
              <span className="menu_dots_post">{PathIcons.menuDots}</span>
            </div>
            <div className="body_post py-4">
              <img src={dataPost.image} alt="image_post" />
              <p className="pt-3 mb-2">{dataPost.content}</p>
            </div>
            <div className="footer_post">
              <div className="d-flex gap-4">
                <div className="like-post d-flex align-items-center gap-2">
                  {PathIcons.like}
                  {likes && likes.length ? ` ${likes.length}K` : ' 0'}
                </div>
                <div className="comment-post d-flex align-items-center gap-2">
                  {PathIcons.comment}
                  {comments && comments.length ? ` ${comments.length}` : ' 0'}
                </div>
              </div>
              <InputField />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPost;
