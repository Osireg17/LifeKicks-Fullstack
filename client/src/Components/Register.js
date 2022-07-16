import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';

const Register = () => {

  const SignUpForm = () => (
    <form className='form-signup'>
      <h1 className='RegisterReminder'>Please register</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="username"/>
        <label htmlFor='floatingInput'>Username</label>
      </div>

      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label htmlFor='floatingInput'>Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label htmlFor='floatingPassword'>Password</label>
      </div>

      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingInput" placeholder="Confirm Password"/>
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
      </div>
}

export default Register