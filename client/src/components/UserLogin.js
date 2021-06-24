import React, { useState, useEffect,  } from 'react';
import { loginUser } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { set } from 'react-hook-form';

const UserLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  });
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  //const loginFailed = useSelector((state) => state.user.loginErr)
  const state = useSelector(state => state.user);
  const { loggedIn, loginErr } = state;

  useEffect(() => {
      if(loggedIn){
          history.push('/dashboard')
      }
      //console.log("was fired", state)
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.email && user.password) {
      dispatch(loginUser(user));
    } else {
      window.alert('You must provide a username and password');
    }
  }
  return (
    <div className="">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className=""
          />
          {submitted && loginErr && (
            <div className="">Email or Password incorrect</div>
          )}
        </div>
        <div className="">
          <button className="">Login</button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
