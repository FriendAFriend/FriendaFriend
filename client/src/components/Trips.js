import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getTrips from '../actions/actionCreators'

function Trips() {

  const dispatch = useDispatch()

  const userTrips = useSelector((state) => state.user.userTrips);

  //can only use useSelector once per comp. not sure how to get the active user here to then dispatch 


  useEffect(() => {
    dispatch(getTrips());
  }, []);
  

 
  return
  (<div>
    <h2>Upcoming Trips</h2>
  </div>)
}

export default Trips;
