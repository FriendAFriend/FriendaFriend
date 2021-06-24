import React from 'react';

function Listing(props) {
  const { listing_name, city } = props.listing;

  return (
    <div className="card">
      <h2>{listing_name.toUpperCase()}</h2>
      <h2>{city.toUpperCase()}</h2>
      <button onClick={() => props.bookListing()}>Add Listing</button>
    </div>
  );
}

export default Listing;
