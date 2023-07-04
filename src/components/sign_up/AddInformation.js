import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import logoLogin from "../../assets/icons/logo-login.svg";
const AddInformation = () => {
  return (
    <div className={"align-items-center"}>
      <div className={"container register__page mt-4"}>
        <div
          className={
            "row d-flex align-items-center pt-5 d-flex justify-content-around"
          }
        >
          {/* <!-- image --> */}
          <div className={"col-lg-8 col-md-4 col-sm-12 image__register me-4"}>
            <img src={logoLogin} alt={"logoLogin"} />
          </div>

          {/* <!-- form --> */}
          <div className={"col-lg-4 col-md-6 col-sm-12 register__form"}>
            <h4>Welcome back to the Link Up</h4>
            <form id={"login__form"} action={"../index.html"}>
              <div className={"mb-3 field email-field"}>
                <label htmlFor={"inputEmail"} className={"form-label"}>
                  Email
                </label>
                <input
                  type={"email"}
                  className={"form-control"}
                  id={"inputEmail"}
                  placeholder={"Enter your email"}
                  aria-describedby={"emailHelp"}
                />
                <span className={"error email-error"}>
                  Please enter a valid email
                </span>
              </div>
              {/* <!-- ------------- *** Password *** ------------- --> */}
              <div className={"mb-3 field create-password"}>
                <label htmlFor={"inputPassword"} className={"form-label"}>
                  Password
                </label>
                <input
                  type={"password"}
                  className={"form-control"}
                  id={"inputPassword"}
                  placeholder={"Create password"}
                />
                <span className={"error password-error"}>
                  Please enter at least 8 character with number, symbol, small
                  and capital letter.
                </span>
              </div>
              {/* <!-- ------------- *** Confirm Password *** ------------- --> */}
              <div className={"mb-3 field confirm-password"}>
                <label
                  htmlFor={"inputConfirmPassword"}
                  className={"form-label"}
                >
                  Confirm Password
                </label>
                <input
                  type={"password"}
                  className={"form-control"}
                  id={"inputConfirmPassword"}
                  placeholder={"Confirm password"}
                />
                <span className={"error cPassword-error"}>
                  Password don't match
                </span>

                {/* <!-- ------------- *** Checkbox *** ------------- --> */}
              </div>
              <div className={"mb-3 form-check fs-6 field checkbox-field"}>
                <input
                  type={"checkbox"}
                  className={"form-check-input"}
                  id={"checkbox"}
                />
                <label className={"form-check-label"} htmlFor={"checkbox"}>
                  I accept the terms & Condition
                </label>
                <span className={"error checkbox-error"}>
                  You must agree to the terms and conditions
                </span>
              </div>
              {/* <!-- ------------- *** Button *** ------------- --> */}
              <div className={"d-flex justify-content-center mt-3"}>
                <button
                  type={"submit"}
                  className={
                    "btn btn-primary btn-custom-register text-center w-100"
                  }
                >
                  Sign up
                </button>
              </div>
              <div className={"text-center mt-4 text__sign"}>
                already have an account?
                <Link to={"login.html"} className={"text-decoration-none"}>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInformation;
