import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getTrips} from '../actions/actionCreators'
import ImageGallery from 'react-image-gallery';

const Trips =  () => {

  const dispatch = useDispatch()
  const [lisitings, setListings] = useState([])
  const state =  useSelector(state => state.user)
  const { loggedIn, user } = state

  useEffect(() => {
    console.log(loggedIn)
    console.log(user.user_id)
    if(loggedIn){
      dispatch(getTrips(user.user_id)).then(() => {
        console.log("successfully sent userId to getTrips")
      })
    }
    const { userTrips } = state
    console.log(userTrips)
  }, [user]);
  
//  const { userTrips } = state
//  console.log(userTrips)

//  const testObj = []

// userTrips.forEach(el => {
//   testObj.push({original: el})
// })

  return(
    <div className="">
      
      {/* <ImageGallery items={testObj} /> */}
    </div>
  )
}

export default Trips;
