// frontend/src/components/CrimeDetailsComponent.jsx

import React from 'react';
import { useGetCrimeDetailsQuery } from '../slices/usersApiSlice';
import Loader from './Loader';

const ExistingPorNumbers = () => {
  const { data, error, isLoading } = useGetCrimeDetailsQuery();
  
  if (isLoading) {
    return (
        <div>
      <h1>Existing POR Numbers</h1>
      <Loader/>
    </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Existing POR Numbers</h1>
      <ul>
        {data.map((crime) => (
          <li key={crime.id}>{crime.porNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingPorNumbers;