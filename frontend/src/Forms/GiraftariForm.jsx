import React from 'react';
// import '../styles/GiraftariForm.css'

const GiraftariForm = ({ formData, handleEditClick }) => {
  return (
    <div className="form-container">
      <h1>Arrest Warrant Details</h1>
      <div className="form-section">
        <h2>Police Station / District</h2>
        <p>{formData.policeStation}</p>
      </div>
      <div className="form-section">
        <h2>Crime Number</h2>
        <p>{formData.crimeNumber}</p>
      </div>
      <div className="form-section">
        <h2>Details of the Arrested Person</h2>
        <p>Name: {formData.name}</p>
        <p>Father's Name: {formData.fathersName}</p>
        <p>Mother's Name: {formData.mothersName}</p>
        <p>Age: {formData.age}</p>
        <p>Address: {formData.address}</p>
      </div>
      <div className="form-section">
        <h2>Date and Time of Arrest</h2>
        <p>{formData.dateTime}</p>
      </div>
      <div className="form-section">
        <h2>Place of Arrest</h2>
        <p>{formData.placeOfArrest}</p>
      </div>
      <div className="form-section">
        <h2>Name and Position of the Arresting Officer</h2>
        <p>{formData.officerName}</p>
      </div>
      <div className="form-section">
        <h2>Witnesses Present at the Time of Arrest</h2>
        <p>1) {formData.witness1}</p>
        <p>2) {formData.witness2}</p>
      </div>
      <div className="form-section">
        <h2>Name and Address of the Friend/Relative Informed</h2>
        <p>{formData.friendRelative}</p>
      </div>
      <div className="form-section">
        <h2>Items Found on the Arrested Person</h2>
        <p>{formData.items}</p>
      </div>
      <div className="form-section">
        <h2>Signatures</h2>
        <p>Arrested Person's Signature: {formData.signature}</p>
        <p>Officer's Signature: {formData.officerSignature}</p>
      </div>
      <button className="form-button" onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default GiraftariForm;
