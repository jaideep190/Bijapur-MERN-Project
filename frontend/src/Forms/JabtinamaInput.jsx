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
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formValues = Object.values(formData);
        if (formValues.some(value => value === '')) {
            alert('Please fill in all the fields');
            return;
        }
        saveData();
    };

    const saveData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/saveJabtinama', formData);
            console.log(response);
            alert(response.data.msg);
            if (response.data.msg === 'User Created!') {
                setIsSubmitted(true);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };

    const handleEditClick = () => {
        setIsSubmitted(false);
    };

    return (
        <>
            {!isSubmitted ? (
                <div className="container">
                    <h1>Fard Japtinama Forest Department</h1>
                    <form onSubmit={handleSubmit} id="jabtinamaDetailsForm">
                        <div className="section">
                            <h2>Case Details</h2>
                            <label htmlFor="caseNumber">Case Number</label>
                            <input type="text" id="caseNumber" name="caseNumber" value={formData.caseNumber} onChange={handleChange} required />
                            <label htmlFor="date">Date</label>
                            <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="section">
                            <h2>Forest Officer Details</h2>
                            <label htmlFor="placeAndTime">Place and Time</label>
                            <input type="text" id="placeAndTime" name="placeAndTime" value={formData.placeAndTime} onChange={handleChange} required />
                            <label htmlFor="nameAndPositionOffender">Name and Position of Offender</label>
                            <input type="text" id="nameAndPositionOffender" name="nameAndPositionOffender" value={formData.nameAndPositionOffender} onChange={handleChange} required />
                            <label htmlFor="nameSeizingOfficer">Name of Seizing Officer</label>
                            <input type="text" id="nameSeizingOfficer" name="nameSeizingOfficer" value={formData.nameSeizingOfficer} onChange={handleChange} required />
                            <label htmlFor="nameInvestigatingOfficer">Name of Investigating Officer</label>
                            <input type="text" id="nameInvestigatingOfficer" name="nameInvestigatingOfficer" value={formData.nameInvestigatingOfficer} onChange={handleChange} required />
                            <label htmlFor="specialRecordPrepared">Special Record Prepared</label>
                            <input type="text" id="specialRecordPrepared" name="specialRecordPrepared" value={formData.specialRecordPrepared} onChange={handleChange} required />
                        </div>
                        <div className="section">
                            <h2>Offender Details</h2>
                            <label htmlFor="nameOffenderResidence">Name of Offender and Residence</label>
                            <input type="text" id="nameOffenderResidence" name="nameOffenderResidence" value={formData.nameOffenderResidence} onChange={handleChange} required />
                            <label htmlFor="caste">Caste</label>
                            <input type="text" id="caste" name="caste" value={formData.caste} onChange={handleChange} required />
                        </div>
                        <div className="section">
                            <h2>Confiscated Materials</h2>
                            <label htmlFor="timber">Timber</label>
                            <input type="text" id="timber" name="timber" value={formData.timber} onChange={handleChange} required />
                            <label htmlFor="firewood">Firewood</label>
                            <input type="text" id="firewood" name="firewood" value={formData.firewood} onChange={handleChange} required />
                            <label htmlFor="others">Others</label>
                            <input type="text" id="others" name="others" value={formData.others} onChange={handleChange} required />
                            <label htmlFor="rate">Rate</label>
                            <input type="text" id="rate" name="rate" value={formData.rate} onChange={handleChange} required />
                            <label htmlFor="quantity">Quantity</label>
                            <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
                            <label htmlFor="amount">Amount</label>
                            <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                            <label htmlFor="total">Total</label>
                            <input type="text" id="total" name="total" value={formData.total} onChange={handleChange} required />
                            <label htmlFor="quantity1">Quantity</label>
                            <input type="text" id="quantity1" name="quantity1" value={formData.quantity1} onChange={handleChange} required />
                            <label htmlFor="amount1">Amount</label>
                            <input type="text" id="amount1" name="amount1" value={formData.amount1} onChange={handleChange} required />
                        </div>
                        <button className="form-button" type="submit">Register Crime</button>
                    </form>
                </div>
            ) : (
                <JabtinamaForm formData={formData} handleEditClick={handleEditClick} />
            )}
        </>
    );
};

export default JabtinamaInput;
