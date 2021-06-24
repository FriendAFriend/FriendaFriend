import React from 'react';

function Listing(props) {
  const { listing_name, city, listing_id, pending_status, booked_by } = props.listing;

  return (
    <div className="card">
      <h2>{listing_name.toUpperCase()}</h2>
      <h2>{city.toUpperCase()}</h2>
      <button onClick={(e) => props.bookListing(listing_id, pending_status, booked_by )}>Add Listing</button>
    </div>
  );
}

export default Listing;
