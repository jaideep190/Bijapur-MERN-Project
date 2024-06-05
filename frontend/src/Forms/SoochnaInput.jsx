import React, { useState } from 'react';
import SoochnaForm from './SoochnaForm';

const SoochnaInput = () => {
  const [formData, setFormData] = useState({
    caseNumber: '',
    date: '',
    suspectName: '',
    fatherName: '',
    village: '',
    policeStation: '',
    district: '',
    sections: '',
    reason: '',
    arrestDate: '',
    arrestTime: '',
    magistrate: '',
    arrestedPersonName: '',
    relativeName: '',
    witness1Signature: '',
    witness2Signature: '',
    rangeOfficerSignature: ''
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
          <form onSubmit={handleSubmit} id="soochnaForm">
            <h1>Soochna Details</h1>
            <div className="form-section">
              <h2>Case Details</h2>
              <label className="form-label" htmlFor="caseNumber">POR Number</label>
              <input className="form-input" type="text" id="caseNumber" name="caseNumber" value={formData.caseNumber} onChange={handleChange} required />

              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-input" type="text" id="date" name="date" value={formData.date} onChange={handleChange} required />

              <label className="form-label" htmlFor="suspectName">Suspect Name</label>
              <input className="form-input" type="text" id="suspectName" name="suspectName" value={formData.suspectName} onChange={handleChange} required />

              <label className="form-label" htmlFor="fatherName">Father's Name</label>
              <input className="form-input" type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

              <label className="form-label" htmlFor="village">Village</label>
              <input className="form-input" type="text" id="village" name="village" value={formData.village} onChange={handleChange} required />

              <label className="form-label" htmlFor="policeStation">Police Station</label>
              <input className="form-input" type="text" id="policeStation" name="policeStation" value={formData.policeStation} onChange={handleChange} required />

              <label className="form-label" htmlFor="district">District</label>
              <input className="form-input" type="text" id="district" name="district" value={formData.district} onChange={handleChange} required />

              <label className="form-label" htmlFor="sections">Sections</label>
              <input className="form-input" type="text" id="sections" name="sections" value={formData.sections} onChange={handleChange} required />

              <label className="form-label" htmlFor="reason">Reason</label>
              <input className="form-input" type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} required />

              <label className="form-label" htmlFor="arrestDate">Arrest Date</label>
              <input className="form-input" type="text" id="arrestDate" name="arrestDate" value={formData.arrestDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="arrestTime">Arrest Time</label>
              <input className="form-input" type="text" id="arrestTime" name="arrestTime" value={formData.arrestTime} onChange={handleChange} required />

              <label className="form-label" htmlFor="magistrate">Magistrate</label>
              <input className="form-input" type="text" id="magistrate" name="magistrate" value={formData.magistrate} onChange={handleChange} required />

              <label className="form-label" htmlFor="arrestedPersonName">Arrested Person Name</label>
              <input className="form-input" type="text" id="arrestedPersonName" name="arrestedPersonName" value={formData.arrestedPersonName} onChange={handleChange} required />

              <label className="form-label" htmlFor="relativeName">Relative Name</label>
              <input className="form-input" type="text" id="relativeName" name="relativeName" value={formData.relativeName} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Signatures</h2>
              <label className="form-label" htmlFor="witness1Signature">Witness 1 Signature</label>
              <input className="form-input" type="text" id="witness1Signature" name="witness1Signature" value={formData.witness1Signature} onChange={handleChange} required />

              <label className="form-label" htmlFor="witness2Signature">Witness 2 Signature</label>
              <input className="form-input" type="text" id="witness2Signature" name="witness2Signature" value={formData.witness2Signature} onChange={handleChange} required />

              <label className="form-label" htmlFor="rangeOfficerSignature">Range Officer Signature</label>
              <input className="form-input" type="text" id="rangeOfficerSignature" name="rangeOfficerSignature" value={formData.rangeOfficerSignature} onChange={handleChange} required />
            </div>

            <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <SoochnaForm formData={formData} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default SoochnaInput;
