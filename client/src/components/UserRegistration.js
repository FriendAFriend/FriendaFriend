import React, { useState, useEffect } from 'react';
import { createUser } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

const UserRegistration = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    legal_name: '',
    pet_count: 0,
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state);
  // console.log('registering');
  //   useEffect(() => {
  //     dispatch(userActions.logout());
  //   }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    console.log(submitted)
    if (
      user.legal_name &&
      user.username &&
      user.pet_count &&
      user.password1 &&
      user.password2 &&
      user.email
    ) {
      dispatch(createUser(user)).then(
        () => console.log('success') //redirect to dashboard?
      );
    } else {
      window.alert(
        'You must fill out all input fields in order to register an account'
      );
    }
  }

  function onClear(e) {
    e.preventDefault();
    setUser({
      legal_name: '',
      pet_count: '',
      username: '',
      email: '',
      password1: '',
      password2: ''
    })
}

  return (
    <div className="">
      <h2>Register Below</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="">
          <label>Full Name</label>
          <input
            type="text"
            name="legal_name"
            value={user.legal_name}
            onChange={handleChange}
            className=""
          />
        </div>

        <div className="">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className=""
          />
        </div>
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
          <label>Pet Count</label>
          <input
            type="text"
            name="pet_count"
            value={user.pet_count}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="password"
            name="password1"
            value={user.password1}
            onChange={handleChange}
            className=""
          />
        </div>
        
        <div className="">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={user.password2}
            onChange={handleChange}
            className=""
          />
          {submitted && user.password1 !== user.password2 && (
            <div className="">Passwords Must match</div>
          )}
        </div>
        <div className="">
          <button className="" >Register</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
