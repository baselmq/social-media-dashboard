import { useContext, useState } from "react";
import { FormCxt } from "../context/FormContext";
import axios from "axios";
import { RegisterCxt } from "../context/RegisterProvider";
// import { useNavigate } from "react-router-dom";

const useFormValidation = () => {
  const { setEmailPass } = useContext(FormCxt);
  const { setIsRegistered } = useContext(RegisterCxt);

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false, // Add checkbox property
  });
  //   const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailNotAvailable, setIsEmailNotAvailable] = useState(false); // State to track email availability

  // Define validation functions outside of the component
  const validateEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation logic
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passRegex.test(password);
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    // Confirm password validation logic
    return password === confirmPassword && confirmPassword !== "";
  };

  const validateCheckbox = (isChecked) => {
    // Checkbox validation logic
    return isChecked;
  };

  // Use a single function to handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: inputValue,
    }));
    if (isSubmitted) {
      validateField(name, inputValue);
    }
  };

  // Use a single function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    const isFormValid = validateForm();
    if (isFormValid) {
      // Handle form submission for valid form
      console.log("Form submitted successfully!");
      checkEmailAvailability(values.email);
    }
  };

  // Use a single function to validate a field by name and value
  const validateField = (name, value) => {
    let isValid = true;
    switch (name) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "confirmPassword":
        isValid = validateConfirmPassword(values.password, value);
        break;
      case "checkbox":
        isValid = validateCheckbox(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));
  };

  // Use a single function to validate the whole form by looping over the values object
  const validateForm = () => {
    let isFormValid = true;
    const newErrors = {};
    Object.entries(values).forEach(([name, value]) => {
      let isValid = true;
      switch (name) {
        case "email":
          isValid = validateEmail(value);
          break;
        case "password":
          isValid = validatePassword(value);
          break;
        case "confirmPassword":
          isValid = validateConfirmPassword(values.password, value);
          break;
        case "checkbox":
          isValid = validateCheckbox(value);
          break;
        default:
          break;
      }
      newErrors[name] = !isValid;
      if (!isValid) {
        isFormValid = false;
      }
    });
    setErrors(newErrors);
    return isFormValid;
  };

  // Use async/await syntax for checking email availability
  const checkEmailAvailability = async (email) => {
    try {
      const url = "http://localhost:4000/users";
      const config = {
        params: {
          email: email,
        },
      };

      const response = await axios.get(url, config);
      const data = response.data;
      const isEmpty = Array.isArray(data) && data.length === 0;

      if (isEmpty) {
        // Email is available
        setIsEmailNotAvailable(false);
        const data = { email: values.email, pass: values.password };
        setEmailPass(data);
        setIsRegistered(true);
        console.log("Email is available");
        // navigate("/home", { state: { email: values.email } });
      } else {
        // Email is already in the database
        setIsEmailNotAvailable(true);
        setIsRegistered(false);
        console.log("Email is already in the database");
      }
    } catch (error) {
      console.error("Error checking email availability:", error);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isEmailNotAvailable,
  };
};

export default useFormValidation;

// import { useContext, useState } from "react";
// import { FormCxt } from "../context/FormContext";
// import axios from "axios";

// const useFormValidation = () => {
//   const { setEmailPass } = useContext(FormCxt);

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     checkbox: false, // Add checkbox property
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isEmailNotAvailable, setIsEmailNotAvailable] = useState(false); // State to track email availability

//   const validateEmail = (email) => {
//     // Email validation logic
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password validation logic
//     const passRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passRegex.test(password);
//   };

//   const validateConfirmPassword = (password, confirmPassword) => {
//     // Confirm password validation logic
//     return password === confirmPassword && confirmPassword !== "";
//   };

//   const validateCheckbox = (isChecked) => {
//     // Checkbox validation logic
//     return isChecked;
//   };

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const inputValue = type === "checkbox" ? checked : value;

//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: inputValue,
//     }));
//     if (isSubmitted) {
//       validateField(name, inputValue);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);

//     const isFormValid = validateForm();
//     if (isFormValid) {
//       // Handle form submission for valid form
//       console.log("Form submitted successfully!");
//       checkEmailAvailability(values.email);
//     }
//   };

//   const validateField = (name, value) => {
//     let isValid = true;
//     if (name === "email") {
//       isValid = validateEmail(value);
//     } else if (name === "password") {
//       isValid = validatePassword(value);
//     } else if (name === "confirmPassword") {
//       isValid = validateConfirmPassword(values.password, value);
//     } else if (name === "checkbox") {
//       isValid = validateCheckbox(value);
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: !isValid,
//     }));
//   };

//   const validateForm = () => {
//     let isFormValid = true;
//     const newErrors = {};
//     Object.entries(values).forEach(([name, value]) => {
//       let isValid = true;
//       if (name === "email") {
//         isValid = validateEmail(value);
//       } else if (name === "password") {
//         isValid = validatePassword(value);
//       } else if (name === "confirmPassword") {
//         isValid = validateConfirmPassword(values.password, value);
//       } else if (name === "checkbox") {
//         isValid = validateCheckbox(value);
//       }
//       newErrors[name] = !isValid;
//       if (!isValid) {
//         isFormValid = false;
//       }
//     });
//     setErrors(newErrors);
//     return isFormValid;
//   };

//   const checkEmailAvailability = (email) => {
//     const url = "http://localhost:4000/users";
//     const config = {
//       params: {
//         email: email,
//       },
//     };

//     axios
//       .get(url, config)
//       .then((response) => {
//         const data = response.data;
//         const isEmpty = Array.isArray(data) && data.length === 0;

//         if (isEmpty) {
//           // Email is available
//           setIsEmailNotAvailable(false);
//           setEmailPass(values.email);
//           console.log("Email is available");
//         } else {
//           // Email is already in the database
//           setIsEmailNotAvailable(true);
//           console.log("Email is already in the database");
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking email availability:", error);
//       });
//   };

//   return {
//     values,
//     errors,
//     handleChange,
//     handleSubmit,
//     isEmailNotAvailable,
//   };
// };

// export default useFormValidation;
