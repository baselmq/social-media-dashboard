import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import AddPost from "../components/posts/AddPost";
import CardPost from "../components/posts/CardPost";
import userData from "../data/data";
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const activeUser = localStorage.getItem("activeUser");
  const currentUser = userData.find((user) => user.email === activeUser);

  let index = id == null ? "0" : id;

  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        <NavBar />

        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8 ">
            <div className="d-flex flex-column gap-3">
              <AddPost id={index} />
              <CardPost id={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
