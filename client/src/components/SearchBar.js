import React, { useState, useEffect } from 'react';
import { fetchListings, filterListings } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar(props) {
  const search = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListings);
  }, []);

  return (
    <div className="searchBar">
      <h2>Search Listings</h2>
      <p>Find a Loving Home to Swap</p>
      <form name="form" onSubmit={props.handleSearch}>
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Listings: </span>
        </label>
        <input
          type="text"
          id="s-input"
          placeholder="Enter Name"
          name="name"
          value={props.filtered.name}
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
