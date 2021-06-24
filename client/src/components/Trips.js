import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTrips from '../actions/actionCreators'

const Trips = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
<<<<<<< HEAD
=======
  
>>>>>>> dev

  useEffect(() => {
    console.log("current user is ", user)
  });
  

  return(
    <div>Hello</div>
  )
}

export default Trips;
