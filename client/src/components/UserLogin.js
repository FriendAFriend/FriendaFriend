import React, { useState, useEffect } from 'react';
import { loginUser } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

const UserLogin = () => {
    const dispatch = useDispatch();
    const [logininfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const [invalidLogin, setInvalidLogin] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginInfo((logininfo) => ({ ...logininfo, [name]: value }));
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        setSubmitted(true);
        if (
          user.username &&
          user.password 
        ) {
        try {dispatch(loginUser(user))
            } catch(err) {
                setInvalidLogin(true)
            }
          
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
                value={logininfo.username}
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
               {submitted && invalidLogin && (
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