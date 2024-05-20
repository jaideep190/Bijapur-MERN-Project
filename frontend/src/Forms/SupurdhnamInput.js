import React, { useState } from 'react';
import axios from 'axios';
import SupurdhnamaForm from './SupurdhnamaForm';

const SupurdhnamaInput = () => {
    const [formData, setFormData] = useState({
        surrenderingPerson: '',
        sonDaughter: '',
        caste: '',
        profession: '',
        residentOf: '',
        tehsil: '',
        district: '',
        forestOfficerDetails: '',
        seizedGoodsDetails: '',
        seizedGoodsDate: '',
        witness1: '',
        witness2: '',
    });
    const [error, setError] = useState('');

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        setFormData({ ...formData, toggle: 1 });
    };

    const saveData = async event => {
        event.preventDefault();
        const formValues = Object.values(formData);
        if (formValues.some(value => value === '')) {
            alert('Please fill in all the fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/savesupurdhnama', formData);
            console.log(response);
            alert(response.data.msg);
            if (response.data.msg === 'User Created!') {
                handleSubmit();
            }
        } catch (error) {
            setError({ error: error.message });
            console.error('Error:', error);
        }
    };

    const handleEditClick = () => {
        setFormData({ ...formData, toggle: 0 });
    };
    if (!formData.toggle) {
    return (
        <div className="container">
            <div>
                <h1 className="heading1">Mohkama Forest Department</h1>
                <h2 className="heading2">Supurdannama (Surrender Document)</h2>
                <br />
            </div>
            <form onSubmit={saveData} id="supurdhnamaForm">
                <div className="section">
                    <label className="input-label" htmlFor="surrenderingPerson">Surrendering Person</label>
                    <input type="text" id="surrenderingPerson" name="surrenderingPerson" value={formData.surrenderingPerson} onChange={handleChange} />
                    <label className="input-label" htmlFor="sonDaughter">Son/Daughter of</label>
                    <input type="text" id="sonDaughter" name="sonDaughter" value={formData.sonDaughter} onChange={handleChange} />
                    <label className="input-label" htmlFor="caste">Caste</label>
                    <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} />
                    <label className="input-label" htmlFor="profession">Profession</label>
                    <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} />
                    <label className="input-label" htmlFor="residentOf">Resident of</label>
                    <input type="text" id="residentOf" name="residentOf" value={formData.residentOf} onChange={handleChange} />
                    <label className="input-label" htmlFor="tehsil">Tehsil</label>
                    <input type="text" id="tehsil" name="tehsil" value={formData.tehsil} onChange={handleChange} />
                    <label className="input-label" htmlFor="district">District</label>
                    <input type="text" id="district" name="district" value={formData.district} onChange={handleChange} />
                    <div className="section">
                        <h2>Officer Handover Details</h2>
                        <label className="input-label" htmlFor="forestOfficerDetails">Forest Officer Name</label>
                        <input type="text" id="forestOfficerDetails" name="forestOfficerDetails" value={formData.forestOfficerDetails} onChange={handleChange} />
                        <label className="input-label" htmlFor="seizedGoodsDetails">Details of Seized Forest Goods</label>
                        <input type="text" id="seizedGoodsDetails" name="seizedGoodsDetails" value={formData.seizedGoodsDetails} onChange={handleChange} />
                        <label className="input-label" htmlFor="seizedGoodsDate">Date of Seized Forest Goods</label>
                        <input type="text" id="seizedGoodsDate" name="seizedGoodsDate" value={formData.seizedGoodsDate} onChange={handleChange} />
                    </div>
                    <h2>Witnesses</h2>
                    <label className="input-label" htmlFor="witness1">Name of Witness 1</label>
                    <input type="text" id="witness1" name="witness1" value={formData.witness1} onChange={handleChange} />
                    <label className="input-label" htmlFor="witness2">Name of Witness 2</label>
                    <input type="text" id="witness2" name="witness2" value={formData.witness2} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Show Form</button>
                    <button type="submit">Register Crime</button>
            </form>
        </div>
    );
} else {
    return <SupurdhnamaForm formData={formData} handleEditClick={handleEditClick} />;
}
};

export default SupurdhnamaInput;
