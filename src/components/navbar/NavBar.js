import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/index.css";
import { SearchBar } from "./SearchBar";
import { SearchResultList } from "./SearchResultList";
import ImageUser from "../cache_image/ImageUser";
import userData from "../../data/data";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { PathIcons } from "../../util/PathIcons";
<<<<<<< HEAD
=======
import EditProfileNew from "../edit_profile/EditProfileNew";
import PopupEditProfile from "../popup/PopupEditProfile";
import CustomLanguage from "../language/CustomLanguage";
import Popup from "../popup/Popup";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../util/KeyLang";
import DarkMode from "../DarkMode/DarkMode";
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3

const NavBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [settingPopup, setSettingPopup] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const [themePopup, setThemePopup] = useState(false);
  const { t } = useTranslation();

  const activeUser = localStorage.getItem("activeUser");
  const currentUser = userData.find((user) => user.email === activeUser);

  return (
<<<<<<< HEAD
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
        <div
          className="d-flex justify-content-end align-items-center container_right_nav"
          id=""
        >
          <form className="search_bar_nav" role="search">
            <div className="">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <SearchResultList results={results} setResult={setResults} />
              )}
            </div>
          </form>
          {currentUser && (
            <>
              <span className="mx-3">{`${currentUser.firstName} ${currentUser.lastName}`}</span>
              <div className="dropdown">
                <button
                  className="btn_dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ImageUser
                    image={currentUser.image}
                    name={`${currentUser.firstName} ${currentUser.lastName}`}
                    width={40}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu pt-3">
                  <DropdownMenu
                    text={currentUser.firstName}
                    to={"/profile"}
                    image={currentUser.image}
                  />
                  <DropdownMenu
                    text={"Setting"}
                    to={"/"}
                    icon={PathIcons.settings}
                  />
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
            </>
          )}
=======
    <>
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
                {/* ***----------------- DropdownMenu profile -----------------*** */}
                <DropdownMenu
                  text={userData[0].firstName}
                  to={"/profile"}
                  links={true}
                  image={userData[0].image}
                />
                {/* ***----------------- DropdownMenu Setting -----------------*** */}
                <DropdownMenu
                  text={t(KeyLang.setting)}
                  links={false}
                  icon={PathIcons.settings}
                  onPress={() => setSettingPopup(true)}
                />
                <PopupEditProfile
                  trigger={settingPopup}
                  setTrigger={setSettingPopup}
                  title={t(KeyLang.setting)}
                >
                  <EditProfileNew />
                </PopupEditProfile>

                {/* ***----------------- DropdownMenu Language -----------------*** */}

                <DropdownMenu
                  text={t(KeyLang.language)}
                  links={false}
                  icon={PathIcons.language}
                  onPress={() => setLangPopup(true)}
                />

                {/* ***----------------- DropdownMenu Display -----------------*** */}
                <DropdownMenu
                  text={t(KeyLang.display)}
                  links={false}
                  icon={PathIcons.darkMode}
                  onPress={() => setThemePopup(true)}
                />
                {/* ***----------------- DropdownMenu Sign Out -----------------*** */}
                <DropdownMenu
                  text={t(KeyLang.SignOut)}
                  to={"/"}
                  icon={PathIcons.signOut}
                />
              </ul>
            </div>
          </div>
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
        </div>
      </nav>
      <Popup
        trigger={langPopup}
        setTrigger={setLangPopup}
        title={t(KeyLang.language)}
      >
        <CustomLanguage setTrigger={setLangPopup} />
      </Popup>{" "}
      <Popup
        trigger={themePopup}
        setTrigger={setThemePopup}
        title={t(KeyLang.display)}
      >
        <DarkMode />
      </Popup>
    </>
  );
};

export default NavBar;
