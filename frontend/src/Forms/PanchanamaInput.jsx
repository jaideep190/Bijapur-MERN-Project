import React, { useState } from 'react';
import PanchanamaForm from './PanchanamaForm';

import '../styles/Panchanama.css';  // Adjust the path as necessary

const PanchanamaInput = () => {
  const [victimCount, setVictimCount] = useState(1);
  const [conditionCount, setConditionCount] = useState(1);
  const [formData, setFormData] = useState({
    forestOffice: '',
    date: '',
    offenders: [{ name: '', fatherName: '', age: '', address: '', offense: '' }],
    conditions: [{ condition: '' }],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEditClick = () => {
    setIsSubmitted(false);
  };

  const handleVictimCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setVictimCount(count);
    setFormData({
      ...formData,
      offenders: Array.from({ length: count }, () => ({ name: '', fatherName: '', age: '', address: '', offense: '' }))
    });
  };

  const handleConditionCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setConditionCount(count);
    setFormData({
      ...formData,
      conditions: Array.from({ length: count }, () => ({ condition: '' }))
    });
  };

  const handleChange = (e, index, key, section) => {
    const { value } = e.target;
    const updatedSection = [...formData[section]];
    updatedSection[index][key] = value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="form-container">
          <form onSubmit={handleSubmit} id="panchanamaForm">
            <h1>Panchanama Form</h1>
            <div className="form-section">
              <h2>Offenders' Information</h2>
              <div className="form-section">
                <label className="form-label" htmlFor="forestOffice">Forest Office:</label>
                <input className="form-input" type="text" id="forestOffice" value={formData.forestOffice} onChange={(e) => setFormData({ ...formData, forestOffice: e.target.value })} />
                <label className="form-label" htmlFor="date">Date:</label>
                <input className="form-input" type="text" id="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div className="form-section">
                <label className="form-label" htmlFor="victimCount">Number of Victims:</label>
                <input className="form-input" type="number" id="victimCount" value={victimCount} onChange={handleVictimCountChange} min="1" />
              </div>
              <div className="form-section">
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Name of Offender</th>
                      <th>Father's Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Type of Forest Offense</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.offenders.map((offender, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><input className="form-input" type="text" value={offender.name} onChange={(e) => handleChange(e, index, 'name', 'offenders')} /></td>
                        <td><input className="form-input" type="text" value={offender.fatherName} onChange={(e) => handleChange(e, index, 'fatherName', 'offenders')} /></td>
                        <td><input className="form-input" type="text" value={offender.age} onChange={(e) => handleChange(e, index, 'age', 'offenders')} /></td>
                        <td><input className="form-input" type="text" value={offender.address} onChange={(e) => handleChange(e, index, 'address', 'offenders')} /></td>
                        <td><input className="form-input" type="text" value={offender.offense} onChange={(e) => handleChange(e, index, 'offense', 'offenders')} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="form-section">
                <label className="form-label" htmlFor="conditionCount">Number of Conditions:</label>
                <input className="form-input" type="number" id="conditionCount" value={conditionCount} onChange={handleConditionCountChange} min="1" />
              </div>
              <div className="form-section">
                <h3>Conditions for Compromise</h3>
                <ol>
                  {formData.conditions.map((condition, index) => (
                    <li key={index}>
                      <input className="form-input" type="text" value={condition.condition} onChange={(e) => handleChange(e, index, 'condition', 'conditions')} />
                    </li>
                  ))}
                </ol>
              </div>
              <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
              <button className="form-button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <PanchanamaForm formData={formData} handleEditClick={handleEditClick} /> // Pass handleEditClick function as props to PanchanamaForm
      )}
    </>
  );
};

export default PanchanamaInput;
