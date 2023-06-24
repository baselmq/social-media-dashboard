import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
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
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="row">
      {languages.map(({ code, name, country_code, flag }) => (
        <div className="col-lg-5" key={country_code}>
          <Link
            href="/"
            className={
              ("dropdown-item",
              {
                disabled: currentLanguageCode === code,
              })
            }
            onClick={() => {
              i18next.changeLanguage(code);
            }}
          >
            <span
              style={{
                opacity: currentLanguageCode === code ? 0.5 : 1,
              }}
            >
              <img
                src={flag}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
            </span>
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CustomLanguage;
