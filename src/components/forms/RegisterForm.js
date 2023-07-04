import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import useFormValidation from "../../hooks/useFormValidation";

const RegisterForm = () => {
  // hook useFormValidation
  
  const { values, errors, handleChange, handleSubmit, isEmailNotAvailable } =
    useFormValidation();

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 register__form">
      <h4>Welcome back to the Link Up</h4>
      <form id={"login__form"} onSubmit={handleSubmit}>
        <div className={"mb-3 field email-field"}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control ${errors.email && "invalid"}`}
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">Invalid email.</p>}
          {/* {isEmailAvailable && <p className="success">Email is available.</p>} */}
          {isEmailNotAvailable && (
            <p className="error">Email is already in use.</p>
          )}
        </div>
        {/* <!-- ------------- *** Password *** ------------- --> */}
        <div className={"mb-3 field create-password"}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${errors.password && "invalid"}`}
            placeholder="Create password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error">
              Please enter at least 8 character with number, symbol, small and
              capital letter.
            </p>
          )}
        </div>
        {/* <!-- ------------- *** Confirm Password *** ------------- --> */}
        <div className={"mb-3 field confirm-password"}>
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={`form-control ${errors.confirmPassword && "invalid"}`}
            placeholder="Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error"> Password don't match</p>
          )}
          {/* <!-- ------------- *** Checkbox *** ------------- --> */}
        </div>
        <div className={"mb-3 form-check fs-6 field checkbox-field"}>
          <input
            type={"checkbox"}
            className={"form-check-input"}
            id={"checkbox"}
            name="checkbox"
            checked={values.checkbox}
            onChange={handleChange}
          />
          <label className={"form-check-label"} htmlFor={"checkbox"}>
            I accept the terms & Condition
          </label>
          {errors.checkbox && (
            <span className="error">Please accept the terms</span>
          )}
        </div>
        {/* <!-- ------------- *** Button *** ------------- --> */}
        <div className={"d-flex justify-content-center mt-3"}>
          <button
            type={"submit"}
            className={"btn btn-primary btn-custom-register text-center w-100"}
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
  );
};

export default RegisterForm;
