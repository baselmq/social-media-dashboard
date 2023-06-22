import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";
// import "bootstrap/dist/js/bootstrap.js";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [results, setResults] = useState([]);

  return (
    <nav className="navbar navbar-expand-sm custom_nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <ul className="navbar-nav custom-items">
          <li className="nav-item custom_item_nav custom_active d-flex justify-content-center">
            <Link className="nav-link " to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li className="nav-item custom_item_nav d-flex justify-content-center">
            <Link className="nav-link" to="/profile">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li className="nav-item custom_item_nav d-flex justify-content-center">
            <Link className="nav-link" to="/">
              <i className="fa-sharp fa-solid fa-gear"></i>
            </Link>
          </li>
        </ul>
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
          {/* <form className="" role="search">
            <div className="">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultList results={results} />
              )}
            </div>
          </form> */}
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
