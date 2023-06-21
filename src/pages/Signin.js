import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/logotest.png';
import Appstore from '../assets/icons/Appstore.svg';
import Googleplay from '../assets/icons/Googleplay.svg';
import '../../src/css/signin.css'; 


import { Link } from 'react-router-dom';

const Signin = () => {
  const [signupData, setSignupData] = useState({});
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve the signup data from local storage
    const storedData = localStorage.getItem('signupData');
    if (storedData) {
      setSignupData(JSON.parse(storedData));
    }
  }, []);

  const handleLoginInput = (e) => {
    setLoginInput(e.target.value);
    setError('');
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = () => {
   
    if (signupData.mobileOrEmail !== loginInput && signupData.username !== loginInput) {
      setError('Invalid login input.');
      return;
    }

    // Check if the entered password matches the stored password
    if (signupData.password !== password) {
      setError('Invalid password.');
      return;
    }

  
    console.log('Logged in successfully!');
  };

  return (
    <>
      <div className='main_div'>
        <div className='form_login'>
          <div className='d-flex justify-content-center  mb-4 mt-2'>
            <img src={logo1} alt='logo' className='logo' />
          </div>
          <h1 className='text-center lable_signup'>Log in</h1>
          <div className='second_div'>
            <input
              type='text'
              placeholder='Phone number, username or email'
              className='input_field'
              value={loginInput}
              onChange={handleLoginInput}
            />
            <input
              type='password'
              placeholder='Password'
              className='input_field password_input'
              value={password}
              onChange={handlePasswordInput}
            />
            {error && <div className='error_message'>{error}</div>}
            <button className='button__log' onClick={handleLogin}>
              Log in
            </button>
            <div className='option_or'>
              <div>
                <hr className='hr_line' />
              </div>
              <div className='or'>OR</div>
              <div>
                <hr className='hr_line' />
              </div>
            </div>
            <div>
              <Link to='/forgot-password' className='forget_pass'>
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className='signup mt-3 d-flex  justify-content-center'>
          Don't have an account?<Link to='/signup' className=''>Signup</Link>
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
    </>
  );
};

export default Signin;