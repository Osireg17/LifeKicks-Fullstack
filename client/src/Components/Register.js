import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/isEmpty';
import {ErrorMessage, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import {RegisterAuth} from '../api/auth';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const { username, email, password, password2, successMsg, errorMsg, loading } = formData;
  
  const handleChange = (e) => {
    setFormData({ ...formData, 
      [e.target.name]: e.target.value,
      errorMsg: '',
      successMsg: '',
    }); // ...formData is the spread operator, which takes the formData object and spreads it out into a new object. 
    //[e.target.name] is the name of the input field, and e.target.value is the value of the input field.
  }
  
  const formSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted. I didn't not know this was a thing.
    // if (password !== password2) {
    //   setFormData({ ...formData, errorMsg: 'Passwords do not match', loading: false });
    // } else {
    //   setFormData({ ...formData, errorMsg: false, successMsg: true });
    // }
    // if(username === '' || email === '' || password === '' || password2 === '') {
    //   setFormData({ ...formData, errorMsg: 'Please fill out all fields', loading: false });
    // }
    if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
      setFormData({ ...formData, errorMsg: 'Please fill out all fields', loading: false });
    }
    else if(!isEmail(email)) {
      setFormData({ ...formData, errorMsg: 'Please enter a valid email', loading: false });
    }
    else if(password !== password2) {
      setFormData({ ...formData, errorMsg: 'Passwords do not match', loading: false });
    }
    
    else {
      const { username, email, password } = formData;
      const data = { username, email, password }; // data is an object with the username, email, and password properties.
      setFormData({ ...formData, loading: true });// ...formData is the spread operator, which takes the formData object and spreads it out into a new object.


      RegisterAuth(data).then(response => {
        console.log(response);
        setFormData({
          username: '',
          email: '',
          password: '',
          password2: '',
          loading: false,
          successMsg: response.data.SuccessMessage, //I have not created a success message property will do when i create the server.
        })
      }).catch(err => {
        console.log('Axios Signup error',err);
        setFormData({ ...formData, loading: false , errorMsg: err.response.data.errorMessage });
      });
    }
  }

  const SignUpForm = () => (
    <form className='form-signup' onSubmit={formSubmit} noValidate>
      <h1 className='RegisterReminder'>Please register</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="username" name='username' value={username} onChange={handleChange}/>
        <label htmlFor='floatingInput'>Username</label>
      </div>

      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={email} onChange={handleChange}/>
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} name='password' onChange={handleChange}/>
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingInput" placeholder="Confirm Password" name='password2' value={password2} onChange={handleChange}/>
        <label htmlFor='floatingInput'>Confirm Password</label>
      </div>
      <div className='form-group'>
        <button className='btn btn-lg btn-danger btn-block' type='submit'>Register</button>
      </div>
      <p className='text'>
        Have an account? <Link to='/SignIn'>Sign In</Link>
      </p>

    </form>
  )
  return <div className="Register-container">
    {successMsg && showSuccessMsg(successMsg)}
    {errorMsg && ErrorMessage(errorMsg)}
    {loading && <div className='text-center pb-4'>{showLoading()}</div>}
    {SignUpForm()}
      </div>
}

export default Register