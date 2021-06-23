import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createListing } from '../actions/actionCreators';

const CreateListing = () => {
  const userId = ''; //fetch userid
  const [submitted, setSubmitted] = useState(false);
  const [listing, setListing] = useState({
    user_id: userId,
    city: '',
    description: '',
    photo: [],
    rating: 0,
    start_date: new Date(),
    end_date: new Date(),
    pending_status: 'available',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setListing((listing) => ({ ...listing, [name]: value }));
  }

  function handleChangePhotos(e) {
    const { name, value } = e.target;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setListing((listing) => ({ ...listing, ...listing.photo.push(value) }));
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (
      listing.user_id &&
      listing.city &&
      listing.description &&
      listing.photo.length &&
      listing.start_date &&
      listing.end_date &&
      listing.pending_status
    ) {
      dispatch(createListing(listing)).then(
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
    setListing({
      city: '',
      description: '',
      photo: [],
      rating: 0,
      start_date: new Date(),
      end_date: new Date(),
      pending_status: 'available',
    });
  }

  return (
    <div className="">
      <h2>Create a New Listing</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="">
          <label>Photos</label>
          <input
            type="file"
            accept="image/*"
            name="city"
            value={listing.city}
            onChange={handleChangePhotos}
            className=""
          />
        </div>
        <div className="">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={listing.city}
            onChange={handleChange}
            className=""
          />
        </div>

        <div className="">
          <label>description</label>
          <input
            type="text"
            name="description"
            value={listing.description}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          <label>Start Date</label>
          <input
            type="date"
            name="start_date"
            value={listing.start_date}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          <label>End Date</label>
          <input
            type="date"
            name="end_date"
            value={listing.end_date}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="">
          <label>Choose This Listings Availability</label>
          <select className="">
            <option
              value={listing.pending_status}
              name="pending_status"
              onChange={handleChange}
            >
              Available
            </option>
            <option
              value={listing.pending_status}
              name="pending_status"
              onChange={handleChange}
            >
              Pending
            </option>
            <option
              value={listing.pending_status}
              name="pending_status"
              onChange={handleChange}
            >
              Booked
            </option>
          </select>
          {submitted &&
            (!listing.end_date ||
              !listing.start_date ||
              !listing.city ||
              !listing.photo.length ||
              !listing.pending_status ||
              !listing.description) && (
              <div className="">Pleae fill out all fields</div>
            )}
        </div>
        <div className="">
          <button className="" onClick={onClear}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateListing;
