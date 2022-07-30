import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/SignIn.css';
import { ErrorMessage } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
import { SignInAuth } from '../api/SignInAuth';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errorMsg: false,
    loading: false,
    redirectToDashboard: false,
  });

  const { username, password, errorMsg, loading, redirectToDashboard } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, errorMsg: false });
  }

  const formSubmit = (e) => {
    e.preventDefault();

    //I'm setting up client side validation here.
    if(isEmpty(username) ||  isEmpty(password)) {
      setFormData({ ...formData, errorMsg: 'Please fill out all fields', loading: false });
    }
    else {
      const { username, password } = formData;
      const data = { username, password }; // data is an object with the username, email, and password properties.
      setFormData({ ...formData, loading: true });

      SignIn(data);

      SignInAuth(data).then(response => {
        console.log(response);
        setFormData({
          username: '',
          password: '',
          loading: false,
          successMsg: response.data.SuccessMessage, 
        })
      }).catch(err => {
        console.log('Axios Signup error',err);
        setFormData({ ...formData, loading: false , errorMsg: err.response.data.errorMessage });
      });
    }
  }

  const SignInForm = () => (
    <form className='form-signup' onSubmit={formSubmit} noValidate>
      <h1 className='SignInReminder'>Welcome Back</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="username" name='username' value={username} onChange={handleChange}/>
        <label htmlFor='floatingInput'>Username</label>
      </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} name='password' onChange={handleChange}/>
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <div className='form-group'>
        <button className='btn btn-lg btn-danger btn-block' type='submit'>Sign In</button>
      </div>
      <p className='text'>
        Don't have an account <Link to='/Register'>Register</Link>
      </p>

    </form>
  )

  return <div className="SignIn-container">
  {errorMsg && ErrorMessage(errorMsg)}
  {loading && <div className='text-center pb-4'>{showLoading()}</div>}
  {SignInForm()}
    </div>
}

export default SignIn;