import React from "react";
import { Link } from "react-router-dom";
import ImageUser from "../cache_image/ImageUser";
import DarkMode from "../DarkMode/DarkMode";
const DropdownMenu = (props) => {
  return props.links ? (
    <li className="mb-2" onClick={props.onPress}>
      <Link
        className="dropdown-item custom_item_dropDown"
        to={props.to}
        id={props.idElement}
      >
        <span className="d-flex align-items-center gap-2">
          {props.image != null ? (
            <ImageUser image={props.image} width={30} />
          ) : (
            props.icon
          )}
          <span>{props.text}</span>
        </span>
      </Link>
    </li>
  ) : (
    <li className="mb-2" onClick={props.onPress}>
      <div></div>
      <Link className="dropdown-item custom_item_dropDown">
        <span className="d-flex align-items-center gap-2">
          {props.image != null ? (
            <ImageUser image={props.image} width={30} />
          ) : (
            props.icon
          )}
          <span>{props.text}</span>
        </span>
      </Link>
    </li>
  );
};

export default DropdownMenu;
