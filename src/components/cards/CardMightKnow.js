import React from "react";
import userData from "../../data/data";
import ImageUser from "../cache_image/ImageUser";
import "./CardActive.css";
<<<<<<< HEAD

=======
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
const CardMightKnow = ({ id }) => {
  const { t } = useTranslation();

  const data = userData[id];
  const currentUser = data.email;
  
  // Filter users who are not friends with the current user
  const usersNotFriends = userData.filter(user => {
    // Exclude the current user and their existing friends
    if (user.email !== currentUser && !data.friends.some(friend => friend.email === user.email)) {
      return true;
    }
    return false;
  });

  // Retrieve the first 4 users who are not friends
  const suggestedUsers = usersNotFriends.slice(0, 4);

  return (
    <div className="card__active">
<<<<<<< HEAD
      <h5 className="mb-3">You Might Know</h5>
      {suggestedUsers.map(user => (
        <ItemMightKnow
          key={user.email}
          user={user}
        />
      ))}
=======
      <h5 className="mb-3">{t(KeyLang.youMightKnow)}</h5>
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
      />
      <ItemMightKnow
        image={data.image}
        name={data.firstName}
        last={data.lastName}
        status={data.email}
        style={styleItem}
      />
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
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
