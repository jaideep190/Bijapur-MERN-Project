import React, { useState } from 'react';
import GiraftariForm from './GiraftariForm';

const GiraftariInput = () => {
  const [formData, setFormData] = useState({
    policeStationDistrict: '',
    crimeNumber: '',
    accusedName: '',
    fatherName: '',
    motherName: '',
    age: '',
    address: '',
    arrestDateTime: '',
    placeOfArrest: '',
    arrestingOfficer: '',
    witness1: '',
    witness2: '',
    relativeNotified: '',
    itemsFound: '',
    signatureArrestedPerson: '',
    signatureOfficer: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="form-container">
          <form onSubmit={handleSubmit} id="giraftariForm">
            <h1>Arrest Warrant Details</h1>
            <div className="form-section">
              <h2>Case Details</h2>
              <label className="form-label" htmlFor="policeStationDistrict">Police Station / District</label>
              <input className="form-input" type="text" id="policeStationDistrict" name="policeStationDistrict" value={formData.policeStationDistrict} onChange={handleChange} required />

              <label className="form-label" htmlFor="crimeNumber">POR Number</label>
              <input className="form-input" type="text" id="crimeNumber" name="crimeNumber" value={formData.crimeNumber} onChange={handleChange} required />

              <label className="form-label" htmlFor="accusedName">Name</label>
              <input className="form-input" type="text" id="accusedName" name="accusedName" value={formData.accusedName} onChange={handleChange} required />

              <label className="form-label" htmlFor="fatherName">Father's Name</label>
              <input className="form-input" type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

              <label className="form-label" htmlFor="motherName">Mother's Name</label>
              <input className="form-input" type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required />

              <label className="form-label" htmlFor="age">Age</label>
              <input className="form-input" type="text" id="age" name="age" value={formData.age} onChange={handleChange} required />

              <label className="form-label" htmlFor="address">Address</label>
              <input className="form-input" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Arrest Details</h2>
              <label className="form-label" htmlFor="arrestDateTime">Date and Time of Arrest</label>
              <input className="form-input" type="text" id="arrestDateTime" name="arrestDateTime" value={formData.arrestDateTime} onChange={handleChange} required />

              <label className="form-label" htmlFor="placeOfArrest">Place of Arrest</label>
              <input className="form-input" type="text" id="placeOfArrest" name="placeOfArrest" value={formData.placeOfArrest} onChange={handleChange} required />

              <label className="form-label" htmlFor="arrestingOfficer">Name and position of the arresting officer</label>
              <input className="form-input" type="text" id="arrestingOfficer" name="arrestingOfficer" value={formData.arrestingOfficer} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Witness and Notification Details</h2>
              <label className="form-label" htmlFor="witness1">Name of witness present at the time of arrest</label>
              <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} required />

              <label className="form-label" htmlFor="witness2">Name of second witness present at the time of arrest</label>
              <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} required />

              <label className="form-label" htmlFor="relativeNotified">Name and address of the friend/relative of the arrested person or the person identified to whom the arrest information is given</label>
              <input className="form-input" type="text" id="relativeNotified" name="relativeNotified" value={formData.relativeNotified} onChange={handleChange} required />

              <label className="form-label" htmlFor="itemsFound">Details of items found on the arrested person at the time of arrest, if any</label>
              <input className="form-input" type="text" id="itemsFound" name="itemsFound" value={formData.itemsFound} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Signatures</h2>
              <label className="form-label" htmlFor="signatureArrestedPerson">Signature of the arrested person</label>
              <input className="form-input" type="text" id="signatureArrestedPerson" name="signatureArrestedPerson" value={formData.signatureArrestedPerson} onChange={handleChange} required />

              <label className="form-label" htmlFor="signatureOfficer">Signature of the officer</label>
              <input className="form-input" type="text" id="signatureOfficer" name="signatureOfficer" value={formData.signatureOfficer} onChange={handleChange} required />
            </div>

            <button className="sunmit-button" onClick={() => setIsSubmitted(true)} type="button">Show Form</button>
            <button type="submit" className="submit-button">Submit Form</button>
          </form>
        </div>
      ) : (
        <GiraftariForm formData={formData} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default GiraftariInput;
