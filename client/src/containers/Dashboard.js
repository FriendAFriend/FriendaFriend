import React from 'react';
import CreateListing from '../components/CreateListing';
function Dashboard() {
  return (
    <div>
      <CreateListing />
      <div>
        <h2>UPCOMING TRIP</h2>
      </div>
      <div>
        <h2>VISITING GUESTS</h2>
      </div>
    </div>
  );
}

export default Dashboard;
