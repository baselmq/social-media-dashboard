import NavBar from "../components/navbar/NavBar";
import AddPost from "../components/posts/AddPost";
import CardPost from "../components/posts/CardPost";

const Home = () => {
  return (
    <div className="bodyAllPages">
      <div className="px-lg-4 mx-lg-3">
        <NavBar />

        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8 ">
            <div className="d-flex flex-column gap-3">
              <AddPost />
              <CardPost />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
