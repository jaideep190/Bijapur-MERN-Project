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
    investigationOfficer: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSuspects = [...formData.suspects];
    updatedSuspects[index][name] = value;
    setFormData({ ...formData, suspects: updatedSuspects });
  };

  const handleAddSuspect = () => {
    setFormData(prevState => ({
      ...prevState,
      suspects: [...prevState.suspects, { name: '', fatherName: '', caste: '', residence: '' }]
    }));
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
          <form onSubmit={handleSubmit} id="rajinamaForm">
            <h1>Rajinama Form Details</h1>
            {formData.suspects.map((suspect, index) => (
              <div key={index} className="form-section">
                <label className="form-label" htmlFor={`suspect${index + 1}`}>Suspect {index + 1}</label>
                <input className="form-input" type="text" id={`suspect${index + 1}`} name="name" value={suspect.name} onChange={(e) => handleChange(e, index)} required />

                <label className="form-label" htmlFor={`fatherName${index + 1}`}>Father's Name {index + 1}</label>
                <input className="form-input" type="text" id={`fatherName${index + 1}`} name="fatherName" value={suspect.fatherName} onChange={(e) => handleChange(e, index)} required />

                <label className="form-label" htmlFor={`caste${index + 1}`}>Caste {index + 1}</label>
                <input className="form-input" type="text" id={`caste${index + 1}`} name="caste" value={suspect.caste} onChange={(e) => handleChange(e, index)} required />

                <label className="form-label" htmlFor={`residence${index + 1}`}>Residence {index + 1}</label>
                <input className="form-input" type="text" id={`residence${index + 1}`} name="residence" value={suspect.residence} onChange={(e) => handleChange(e, index)} required />
              </div>
            ))}
            <button className="add-suspect-button" type="button" onClick={handleAddSuspect}>Add Suspect</button>
            <div className="form-section">
              <h2>Suspects Details</h2>
              {suspects.map((suspect, index) => (
                <React.Fragment key={index}>
                  <label className="form-label" htmlFor={`name${index}`}>Suspect {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`name${index}`}
                    name="name"
                    value={suspect.name}
                    onChange={(e) => handleSuspectChange(index, e)}
                  />
                  <label className="form-label" htmlFor={`fatherName${index}`}>Father's Name {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`fatherName${index}`}
                    name="fatherName"
                    value={suspect.fatherName}
                    onChange={(e) => handleSuspectChange(index, e)}
                  />
                  <label className="form-label" htmlFor={`caste${index}`}>Caste {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`caste${index}`}
                    name="caste"
                    value={suspect.caste}
                    onChange={(e) => handleSuspectChange(index, e)}
                  />
                  <label className="form-label" htmlFor={`residence${index}`}>Residence {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`residence${index}`}
                    name="residence"
                    value={suspect.residence}
                    onChange={(e) => handleSuspectChange(index, e)}
                  />
                </React.Fragment>
              ))}
            </div>

            <div className="form-section">
              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-input" type="text" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />

              <label className="form-label" htmlFor="month">Month</label>
              <input className="form-input" type="text" id="month" name="month" value={formData.month} onChange={(e) => setFormData({ ...formData, month: e.target.value })} required />

              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-input" type="text" id="year" name="year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required />
            </div>

            <div className="form-section">
              <label className="form-label" htmlFor="witness1">Witness 1</label>
              <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={(e) => setFormData({ ...formData, witness1: e.target.value })} required />

              <label className="form-label" htmlFor="witness2">Witness 2</label>
              <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={(e) => setFormData({ ...formData, witness2: e.target.value })} required />
            </div>

            <div className="form-section">
              <label className="form-label" htmlFor="investigationOfficer">Investigation Officer</label>
              <input className="form-input" type="text" id="investigationOfficer" name="investigationOfficer" value={formData.investigationOfficer} onChange={(e) => setFormData({ ...formData, investigationOfficer: e.target.value })} required />
            </div>
            
            <button className="submit-button" type="button" onClick={() => setIsSubmitted(true)}>Show Form</button>
            <button type="submit" className="submit-button">Submit Form</button>
          </form>
        </div>
      ) : (
        <RajinamaForm formData={formData} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default RajinamaInput;
