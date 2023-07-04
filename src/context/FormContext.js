import React, { createContext, useState } from "react";

export const FormCxt = createContext("");
FormCxt.displayName = "Form";

const FormContextProvider = (props) => {
  const [emailPass, setEmailPass] = useState("");
  const [images, setImages] = useState(null);

  //   const getEmail = () => setEmail(email);
  const value = { emailPass, setEmailPass, images, setImages };
  return <FormCxt.Provider value={value}>{props.children}</FormCxt.Provider>;
};

export default FormContextProvider;
