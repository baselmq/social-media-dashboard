import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/index.css";
// import "bootstrap/dist/js/bootstrap.js";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import ImageUser from "./ImageUser";
import userData from "../data/data";
const NavBar = () => {
  const [results, setResults] = useState([]);

  return (
    <nav className="navbar navbar-expand-lg  custom_nav px-lg-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Brand
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="d-flex justify-content-end align-items-center" id="">
          <form className="" role="search">
            <div className="">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultList results={results} />
              )}
            </div>
          </form>
          <span className="mx-3">{userData[0].name}</span>
          <ImageUser
            image={userData[0].image}
            name={userData[0].name}
            width={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
