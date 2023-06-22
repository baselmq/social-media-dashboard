import React from "react";
import "./input_field.css";
import { PathIcons } from "../../util/PathIcons";
const InputField = () => {
  return (
    <div className="custom_input mt-3 d-flex align-items-center">
      <input type="text" placeholder="add comment" />
      <span>{PathIcons.send}</span>
    </div>
  );
};

export default InputField;
