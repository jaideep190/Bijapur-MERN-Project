import React, { useState } from 'react';
import RajinamaForm from './RajinamaForm';

const RajinamaInput = () => {
  const [formData, setFormData] = useState({
    suspect1: '',
    fatherName1: '',
    caste1: '',
    residence1: '',
    suspect2: '',
    fatherName2: '',
    caste2: '',
    residence2: '',
    suspect3: '',
    fatherName3: '',
    caste3: '',
    residence3: '',
    suspect4: '',
    fatherName4: '',
    caste4: '',
    residence4: '',
    suspect5: '',
    fatherName5: '',
    caste5: '',
    residence5: '',
    forestRelatedCrimes: '',
    date: '',
    month: '',
    year: '',
    witness1: '',
    witness2: '',
    investigationOfficer: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <form onSubmit={handleSubmit} id="rajinamaForm">
            <h1>Rajinama Form</h1>
            <div className="form-section">
              <h2>Suspects Details</h2>
              {[1, 2, 3, 4, 5].map((index) => (
                <React.Fragment key={index}>
                  <label className="form-label" htmlFor={`suspect${index}`}>Suspect {index}</label>
                  <input className="form-input" type="text" id={`suspect${index}`} name={`suspect${index}`} value={formData[`suspect${index}`]} onChange={handleChange} required />
                  <label className="form-label" htmlFor={`fatherName${index}`}>Father's Name {index}</label>
                  <input className="form-input" type="text" id={`fatherName${index}`} name={`fatherName${index}`} value={formData[`fatherName${index}`]} onChange={handleChange} required />
                  <label className="form-label" htmlFor={`caste${index}`}>Caste {index}</label>
                  <input className="form-input" type="text" id={`caste${index}`} name={`caste${index}`} value={formData[`caste${index}`]} onChange={handleChange} required />
                  <label className="form-label" htmlFor={`residence${index}`}>Residence {index}</label>
                  <input className="form-input" type="text" id={`residence${index}`} name={`residence${index}`} value={formData[`residence${index}`]} onChange={handleChange} required />
                </React.Fragment>
              ))}
            </div>
            <div className="form-section">
              <h2>Other Details</h2>
              <label className="form-label" htmlFor="forestRelatedCrimes">Forest Related Crimes</label>
              <textarea className="form-input" id="forestRelatedCrimes" name="forestRelatedCrimes" value={formData.forestRelatedCrimes} onChange={handleChange} required />
              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-input" type="text" id="date" name="date" value={formData.date} onChange={handleChange} required />
              <label className="form-label" htmlFor="month">Month</label>
              <input className="form-input" type="text" id="month" name="month" value={formData.month} onChange={handleChange} required />
              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-input" type="text" id="year" name="year" value={formData.year} onChange={handleChange} required />
              <label className="form-label" htmlFor="witness1">Witness 1</label>
              <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} required />
              <label className="form-label" htmlFor="witness2">Witness 2</label>
              <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} required />
              <label className="form-label" htmlFor="investigationOfficer">Investigation Officer</label>
              <input className="form-input" type="text" id="investigationOfficer" name="investigationOfficer" value={formData.investigationOfficer} onChange={handleChange} required />
            </div>
            <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <RajinamaForm formData={formData} handleEditClick={handleEditClick} /> // Pass handleEditClick function as props to RajinamaForm
      )}
    </>
  );
};

export default RajinamaInput;
