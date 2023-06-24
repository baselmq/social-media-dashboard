import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";
// import "bootstrap/dist/js/bootstrap.js";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { PathIcons } from "../../util/PathIcons";
import EditProfileNew from "../edit_profile/EditProfileNew";
import PopupEditProfile from "../popup/PopupEditProfile";
const NavBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [settingPopup, setSettingPopup] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm custom_nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <ul className="navbar-nav custom-items">
          <li className="nav-item custom_item_nav custom_active  d-flex justify-content-center">
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
            <Link
              className="nav-link"
              to="/"
              onClick={() => setSettingPopup(true)}
            >
              <i className="fa-sharp fa-solid fa-gear"></i>
            </Link>
            <PopupEditProfile
              trigger={settingPopup}
              setTrigger={setSettingPopup}
            >
              <EditProfileNew />
            </PopupEditProfile>
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
        <div
          className="d-flex justify-content-end align-items-center container_right_nav"
          id=""
        >
          <form className="search_bar_nav" role="search">
            <div className="">
              <SearchBar setResults={setResults} value={value} />
              {results && results.length > 0 && (
                <SearchResultList
                  results={results}
                  setResult={setResults}
                  setValue={setValue}
                />
              )}
              {}
            </div>
          </form>
          <span className="mx-3">{userData[0].name}</span>

          <div className="dropdown">
            <button
              className="btn_dropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImageUser
                image={userData[0].image}
                name={userData[0].name}
                width={40}
              />
            </button>
            <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu pt-3">
              <DropdownMenu
                text={userData[0].firstName}
                to={"/profile"}
                image={userData[0].image}
              />
              <DropdownMenu
                text={"Setting"}
                to={"/"}
                icon={PathIcons.settings}
                onPress={() => setSettingPopup(true)}
              />
              <PopupEditProfile
                trigger={settingPopup}
                setTrigger={setSettingPopup}
                title={"Setting"}
              >
                <EditProfileNew />
              </PopupEditProfile>
              <DropdownMenu
                text={"Language"}
                to={"/"}
                icon={PathIcons.language}
              />
              <DropdownMenu
                text={"Display"}
                to={"/"}
                icon={PathIcons.darkMode}
              />
              <DropdownMenu
                text={"Sign Out"}
                to={"/"}
                icon={PathIcons.signOut}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
