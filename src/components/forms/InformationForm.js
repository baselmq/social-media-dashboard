import React, { useContext } from "react";
import "../../css/login.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form"; // import react-hook-form
import UploadImage from "../cache_image/UploadImage";
import { FormCxt } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const InformationForm = () => {
  const { emailPass, images } = useContext(FormCxt);
  const navigate = useNavigate();
  // destructure properties from useForm object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle form submission and display data in console
  const onSubmit = async (data) => {
    const file = images;
    const reader = new FileReader();

    reader.onload = async function (e) {
      const img = e.target.result;
      const sendData = { ...data, ...emailPass, image: img };

      const url = "http://localhost:4000/users";
      try {
        const response = await axios.post(url, sendData);
        // Handle success response
        console.log(response.data);

        // Redirect to the home page
        const userData = { ...emailPass, status: "login" };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/profile", { state: { email: emailPass.email } });
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 register__form">
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit(onSubmit)} // use handleSubmit to handle form submission
      >
        {/* -----------------------First Row----------------------- */}
        <UploadImage />
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              {...register("firstName", { required: true, minLength: 2 })} // register firstName field and add validation rules
            />
            {errors.firstName && (
              <div className="error">Please enter your first name.</div>
            )}
          </div>
          {/* <!-- Last Name --> */}
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              {...register("lastName", { required: true, minLength: 2 })} // register lastName field and add validation rules
            />
            {errors.lastName && (
              <div className="error">Please enter your last name.</div>
            )}
          </div>
        </div>

        {/* -----------------------Second Row----------------------- */}
        <div className="row">
          {/* <!-- Mobile number --> */}
          <div className="col-md-6 mb-3">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text details-962"
                id="inputGroupPrepend"
              >
                +962
              </span>
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                {...register("mobileNumber", {
                  required: true,
                  minLength: 9,
                  maxLength: 9,
                  pattern: /^7[789].*/,
                })}
              />
            </div>
            {errors.mobileNumber && (
              <div className="error">Please enter your mobile number.</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              {...register("gender", { required: true })} // register gender field and add validation rule
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          {errors.gender && <div className="error">Please select gender.</div>}
        </div>

        {/* -----------------------Third Row----------------------- */}
        <div className="row">
          {/* <!-- Birthday --> */}
          <div className="col-md-6 mb-3">
            <label htmlFor="birthday" className="form-label">
              Birthday:
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              {...register("birthday", { required: true })}
            />

            {errors.birthday && (
              <div className="error">Please enter your birthday.</div>
            )}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              {...register("location", { required: true, minLength: 3 })} // register firstName field and add validation rules
            />
            {errors.location && (
              <div className="error">Please enter your location.</div>
            )}
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <div className={"d-flex justify-content-center mt-3"}>
          <button
            type={"submit"}
            className={"btn btn-primary btn-custom-register text-center w-50"}
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};
export default InformationForm;
