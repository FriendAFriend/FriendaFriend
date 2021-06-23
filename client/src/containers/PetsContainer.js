import Pets from '../components/Pets';
import PetForm from '../components/Pets';
import React from 'react';

function PetsContainer() {
  return (
    <div>
      <PetForm />
      <Pets />
    </div>
  );
}

export default PetsContainer;
