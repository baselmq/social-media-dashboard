import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
import { useTranslation } from "react-i18next";
const CardMightKnow = ({ id }) => {
  const { t } = useTranslation();

  const data = userData[id];
  const currentUser = data.email;

  // Filter users who are not friends with the current user
  const usersNotFriends = userData.filter((user) => {
    // Exclude the current user and their existing friends
    if (
      user.email !== currentUser &&
      !data.friends.some((friend) => friend.email === user.email)
    ) {
      return true;
    }
    return false;
  });

  // Retrieve the first 4 users who are not friends
  const suggestedUsers = usersNotFriends.slice(0, 4);

  return (
    <div className="card__active">
      <h5 className="mb-3">You Might Know</h5>
      {suggestedUsers.map((user) => (
        <ItemMightKnow key={user.email} user={user} />
      ))}
    </div>
  );
};

function ItemMightKnow({ user }) {
  const { firstName, lastName, image, email } = user;

  return (
    <div className="ItemMightKnow">
      <ImageUser image={image} width={45} />
      <div className="d-flex flex-column justify-content-center">
        <span>{`${firstName} ${lastName}`}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default CardMightKnow;
