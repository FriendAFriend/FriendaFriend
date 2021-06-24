import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Listing from '../components/Listing';
import {
  fetchListings,
  filterListingsByName,
  filterListingsByCity,
  updateListing
} from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function SearchContainer() {
  const dispatch = useDispatch();
  //const allListings = useSelector((state) => state.listings.filteredListings);
  const state = useSelector((state) => state);
  console.log(state)
  const { listings, user} = state
  const allListings = listings.filteredListings
  const userId = user.user.user_id

  const [filtered, setFilter] = useState({ name: '' });
  useEffect(() => {
    dispatch(fetchListings());
    console.log(allListings, 'all listings');
    console.log(state, 'state');
  }, [userId]);

  const bookListing = () => {
    console.log(user.user.user_id)
    dispatch(updateListing(user.user.user_id)).then(()=>{
      console.log("heheheheh")
    })
  };

  const renderListings = allListings.map((listing) => (
    <Listing key={listing.listing_id} listing={listing} bookListing={bookListing}/>
  ));
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchListings());
    console.log(allListings, 'all listings');
  };
 

  const handleChange = (e) => {
    e.preventDefault();
    console.log('target: ', e.target.value);
    const { name, value } = e.target;
    setFilter((filtered) => ({ ...filtered, [name]: value }));
    dispatch(filterListingsByName(allListings, e.target.value));
    console.log(filtered);
  };

  return (
    <div className="columnCenterContainer">
      <SearchBar
        className="row"
        handleSearch={handleSearch}
        filtered={filtered}
        handleChange={handleChange}
    
      />
      <div className="row">{renderListings}</div>
    </div>
  );
}

export default SearchContainer;
