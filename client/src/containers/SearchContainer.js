import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Listing from '../components/Listing';
import { fetchListings } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function SearchContainer() {
  const dispatch = useDispatch();
  const allListings = useSelector((state) => state.listings.listings);
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchListings());
    console.log(allListings, 'all listings');
    console.log(state, 'state');
  }, []);

  const renderListings = allListings.map((listing) => (
    <Listing key={listing.listing_id} name={listing.name} />
  ));
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     dispatch(fetchListings());
  //   };

  return (
    <div>
      <SearchBar />
      {renderListings}
    </div>
  );
}

export default SearchContainer;
