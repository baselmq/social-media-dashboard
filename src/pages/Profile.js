import NavBar from "../components/navbar/NavBar";
import CoverProfile from "../components/cover/CoverProfile";
import CardAbout from "../components/cards/CardAbout";
import CardPost from "../components/posts/CardPost";
import CardActive from "../components/cards/CardActive";
import CardMightKnow from "../components/cards/CardMightKnow";
import AddPost from "../components/posts/AddPost";
import { useLocation } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const url = "http://localhost:4000/users";
  function localData() {
    const value = JSON.parse(localStorage.getItem("user"));
    if (value.status === "login") {
      let email = value.email;
      console.log(email);
      return email;
    }
  }
  const email = localData();
  const { data, loading, error } = useFetchData(url, email);

  let index = id == null ? "0" : id;
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div className="bodyAllPages">
          <div className="px-lg-4 mx-lg-3">
            <NavBar />
            <CoverProfile id={index} />
          </div>
          <div className="row mt-3 gap-2 d-flex justify-content-center">
            <div className="col-xl-3 col-lg-4 d-xl-block d-lg-block d-md-none d-sm-none">
              <div className=" d-flex flex-column gap-3">
                <CardAbout id={index} />
                <div className="d-md-flex flex-column gap-3 d-xl-none">
                  <CardMightKnow id={index} />
                  <CardActive id={index} />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-7 col-md-8 ">
              <div className="d-flex flex-column gap-3">
                <AddPost id={index} />
                <CardPost id={index} />
                <CardPost id={index} />
              </div>
            </div>
            <div className="col-xl-3 d-xl-block d-lg-none d-md-none d-sm-none">
              <div className="d-flex flex-column gap-3">
                <CardMightKnow id={index} />
                <CardActive id={index} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
