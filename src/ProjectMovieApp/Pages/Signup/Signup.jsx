import React, { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthContext';

import AuthLayout from '../../Components/Layouts/AuthLayout/AuthLayout';

import './Signup.scss';

const Signup = () => {

  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    // basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
    
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const success = signup(name, email, password);

    if (success) {

  alert(
    "Signup Successful!"
  );

  navigate("/login");

} else {

  setError(
    "User already exists"
  );
}
  }

  return (

    <AuthLayout>

      <div className='signup-page'>

        <div className='overlay'></div>

        <form
          className='signup-form'
          onSubmit={handleSubmit}
        >

          <h1>Movie World</h1>

          <p className='subtitle'>
            Create your account and explore unlimited movies
          </p>

          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className='error'>{error}</p>}

          <button type='submit'>
            Sign Up
          </button>

          <Link to='/login'>
            Already have an account? Login
          </Link>

        </form>

      </div>

    </AuthLayout>
  );
};

export default Signup;