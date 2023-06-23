import React from "react";
import "./card_friend.css";
import userData from "../../data/data"; 
const CardFriend = () => {
  return (
    <div class="row mt-4 d-flex justify-content-center">
  <div className="component rounded border_style">
    <div className="row d-flex m-4">
      <div className="Header__card">Friends</div>
    </div>
    {/* from here card  */}
    <div className="row d-flex justify-content-center gap-4 mt-3 ">
    <div className="col-md-5 border rounded p-3 pt-2 pb-2 col_card">
        <div className="row d-flex align-items-center">

          <div className="col-2 p-0 " style={{ maxWidth: "100%", height: "55px" }}>
            <img src={userData[0].image} style={{ width: "100%", height: "55px", objectFit: "cover" }} className="rounded"></img>
          </div>

          <div className="col-5 d-flex justify-content-center flex-column">
            <p className="d-flex align-items-center m-0 content_card">name</p>
            <p className="d-flex align-items-center m-0 content_card2">10 mutual friends</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 border rounded p-3 pt-2 pb-2 col_card">
        <div className="row d-flex align-items-center">

          <div className="col-2 p-0 " style={{ maxWidth: "100%", height: "55px" }}>
            <img src={userData[0].image} style={{ width: "100%", height: "55px", objectFit: "cover" }} className="rounded"></img>
          </div>

          <div className="col-5 d-flex justify-content-center flex-column">
            <p className="d-flex align-items-center m-0 content_card">name</p>
            <p className="d-flex align-items-center m-0 content_card2">10 mutual friends</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 border rounded p-3 pt-2 pb-2 col_card">
        <div className="row d-flex align-items-center">

          <div className="col-2 p-0 " style={{ maxWidth: "100%", height: "55px" }}>
            <img src={userData[0].image} style={{ width: "100%", height: "55px", objectFit: "cover" }} className="rounded"></img>
          </div>

          <div className="col-5 d-flex justify-content-center flex-column">
            <p className="d-flex align-items-center m-0 content_card">name</p>
            <p className="d-flex align-items-center m-0 content_card2">10 mutual friends</p>
          </div>
        </div>
      </div>
      <div className="col-md-5 border rounded p-3 pt-2 pb-2 col_card">
        <div className="row d-flex align-items-center">

          <div className="col-2 p-0 " style={{ maxWidth: "100%", height: "55px" }}>
            <img src={userData[0].image} style={{ width: "100%", height: "55px", objectFit: "cover" }} className="rounded"></img>
          </div>

          <div className="col-5 d-flex justify-content-center flex-column">
            <p className="d-flex align-items-center m-0 content_card">name</p>
            <p className="d-flex align-items-center m-0 content_card2">10 mutual friends</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default CardFriend;
