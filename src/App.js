import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
 HEAD
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import cookies from "js-cookie";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];
>>>>>>> 25fa6a4a84dd3a1e7a2c3fdf074ee133db5b41c3
function App() {
  // .*** --------------------language--------------------- ***
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  // .*** --------------------return--------------------- ***
  return (
    <>
    
    <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
    
    </>
  );
}

export default App;
