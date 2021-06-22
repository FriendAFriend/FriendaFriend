import React, { useState, useEffect } from 'react'
import { createAccount } from '../actions/actionCreators' // add more actions
import { useDispatch, useSelector }  from 'react-redux'



const registerUser = (user) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password1: '',
        password2: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const registering = useSelector(state => state.registration.registering)

    useEffect(() => {
        dispatch(userActions.logout())
    }, [])

    function handleChange(e) {
        const {name, value} = e.target
        setUser(user => ({ ...user, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        setSubmitted(true)
        if(user.firstname && user.lastname && user.username && user.password && user.password2 && user.email){
            dispatch(userActions.register(user))
            .then(() =>  console.log("success") //redirect to dashboard?
            )
        } else {
            window.alert("You must fill out all input fields in order to register an account")
        }
    }

    return (
        <div className=''>
            <h2>Register Below</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className=''>
                    <label>First Name</label>
                    <input type="text" name="firsName" value={user.firstname} onChange={handleChange} className=''/>
                </div>
                <div className=''>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastname} onChange={handleChange} className=''/>
                </div>
                <div className=''>
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className=''/>
                </div>
                <div className=''>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className=''/>
                </div>
                <div className=''>
                    <label>Password</label>
                    <input type="text" name="passwrod1" value={user.password1} onChange={handleChange} className=''/>
                </div>
                <div className=''>
                    <label>Confirm Password</label>
                    <input type="text" name="username" value={user.password2} onChange={handleChange} className=''/>
                    {submitted && user.password1 !== user.password2 &&
                        <div className="">Passwords Must match</div>
                    }
                </div>
                <div className="">
                    <button className="">Register</button>
                    <link to="/login" className="">Cancel</link>
                </div>
            </form>
        </div>

    )

}

export { registerUser }