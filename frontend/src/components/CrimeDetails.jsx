// frontend/src/components/CrimeDetailsComponent.jsx

import React from 'react';
import { useGetCrimeDetailsQuery } from '../slices/usersApiSlice';

const CrimeDetails = () => {
  const { data, error, isLoading } = useGetCrimeDetailsQuery();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Crime Details</h1>
      <ul>
        {data.map((crime) => (
          <li key={crime.id}>{crime.porNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeDetails;