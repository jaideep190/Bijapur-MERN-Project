import React from 'react';
import '../styles/RajinamaForm.css';

function RajinamaForm({ formData, handleEditClick }) {
  // Destructure the formData object and provide default values if undefined
  const { personDetails = [], crimeDetails = '', date = '', witnesses = [] } = formData || {};

  return (
    <>
      <head>
        <title>Rajinama</title>
      </head>
      <body className="rajinama-body">
        <div className="rajinama-container">
          <h1 className="rajinama-heading">Mohkama Forest</h1>
          <h3 className="rajinama-heading">Resignation (Rajinama)</h3>
          <p>Based on the investigation conducted in my/our presence</p>
          <div className="rajinama-content">
            {personDetails.map((person, index) => (
              <div className="rajinama-section" key={index}>
                <h3 className="rajinama-text">
                  {index + 1}. Name: {person.name}, Religion: {person.religion}, Caste: {person.caste}
                </h3>
              </div>
            ))}
            <div className="rajinama-section">
              <h3 className="rajinama-text">
                About Forest related Crimes: {crimeDetails}.
              </h3>
            </div>
            <div className="rajinama-section">
              <h3 className="rajinama-text">
                Date: {date}.<br />
                Names of witnesses:<br />
                {witnesses.map((witness, index) => (
                  <span key={index}>{witness}<br /></span>
                ))}
              </h3>
            </div>
          </div>
        </div>
        <button onClick={handleEditClick} className="edit-button">Edit</button>
      </body>
    </>
  );
}

export default RajinamaForm;
