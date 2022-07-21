import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/isEmpty';
import ErrorMessage from '../helpers/message';

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
    setFormData({ ...formData, [e.target.name]: e.target.value }); // ...formData is the spread operator, which takes the formData object and spreads it out into a new object. 
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
      setFormData({ ...formData, errorMsg: false, successMsg: true });
      console.log('Form submitted');
    }
  }

  const SignUpForm = () => (
    <form className='form-signup' onSubmit={formSubmit}>
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
    {SignUpForm()}
    {errorMsg && ErrorMessage(errorMsg)}
      </div>
}

export default Register