import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import arabic from "../../assets/icons/arabic.svg";
import english from "../../assets/icons/english.svg";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    flag: english,
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
    flag: arabic,
  },
];

const CustomLanguage = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="row">
      {languages.map(({ code, name, country_code, flag }) => (
        <div className="col-lg-6" key={country_code}>
          <CustomFlags
            code={code}
            name={name}
            flag={flag}
            currentLangCode={currentLanguageCode}
          />
        </div>
      ))}
    </div>
  );
};

const CustomFlags = (props) => {
  const styleImage = {
    opacity: props.currentLangCode === props.code ? 0.5 : 1,
  };
  return (
    <div
      className="box_lang d-flex flex-column align-items-center"
      onClick={() => {
        i18next.changeLanguage(props.code);
      }}
    >
      <img
        src={props.flag}
        className="image_flag"
        alt={props.name}
        style={styleImage}
      />
      <span style={styleImage}>{props.name}</span>
    </div>
  );
};

export default CustomLanguage;
