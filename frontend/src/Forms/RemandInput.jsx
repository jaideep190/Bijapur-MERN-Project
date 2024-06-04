import React, { useState } from 'react';
import RemandForm from './RemandForm';

const RemandInput = () => {
  const [offenderCount, setOffenderCount] = useState(1); // Default to one offender
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
    offenders: [{ name: '', fatherName: '', caste: '', age: '', village: '', gram: '', tehsil: '', district: '', pin: '', arrestDate: '', arrestTime: '' }],
    preRemandDate: '',
    finalRemandDate: '',
    remark: '',
    finalReportSubmissionDate: '',
    magistrateName: '',
    magistrateDistrict: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, index] = name.split('-');
    if (index === undefined) {
      setFormData({ ...formData, [name]: value });
    } else {
      const newOffenders = [...formData.offenders];
      newOffenders[parseInt(index)][field] = value;
      setFormData({ ...formData, offenders: newOffenders });
    }
  };

  const handleOffenderCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setOffenderCount(count);
    const newOffenders = Array.from({ length: count }, () => ({ name: '', fatherName: '', caste: '', age: '', village: '', gram: '', tehsil: '', district: '', pin: '', arrestDate: '', arrestTime: '' }));
    setFormData({ ...formData, offenders: newOffenders });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEditClick = () => {
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
              <h2>Offender Details</h2>
              <label className="form-label" htmlFor="offenderCount">Number of Offenders</label>
              <input className="form-input" type="number" id="offenderCount" name="offenderCount" value={offenderCount} onChange={handleOffenderCountChange} min="1" required />

              <div className="form-section">
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Name</th>
                      <th>Father's Name</th>
                      <th>Caste</th>
                      <th>Age</th>
                      <th>Village</th>
                      <th>Gram</th>
                      <th>Tehsil</th>
                      <th>District</th>
                      <th>Pin</th>
                      <th>Arrest Date</th>
                      <th>Arrest Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.offenders.map((offender, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><input className="form-input" type="text" name={`name-${index}`} value={offender.name} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`fatherName-${index}`} value={offender.fatherName} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`caste-${index}`} value={offender.caste} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`age-${index}`} value={offender.age} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`village-${index}`} value={offender.village} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`gram-${index}`} value={offender.gram} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`tehsil-${index}`} value={offender.tehsil} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`district-${index}`} value={offender.district} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`pin-${index}`} value={offender.pin} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`arrestDate-${index}`} value={offender.arrestDate} onChange={handleChange} required /></td>
                        <td><input className="form-input" type="text" name={`arrestTime-${index}`} value={offender.arrestTime} onChange={handleChange} required /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
        <RemandForm formData={formData} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default RemandInput;