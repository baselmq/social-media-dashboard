import React, { useState } from 'react';
import '../../src/css/Signup.css'; 
import logo1 from '../assets/images/logotest.png';
import Appstore from '../assets/icons/Appstore.svg';
import Googleplay from '../assets/icons/Googleplay.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    mobileOrEmail: '',
    fullName: '',
    username: '',
    password: '',
  });
  
  const [showPopup, setShowPopup] = useState(false);

  const handleMobileOrEmailChange = (e) => {
    setMobileOrEmail(e.target.value);
    setErrors({ ...errors, mobileOrEmail: '' });
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setErrors({ ...errors, fullName: '' });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrors({ ...errors, username: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: '' });
  };

  const handleSignup = () => {
    // Perform input validation using regex
    const mobileOrEmailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const fullNameRegex = /^[a-zA-Z\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let validationErrors = {};

    if (!mobileOrEmail) {
      validationErrors.mobileOrEmail = 'Please enter your mobile number or email address.';
    } else if (!mobileOrEmailRegex.test(mobileOrEmail)) {
      validationErrors.mobileOrEmail = 'Invalid mobile number or email address.';
    }

    if (!fullName) {
      validationErrors.fullName = 'Please enter your full name.';
    } else if (!fullNameRegex.test(fullName)) {
      validationErrors.fullName = 'Invalid full name. Only alphabets and spaces are allowed.';
    }

    if (!username) {
      validationErrors.username = 'Please enter a username.';
    } else if (!usernameRegex.test(username)) {
      validationErrors.username = 'Invalid username. Username must contain 3-30 alphanumeric characters.';
    }

    if (!password) {
      validationErrors.password = 'Please enter a password.';
    }
    // else if (!passwordRegex.test(password)) {
    //   validationErrors.password =
    //     'Invalid password. Password must contain at least 8 characters, including one letter and one number.';
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = {
      mobileOrEmail,
      fullName,
      username,
      password,
    };
    localStorage.setItem('signupData', JSON.stringify(formData));
    console.log(formData);

    // Show the popup
    setShowPopup(true);
  };

  return (
    <>
      <div className='main_div'>
        <div className='form_signup'>
          <div className='d-flex justify-content-center mb-4 mt-2'>
            <img src={logo1} alt='logo' className='logo' />
          </div>
          <div>
            <h1 className='text-center lable_signup'>Sign up</h1>
          </div>
          <div className='second_div'>
            <div className='text-center signup_header'>
              <p className=''>Sign up to see posts, photos, and videos from your friends.</p>
            </div>

            <input
              type='text'
              placeholder='Mobile number or email'
              className='input_field'
              value={mobileOrEmail}
              onChange={handleMobileOrEmailChange}
            />
            {errors.mobileOrEmail && <div className='error_message'>{errors.mobileOrEmail}</div>}

            <input
              type='text'
              placeholder='Full name'
              className='input_field'
              value={fullName}
              onChange={handleFullNameChange}
            />
            {errors.fullName && <div className='error_message'>{errors.fullName}</div>}

            <input
              type='text'
              placeholder='Username'
              className='input_field'
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <div className='error_message'>{errors.username}</div>}

            <input
              type='password'
              placeholder='Password'
              className='input_field password_input'
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className='error_message'>{errors.password}</div>}

            {password && (
              <ul className='password-conditions'>
                <li className={password.match(/.*[a-z].*/) ? 'checked' : 'unchecked'}>
                  Contains at least one lowercase letter
                </li>
                <li className={password.match(/.*[A-Z].*/) ? 'checked' : 'unchecked'}>
                  Contains at least one uppercase letter
                </li>
                <li className={password.match(/.*\d.*/) ? 'checked' : 'unchecked'}>
                  Contains at least one number
                </li>
                <li className={password.length >= 8 ? 'checked' : 'unchecked'}>
                  Is at least 8 characters long
                </li>
              </ul>
            )}

            <button className='button__log' onClick={handleSignup}>
              Sign up
            </button>
          </div>
        </div>
        <div className='signup mt-3 d-flex justify-content-center'>
          Have an account? <Link to='/' className=''> Log in</Link>
        </div>
        <div className=' app mt-4  mb-4'>
          <div className='text-center'>
            <p>Get the app</p>
          </div>
          <div className='d-flex  justify-content-center gap-3 mt-2 mb-5'>
            <Link>
              <img src={Googleplay} alt='Google Play' />
            </Link>
            <Link>
              <img src={Appstore} alt='App Store' />
            </Link>
          </div>
        </div>
      </div>

     {/*  */}
      {showPopup && (
        <div className='popup'>
          <div className='popup-contentsign'>
            <h2>Signup Successful!</h2>
            <p>Thank you for signing up. Enjoy your experience on our platform.</p>
            <button className='button__log' onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;