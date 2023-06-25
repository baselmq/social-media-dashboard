import React from "react";
import "./input_field.css";
import { PathIcons } from "../../util/PathIcons";
import { KeyLang } from "../../util/KeyLang";
import { useTranslation } from "react-i18next";
const InputField = () => {
  const { t } = useTranslation();
  return (
    <div className="custom_input mt-3 d-flex align-items-center">
      <input type="text" placeholder={t(KeyLang.addComment)} />
      <span>{PathIcons.send}</span>
    </div>
  );
};

export default InputField;
