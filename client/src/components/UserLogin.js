import React, { useState, useEffect } from 'react';
import { loginUser } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'react-hook-form';

const UserLogin = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false);
    

    function handleChange(e) {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        setSubmitted(true);
        if (
          user.username &&
          user.password 
        ) {
            dispatch(loginUser(user))
           const loginFailure = useSelector(state => state.userReducer.user)
        } else {
          window.alert(
            'You must provide a username and password'
          );
        }
      }
      return (
        <div className="">
          <h2>Login</h2>
          <form name="form" onSubmit={handleSubmit}>
            <div className="">
              <label>Username</label>
              <input
                type="text"
                name="Username"
                value={user.username}
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
               {submitted && loginFailure && (
                <div className="">Username or Password incorrect</div>
              )}
            </div>
            <div className="">
              <button className="">Login</button>
            </div>
          </form>
        </div>
      );

}


export default UserLogin;