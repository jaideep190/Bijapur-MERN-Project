import React, { useState } from 'react';
import SupurthinamaForm from './SupurthinamaForm';

const SupurthinamaInput = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    caste: '',
    profession: '',
    residence: '',
    tehsil: '',
    district: '',
    date: '',
    month: '',
    year: '',
    witness1: '',
    witness2: ''
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
        <form onSubmit={handleSubmit} id="supurthinamaForm">
          <h1>Supurthinama Details</h1>
          <div className="form-section">
            <h2>Personal Details</h2>
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label className="form-label" htmlFor="fathersName">Father's Name</label>
            <input className="form-input" type="text" id="fathersName" name="fathersName" value={formData.fathersName} onChange={handleChange} required />

            <label className="form-label" htmlFor="caste">Caste</label>
            <input className="form-input" type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} required />

            <label className="form-label" htmlFor="profession">Profession</label>
            <input className="form-input" type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} required />

            <label className="form-label" htmlFor="residence">Residence</label>
            <input className="form-input" type="text" id="residence" name="residence" value={formData.residence} onChange={handleChange} required />

            <label className="form-label" htmlFor="tehsil">Tehsil</label>
            <input className="form-input" type="text" id="tehsil" name="tehsil" value={formData.tehsil} onChange={handleChange} required />

            <label className="form-label" htmlFor="district">District</label>
            <input className="form-input" type="text" id="district" name="district" value={formData.district} onChange={handleChange} required />
          </div>

          <div className="form-section">
            <h2>Date Details</h2>
            <label className="form-label" htmlFor="date">Date</label>
            <input className="form-input" type="text" id="date" name="date" value={formData.date} onChange={handleChange} required />

            <label className="form-label" htmlFor="month">Month</label>
            <input className="form-input" type="text" id="month" name="month" value={formData.month} onChange={handleChange} required />

            <label className="form-label" htmlFor="year">Year</label>
            <input className="form-input" type="text" id="year" name="year" value={formData.year} onChange={handleChange} required />
          </div>

          <div className="form-section">
            <h2>Witness Details</h2>
            <label className="form-label" htmlFor="witness1">Witness 1</label>
            <input className="form-input" type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} required />

            <label className="form-label" htmlFor="witness2">Witness 2</label>
            <input className="form-input" type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} required />
          </div>

          <button className="form-button" onClick={handleSubmit} type="button">Show Form</button>
          <button className="form-button" type="submit">Submit</button>
        </form>
        </div>
      ) : (
        <SupurthinamaForm formData={formData} handleEditClick={handleEditClick} /> // Pass handleEditClick function as props to SupurthinamaForm
      )}
    </>
  );
};

export default SupurthinamaInput;

