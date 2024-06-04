import React, { useState } from 'react';
import RemandForm from './RemandForm';

const RemandInput = () => {
  const [formData, setFormData] = useState({
    caseName: '',
    district: '',
    caseNo: '',
    caseDate: '',
    sections: '',
    incidentDate: '',
    incidentPlace: '',
    issueDate: '',
    complainantName: '',
    accused1Name: '',
    accused1FatherName: '',
    accused1Caste: '',
    accused1Age: '',
    accused1Village: '',
    accused1Gram: '',
    accused1Tehsil: '',
    accused1District: '',
    accused1Pin: '',
    accused1ArrestDate: '',
    accused1ArrestTime: '',
    // Add similar fields for accused 2-5
    preRemandDate: '',
    finalRemandDate: '',
    remark: '',
    finalReportSubmissionDate: '',
    magistrateName: '',
    magistrateDistrict: ''
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
          <form onSubmit={handleSubmit} id="remandForm">
            <h1>Remand Form Details</h1>
            <div className="form-section">
              <h2>Case Details</h2>
              <label className="form-label" htmlFor="caseName">Case Name</label>
              <input className="form-input" type="text" id="caseName" name="caseName" value={formData.caseName} onChange={handleChange} required />

              <label className="form-label" htmlFor="district">District</label>
              <input className="form-input" type="text" id="district" name="district" value={formData.district} onChange={handleChange} required />

              <label className="form-label" htmlFor="caseNo">Case No</label>
              <input className="form-input" type="text" id="caseNo" name="caseNo" value={formData.caseNo} onChange={handleChange} required />

              <label className="form-label" htmlFor="caseDate">Case Date</label>
              <input className="form-input" type="text" id="caseDate" name="caseDate" value={formData.caseDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="sections">Sections</label>
              <input className="form-input" type="text" id="sections" name="sections" value={formData.sections} onChange={handleChange} required />

              <label className="form-label" htmlFor="incidentDate">Incident Date</label>
              <input className="form-input" type="text" id="incidentDate" name="incidentDate" value={formData.incidentDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="incidentPlace">Incident Place</label>
              <input className="form-input" type="text" id="incidentPlace" name="incidentPlace" value={formData.incidentPlace} onChange={handleChange} required />

              <label className="form-label" htmlFor="issueDate">Issue Date</label>
              <input className="form-input" type="text" id="issueDate" name="issueDate" value={formData.issueDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="complainantName">Complainant Name</label>
              <input className="form-input" type="text" id="complainantName" name="complainantName" value={formData.complainantName} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Accused Details</h2>
              <label className="form-label" htmlFor="accused1Name">Accused 1 Name</label>
              <input className="form-input" type="text" id="accused1Name" name="accused1Name" value={formData.accused1Name} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1FatherName">Accused 1 Father's Name</label>
              <input className="form-input" type="text" id="accused1FatherName" name="accused1FatherName" value={formData.accused1FatherName} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Caste">Accused 1 Caste</label>
              <input className="form-input" type="text" id="accused1Caste" name="accused1Caste" value={formData.accused1Caste} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Age">Accused 1 Age</label>
              <input className="form-input" type="text" id="accused1Age" name="accused1Age" value={formData.accused1Age} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Village">Accused 1 Village</label>
              <input className="form-input" type="text" id="accused1Village" name="accused1Village" value={formData.accused1Village} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Gram">Accused 1 Gram</label>
              <input className="form-input" type="text" id="accused1Gram" name="accused1Gram" value={formData.accused1Gram} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Tehsil">Accused 1 Tehsil</label>
              <input className="form-input" type="text" id="accused1Tehsil" name="accused1Tehsil" value={formData.accused1Tehsil} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1District">Accused 1 District</label>
              <input className="form-input" type="text" id="accused1District" name="accused1District" value={formData.accused1District} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1Pin">Accused 1 Pin</label>
              <input className="form-input" type="text" id="accused1Pin" name="accused1Pin" value={formData.accused1Pin} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1ArrestDate">Accused 1 Arrest Date</label>
              <input className="form-input" type="text" id="accused1ArrestDate" name="accused1ArrestDate" value={formData.accused1ArrestDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="accused1ArrestTime">Accused 1 Arrest Time</label>
              <input className="form-input" type="text" id="accused1ArrestTime" name="accused1ArrestTime" value={formData.accused1ArrestTime} onChange={handleChange} required />

              {/* Add similar fields for accused 2-5 */}
            </div>

            <div className="form-section">
              <h2>Remand Details</h2>
              <label className="form-label" htmlFor="preRemandDate">Pre-Remand Date</label>
              <input className="form-input" type="text" id="preRemandDate" name="preRemandDate" value={formData.preRemandDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="finalRemandDate">Final Remand Date</label>
              <input className="form-input" type="text" id="finalRemandDate" name="finalRemandDate" value={formData.finalRemandDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="remark">Remark</label>
              <input className="form-input" type="text" id="remark" name="remark" value={formData.remark} onChange={handleChange} required />
            </div>

            <div className="form-section">
              <h2>Additional Details</h2>
              <label className="form-label" htmlFor="finalReportSubmissionDate">Final Report Submission Date</label>
              <input className="form-input" type="text" id="finalReportSubmissionDate" name="finalReportSubmissionDate" value={formData.finalReportSubmissionDate} onChange={handleChange} required />

              <label className="form-label" htmlFor="magistrateName">Magistrate Name</label>
              <input className="form-input" type="text" id="magistrateName" name="magistrateName" value={formData.magistrateName} onChange={handleChange} required />

              <label className="form-label" htmlFor="magistrateDistrict">Magistrate District</label>
              <input className="form-input" type="text" id="magistrateDistrict" name="magistrateDistrict" value={formData.magistrateDistrict} onChange={handleChange} required />
            </div>

            <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <RemandForm formData={formData} handleEditClick={handleEditClick} /> // Pass handleEditClick function as props to RemandForm
      )}
    </>
  );
};

export default RemandInput;
