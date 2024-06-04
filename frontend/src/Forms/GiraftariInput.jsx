import React, { useState } from 'react';
import GiraftariForm from './GiraftariForm';

const GiraftariInput = () => {
  const [formData, setFormData] = useState({
    policeStation: '',
    crimeNumber: '',
    name: '',
    fathersName: '',
    mothersName: '',
    age: '',
    address: '',
    dateTime: '',
    placeOfArrest: '',
    officerName: '',
    witness1: '',
    witness2: '',
    friendRelative: '',
    items: '',
    signature: '',
    officerSignature: ''
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
              <h2>Police Station / District</h2>
              <label className="form-label" htmlFor="policeStation">Police Station / District</label>
              <input className="form-input" type="text" id="policeStation" name="policeStation" value={formData.policeStation} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Crime Number</h2>
              <label className="form-label" htmlFor="crimeNumber">Crime Number</label>
              <input className="form-input" type="text" id="crimeNumber" name="crimeNumber" value={formData.crimeNumber} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Details of the Arrested Person</h2>
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

              <label className="form-label" htmlFor="fathersName">Father's Name</label>
              <input className="form-input" type="text" id="fathersName" name="fathersName" value={formData.fathersName} onChange={handleChange} required />

              <label className="form-label" htmlFor="mothersName">Mother's Name</label>
              <input className="form-input" type="text" id="mothersName" name="mothersName" value={formData.mothersName} onChange={handleChange} required />

              <label className="form-label" htmlFor="age">Age</label>
              <input className="form-input" type="text" id="age" name="age" value={formData.age} onChange={handleChange} required />

              <label className="form-label" htmlFor="address">Address</label>
              <input className="form-input" type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Date and Time of Arrest</h2>
              <label className="form-label" htmlFor="dateTime">Date and Time of Arrest</label>
              <input className="form-input" type="text" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Place of Arrest</h2>
              <label className="form-label" htmlFor="placeOfArrest">Place of Arrest</label>
              <input className="form-input" type="text" id="placeOfArrest" name="placeOfArrest" value={formData.placeOfArrest} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Name and Position of the Arresting Officer</h2>
              <label className="form-label" htmlFor="officerName">Name and Position of the Arresting Officer</label>
              <input className="form-input" type="text" id="officerName" name="officerName" value={formData.officerName} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Witnesses Present at the Time of Arrest</h2>
              <label className="form-label" htmlFor="witness1">Witness 1</label>
              <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} required />

              <label className="form-label" htmlFor="witness2">Witness 2</label>
              <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Name and Address of the Friend/Relative Informed</h2>
              <label className="form-label" htmlFor="friendRelative">Name and Address of the Friend/Relative</label>
              <input className="form-input" type="text" id="friendRelative" name="friendRelative" value={formData.friendRelative} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Items Found on the Arrested Person</h2>
              <label className="form-label" htmlFor="items">Items Found on the Arrested Person</label>
              <input className="form-input" type="text" id="items" name="items" value={formData.items} onChange={handleChange} required />
            </div>
            <div className="form-section">
              <h2>Signatures</h2>
              <label className="form-label" htmlFor="signature">Arrested Person's Signature</label>
              <input className="form-input" type="text" id="signature" name="signature" value={formData.signature} onChange={handleChange} required />

              <label className="form-label" htmlFor="officerSignature">Officer's Signature</label>
              <input className="form-input" type="text" id="officerSignature" name="officerSignature" value={formData.officerSignature} onChange={handleChange} required />
            </div>
            <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <GiraftariForm formData={formData} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default GiraftariInput;
