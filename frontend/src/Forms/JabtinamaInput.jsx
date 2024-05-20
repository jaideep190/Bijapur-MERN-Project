import React, { useState } from 'react';
import axios from 'axios';
import JabtinamaForm from './JabtinamaForm';


const JabtinamaInput = () => {
    const [formData, setFormData] = useState({
        caseNumber: '',
        date: '',
        placeAndTime: '',
        nameAndPositionOffender: '',
        nameSeizingOfficer: '',
        nameInvestigatingOfficer: '',
        specialRecordPrepared: '',
        nameOffenderResidence: '',
        caste: '',
        timber: '',
        firewood: '',
        others: '',
        rate: '',
        quantity: '',
        amount: '',
        total: '',
        quantity1: '',
        amount1: '',
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
            const response = await axios.post('http://localhost:5000/api/auth/saveJabtinama', formData);
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
            <h1>Fard Japtinama Forest Department</h1>
            <form onSubmit={saveData} id="jabtinamaDetailsForm">
                <div className="section">
                    <h2>Case Details</h2>
                    <label htmlFor="caseNumber">Case Number</label>
                    <input type="text" id="caseNumber" name="caseNumber" value={formData.caseNumber} onChange={handleChange} />
                    <label htmlFor="date">Date</label>
                    <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Forest Officer Details</h2>
                    <label htmlFor="placeAndTime">Place and Time</label>
                    <input type="text" id="placeAndTime" name="placeAndTime" value={formData.placeAndTime} onChange={handleChange} />
                    <label htmlFor="nameAndPositionOffender">Name and Position of Offender</label>
                    <input type="text" id="nameAndPositionOffender" name="nameAndPositionOffender" value={formData.nameAndPositionOffender} onChange={handleChange} />
                    <label htmlFor="nameSeizingOfficer">Name of Seizing Officer</label>
                    <input type="text" id="nameSeizingOfficer" name="nameSeizingOfficer" value={formData.nameSeizingOfficer} onChange={handleChange} />
                    <label htmlFor="nameInvestigatingOfficer">Name of Investigating Officer</label>
                    <input type="text" id="nameInvestigatingOfficer" name="nameInvestigatingOfficer" value={formData.nameInvestigatingOfficer} onChange={handleChange} />
                    <label htmlFor="specialRecordPrepared">Special Record Prepared</label>
                    <input type="text" id="specialRecordPrepared" name="specialRecordPrepared" value={formData.specialRecordPrepared} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Offender Details</h2>
                    <label htmlFor="nameOffenderResidence">Name of Offender and Residence</label>
                    <input type="text" id="nameOffenderResidence" name="nameOffenderResidence" value={formData.nameOffenderResidence} onChange={handleChange} />
                    <label htmlFor="caste">Caste</label>
                    <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Confiscated Materials</h2>
                    <label htmlFor="timber">Timber</label>
                    <input type="text" id="timber" name="timber" value={formData.timber} onChange={handleChange} />
                    <label htmlFor="firewood">Firewood</label>
                    <input type="text" id="firewood" name="firewood" value={formData.firewood} onChange={handleChange} />
                    <label htmlFor="others">Others</label>
                    <input type="text" id="others" name="others" value={formData.others} onChange={handleChange} />
                    <label htmlFor="rate">Rate</label>
                    <input type="text" id="rate" name="rate" value={formData.rate} onChange={handleChange} />
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
                    <label htmlFor="amount">Amount</label>
                    <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} />
                    <label htmlFor="total">Total</label>
                    <input type="text" id="total" name="total" value={formData.total} onChange={handleChange} />
                    <label htmlFor="quantity1">Quantity</label>
                    <input type="text" id="quantity1" name="quantity1" value={formData.quantity1} onChange={handleChange} />
                    <label htmlFor="amount1">Amount</label>
                    <input type="text" id="amount1" name="amount1" value={formData.amount1} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>Show Form</button>
                <button type="submit">Register Crime</button>
            </form>
        </div>
    );
} else {
    return <JabtinamaForm formData={formData} handleEditClick={handleEditClick} />;
}
};

export default JabtinamaInput;
