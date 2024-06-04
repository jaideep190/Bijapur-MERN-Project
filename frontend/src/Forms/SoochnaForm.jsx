import React from 'react';
import '../styles/Soochna.css';

function SoochnaForm({ formData, handleEditClick }) {
  const { caseNumber, date, suspectName, fatherName, village, policeStation, district, sections, reason, arrestDate, arrestTime, magistrate, arrestedPersonName, relativeName, witness1Signature, witness2Signature, rangeOfficerSignature } = formData;

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <div className="soochna-container">
        <div className="soochna-header">
          <h1 className="soochna-title">Soochna</h1>
        </div>
        <div className="soochna-content">
          <p>According to forest crime under Forest Crime Case Number: <span className="soochna-details">{caseNumber}</span>,</p>
          <p>Date: <span className="soochna-details">{date}</span>,</p>
          <p>Shri <span className="soochna-details">{suspectName}</span> Father of <span className="soochna-details">{fatherName}</span>,</p>
          <p>Resident of Village <span className="soochna-details">{village}</span>, Police Station <span className="soochna-details">{policeStation}</span>, District <span className="soochna-details">{district}</span>,</p>
          <p>has been taken into custody under section of Wildlife Protection Act 1972 <span className="soochna-details">{sections}</span>,</p>
          <p>for <span className="soochna-details">{reason}</span> on <span className="soochna-details">{arrestDate}</span> and <span className="soochna-details">{arrestTime}</span>,</p>
          <p>who will be produced before the honourable First Class Magistrate <span className="soochna-details">{magistrate}</span>.</p>
          <p>Therefore, you are informed for advance arrangements.</p>
        </div>
        <div className="soochna-points">
          <div className="soochna-point">
            <p>1. The arrested person name is <span className="soochna-details">{arrestedPersonName}</span></p>
          </div>
          <div className="soochna-point">
            <p>2. Name of the Relatives <span className="soochna-details">{relativeName}</span></p>
          </div>
        </div>
        <div className="soochna-signatures">
          <div className="witness-signature">
            <div className="soochna-signature-block">
              <p>Signature of Witness 1</p>
              <p className="soochna-signature">{witness1Signature}</p>
            </div>
            <div className="soochna-signature-block">
              <p>Signature of Witness 2</p>
              <p className="soochna-signature">{witness2Signature}</p>
            </div>
          </div>
          <div className="range-officer-signature">
            <div className="soochna-signature-block">
              <p>Signature of Range Officer</p>
              <p className="soochna-signature">{rangeOfficerSignature}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleEditClick} className="edit-button">Edit</button>
      <button onClick={handlePrintClick} className="print-button">Print Form</button>
    </>
  );
}

export default SoochnaForm;
