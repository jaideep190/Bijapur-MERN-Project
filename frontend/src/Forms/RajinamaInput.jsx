import React, { useState } from 'react';
import RajinamaForm from './RajinamaForm';

const RajinamaInput = () => {
    const [formData, setFormData] = useState({
      name1: '',
      religion1: '',
      caste1: '',
      name2: '',
      religion2: '',
      caste2: '',
      name3: '',
      religion3: '',
      caste3: '',
      name4: '',
      religion4: '',
      caste4: '',
      name5: '',
      religion5: '',
      caste5: '',
      forestCrimes: '',
      date: '',
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
              <h1>Mohkama Forest</h1>
              <h3>Resignation (Raajinama)</h3>
              <p>Based on the investigation conducted in my/our presence</p>
              <div className="form-section">
                <h2>Witness Details</h2>
                <label className="form-label" htmlFor="name1">(1)</label>
                <input className="form-input" type="text" id="name1" name="name1" placeholder="Name" value={formData.name1} onChange={handleChange} />
                <input className="form-input" type="text" name="religion1" placeholder="Religion" value={formData.religion1} onChange={handleChange} />
                <input className="form-input" type="text" name="caste1" placeholder="Caste" value={formData.caste1} onChange={handleChange} />
              </div>
              <div className="form-section">
                <h2>Witness Details</h2>
                <label className="form-label" htmlFor="name2">(2)</label>
                <input className="form-input" type="text" id="name2" name="name2" placeholder="Name" value={formData.name2} onChange={handleChange} />
                <input className="form-input" type="text" name="religion2" placeholder="Religion" value={formData.religion2} onChange={handleChange} />
                <input className="form-input" type="text" name="caste2" placeholder="Caste" value={formData.caste2} onChange={handleChange} />
              </div>
              <div className="form-section">
                <h2>Witness Details</h2>
                <label className="form-label" htmlFor="name3">(3)</label>
                <input className="form-input" type="text" id="name3" name="name3" placeholder="Name" value={formData.name3} onChange={handleChange} />
                <input className="form-input" type="text" name="religion3" placeholder="Religion" value={formData.religion3} onChange={handleChange} />
                <input className="form-input" type="text" name="caste3" placeholder="Caste" value={formData.caste3} onChange={handleChange} />
              </div>
              <div className="form-section">
                <h2>Witness Details</h2>
                <label className="form-label" htmlFor="name4">(4)</label>
                <input className="form-input" type="text" id="name4" name="name4" placeholder="Name" value={formData.name4} onChange={handleChange} />
                <input className="form-input" type="text" name="religion4" placeholder="Religion" value={formData.religion4} onChange={handleChange} />
                <input className="form-input" type="text" name="caste4" placeholder="Caste" value={formData.caste4} onChange={handleChange} />
              </div>
              <div className="form-section">
                <h2>Witness Details</h2>
                <label className="form-label" htmlFor="name5">(5)</label>
                <input className="form-input" type="text" id="name5" name="name5" placeholder="Name" value={formData.name5} onChange={handleChange} />
                <input className="form-input" type="text" name="religion5" placeholder="Religion" value={formData.religion5} onChange={handleChange} />
                <input className="form-input" type="text" name="caste5" placeholder="Caste" value={formData.caste5} onChange={handleChange} />
              </div>
              <div className="line"></div>
              <div className="form-group">
                <label className="form-label" htmlFor="forestCrimes">About Forest related Crimes</label>
                <textarea className="form-input" id="forestCrimes" name="forestCrimes" rows="4" placeholder="Enter details about forest crimes..." value={formData.forestCrimes} onChange={handleChange}></textarea>
              </div>
              <input className="date-input" type="date" name="date" value={formData.date} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <RajinamaForm formData={formData} handleEditClick={handleEditClick} />
        )}
      </>
    );
};

export default RajinamaInput;

