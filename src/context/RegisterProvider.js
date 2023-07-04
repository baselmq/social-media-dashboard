import { createContext, useState } from "react";

export const RegisterCxt = createContext(false);
RegisterCxt.displayName = "Register";

const RegisterContextProvider = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);

  const value = { isRegistered, setIsRegistered };
  return (
    <RegisterCxt.Provider value={value}>{props.children}</RegisterCxt.Provider>
  );
};
export default RegisterContextProvider;
