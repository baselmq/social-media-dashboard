import React, { useContext } from "react";
import "../css/login.css";
import RegisterForm from "../components/forms/RegisterForm";
import ImageBrandForm from "../components/forms/ImageBrandForm";
import { RegisterCxt } from "../context/RegisterProvider";
import InformationForm from "../components/forms/InformationForm";

const Register = () => {
  const { isRegistered } = useContext(RegisterCxt);

  return (
    <div className="align-items-center">
      <div className="container register__page mt-4">
        <div className="row d-flex align-items-center pt-5 d-flex justify-content-around">
          {/* <!-- image --> */}
          {<ImageBrandForm />}
          {/* <!-- form --> */}
          {!isRegistered && <RegisterForm />}
          {isRegistered && <InformationForm />}
        </div>
      </div>
    </div>
  );
};

export default Register;
