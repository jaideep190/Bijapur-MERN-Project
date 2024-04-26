import React, { useState } from 'react';
import axios from 'axios';
import PorForm from './PorForm';
import '../styles/PorInput.css'; 

const PorInput = () => {
    const [formData, setFormData] = useState({
        porNumber: '',
        culpritName: '',
        fatherName: '',
        culpritAddress: '',
        caste: '',
        crimeType: '',
        crimeSection: '',
        crimePlace: '',
        crimeDate: '',
        seizedGoods: '',
        witnessNames: '',
        areaAssistant: '',
        rangeOfficer: '',
        areaOfficer: '',
        vma: '',
        premises: '',
        toggle: 0,
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
            console.log("called")
            const response = await axios.post('http://localhost:5000/api/users/savepor', formData);
            console.log(response);
            alert(response.data.msg);
            if (response.data.msg === 'User Created!') {
                handleSubmit();
            }
        } catch (error) {
            setError({ error: error.message });
            console.error('Error bro: ', error);
        }
    };

    const handleEditClick = () => {
        setFormData({ ...formData, toggle: 0 });
    };

    if (!formData.toggle) {
        return (
            <>
            <div class="form-container">
                <h1>POR DETAILS</h1>
                <form onSubmit={saveData} id="porDetailsForm">
                    <div class="form-section">
                        <h2>Culprit Details</h2>
                        <label class="form-label" htmlFor="porNumber">POR</label>
                        <input class="form-input" type="text" id="porNumber" name="porNumber" value={formData.porNumber} onChange={handleChange} />
                        <label class="form-label" htmlFor="culpritName">Name</label>
                        <input class="form-input" type="text" id="culpritName" name="culpritName" value={formData.culpritName} onChange={handleChange} />
                        <label class="form-label" htmlFor="fatherName">Father's Name</label>
                        <input class="form-input" type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                        <label class="form-label" htmlFor="culpritAddress">Address</label>
                        <input class="form-input" type="text" id="culpritAddress" name="culpritAddress" value={formData.culpritAddress} onChange={handleChange} />
                        <label class="form-label" htmlFor="caste">Caste</label>
                        <input class="form-input" type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} />
                    </div>
                    <div class="form-section">
                        <h2>Crime Details</h2>
                        <label class="form-label" htmlFor="crimeType">Type</label>
                        <input class="form-input" type="text" id="crimeType" name="crimeType" value={formData.crimeType} onChange={handleChange} />
                        <label class="form-label" htmlFor="crimeSection">Section</label>
                        <input class="form-input" type="text" id="crimeSection" name="crimeSection" value={formData.crimeSection} onChange={handleChange} />
                        <label class="form-label" htmlFor="crimePlace">Place</label>
                        <input class="form-input" type="text" id="crimePlace" name="crimePlace" value={formData.crimePlace} onChange={handleChange} />
                        <label class="form-label" htmlFor="crimeDate">Date</label>
                        <input class="form-input" type="text" id="crimeDate" name="crimeDate" value={formData.crimeDate} onChange={handleChange} />
                        <label class="form-label" htmlFor="seizedGoods">Seized Goods</label>
                        <input class="form-input" type="text" id="seizedGoods" name="seizedGoods" value={formData.seizedGoods} onChange={handleChange} />
                        <label class="form-label" htmlFor="witnessNames">Witness Names</label>
                        <input class="form-input" type="text" id="witnessNames" name="witnessNames" value={formData.witnessNames} onChange={handleChange} />
                    </div>
                    <div class="form-section">
                        <h2>Officer Details</h2>
                        <label class="form-label" htmlFor="areaAssistant">Area Assistant</label>
                        <input class="form-input" type="text" id="areaAssistant" name="areaAssistant" value={formData.areaAssistant} onChange={handleChange} />
                        <label class="form-label" htmlFor="rangeOfficer">Range Officer</label>
                        <input class="form-input" type="text" id="rangeOfficer" name="rangeOfficer" value={formData.rangeOfficer} onChange={handleChange} />
                        <label class="form-label" htmlFor="areaOfficer">Area Officer</label>
                        <input class="form-input" type="text" id="areaOfficer" name="areaOfficer" value={formData.areaOfficer} onChange={handleChange} />
                        <label class="form-label" htmlFor="vma">V.M.A</label>
                        <input class="form-input" type="text" id="vma" name="vma" value={formData.vma} onChange={handleChange} />
                        <label class="form-label" htmlFor="premises">Premises</label>
                        <input class="form-input" type="text" id="premises" name="premises" value={formData.premises} onChange={handleChange} />
                    </div>
                    <button class="form-button" onClick={handleSubmit} type='click'>Show Form</button>
                    <button class="form-button" type="submit">Register Crime</button>
                </form>
            </div>
        </>
        );
    } else {
        return <PorForm formData={formData} handleEditClick={handleEditClick} />;
    }
};

export default PorInput;