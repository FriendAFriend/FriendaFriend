import React from 'react';
import CreateListing from '../components/CreateListing';
import Trips from '../components/Trips'
function Dashboard() {
  return (
    <div>
      <CreateListing />
      <div>
        <h2>UPCOMING TRIP</h2>
        <Trips/>
      </div>
      <div>
        <h2>VISITING GUESTS</h2>
      </div>
    </div>
  );
}

export default Dashboard;
