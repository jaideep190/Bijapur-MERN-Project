import React, { useState } from 'react';
import RajinamaForm from './RajinamaForm';

const RajinamaInput = () => {
  const [formData, setFormData] = useState({
    suspectCount: 5,
    forestRelatedCrimes: '',
    date: '',
    month: '',
    year: '',
    witness1: '',
    witness2: '',
    investigationOfficer: '',
  });

  const [suspects, setSuspects] = useState(Array.from({ length: formData.suspectCount }, () => ({
    name: '',
    fatherName: '',
    caste: '',
    residence: ''
  })));

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuspectChange = (index, e) => {
    const { name, value } = e.target;
    const newSuspects = [...suspects];
    newSuspects[index] = { ...newSuspects[index], [name]: value };
    setSuspects(newSuspects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEditClick = () => {
    setIsSubmitted(false);
  };

  const handleSuspectCountChange = (e) => {
    const count = parseInt(e.target.value);
    setFormData({ ...formData, suspectCount: count });
    setSuspects(Array.from({ length: count }, () => ({
      name: '',
      fatherName: '',
      caste: '',
      residence: ''
    })));
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="form-container">
          <form onSubmit={handleSubmit} id="rajinamaForm">
            <h1>Rajinama Form</h1>
            <div className="form-section">
              <label className="form-label" htmlFor="suspectCount">Number of Suspects</label>
              <input
                className="form-input"
                type="number"
                id="suspectCount"
                name="suspectCount"
                value={formData.suspectCount}
                onChange={handleSuspectCountChange}
                min="1"
              />
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
              <h2>Other Details</h2>
              <label className="form-label" htmlFor="forestRelatedCrimes">Forest Related Crimes</label>
              <textarea className="form-input" id="forestRelatedCrimes" name="forestRelatedCrimes" value={formData.forestRelatedCrimes} onChange={handleChange} />
              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-input" type="text" id="date" name="date" value={formData.date} onChange={handleChange} />
              <label className="form-label" htmlFor="month">Month</label>
              <input className="form-input" type="text" id="month" name="month" value={formData.month} onChange={handleChange} />
              <label className="form-label" htmlFor="year">Year</label>
              <input className="form-input" type="text" id="year" name="year" value={formData.year} onChange={handleChange} />
              <label className="form-label" htmlFor="witness1">Witness 1</label>
              <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} />
              <label className="form-label" htmlFor="witness2">Witness 2</label>
              <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} />
              <label className="form-label" htmlFor="investigationOfficer">Investigation Officer</label>
              <input className="form-input" type="text" id="investigationOfficer" name="investigationOfficer" value={formData.investigationOfficer} onChange={handleChange} />
            </div>
            <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
            <button className="form-button" type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <RajinamaForm formData={formData} suspects={suspects} handleEditClick={handleEditClick} />
      )}
    </>
  );
};

export default RajinamaInput;
``