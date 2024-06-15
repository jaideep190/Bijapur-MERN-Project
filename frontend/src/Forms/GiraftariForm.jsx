import React, { useRef } from 'react';
import '../styles/GiraftariForm.css';
import ReactToPrint from 'react-to-print';

function GiraftariForm({ formData, handleEditClick }) {
  const {
    policeStationDistrict, crimeNumber, accusedName, fatherName, motherName, age, address,
    arrestDateTime, placeOfArrest, arrestingOfficer, witness1, witness2, relativeNotified,
    itemsFound, signatureArrestedPerson, signatureOfficer
  } = formData;

  const componentRef = useRef();

  return (
    <>
      <div ref={componentRef} className="giraftari-container">
        <div className="giraftari-header">
          <span>M</span> <span>72</span>
        </div>
        <div className="giraftari-heading-title" style={{ fontSize: '1.2em', textAlign: 'center', fontWeight: 'bold' }}>
          <h1 style={{ fontSize: '1.2em', textAlign: 'center', fontWeight: 'bold' }}>Arrest Warrant</h1>
        </div>
        <div className="giraftari-section" id="police-station-section">
          <label>1- Police Station / District:</label>
          <div className="giraftari-input" id="police-station">{policeStationDistrict}</div>
        </div>
        <div className="giraftari-section" id="crime-number-section">
          <label>2- Crime Number:</label>
          <div className="giraftari-input" id="crime-number">{crimeNumber}</div>
        </div>
        <div className="giraftari-section" id="accused-details-section">
          <label>3- Details of the arrested person:</label>
          <div className="giraftari-input" id="accused-details">
            <ul>
              <li id="accused-name">Name: {accusedName}</li>
              <li id="accused-father-name">Father's Name: {fatherName}</li>
              <li id="accused-mother-name">Mother's Name: {motherName}</li>
              <li id="accused-age">Age: {age}</li>
              <li id="accused-address">Address: {address}</li>
            </ul>
          </div>
        </div>
        <div className="giraftari-section" id="arrest-date-time-section">
          <label>4- Date and Time of Arrest:</label>
          <div className="giraftari-input" id="arrest-date-time">{arrestDateTime}</div>
        </div>
        <div className="giraftari-section" id="place-of-arrest-section">
          <label>5- Place of Arrest:</label>
          <div className="giraftari-input" id="place-of-arrest">{placeOfArrest}</div>
        </div>
        <div className="giraftari-section" id="arresting-officer-section">
          <label>6- Name and position of the arresting officer:</label>
          <div className="giraftari-input" id="arresting-officer">{arrestingOfficer}</div>
        </div>
        <div className="giraftari-section" id="witness-section">
          <label>7- Name of witness present at the time of arrest:</label>
          <div className="giraftari-input" id="witnesses">
            <ul>
              <li id="witness1">1) {witness1}</li>
              <li id="witness2">2) {witness2}</li>
            </ul>
          </div>
        </div>
        <div className="giraftari-section" id="relative-notified-section">
          <label>8- Name and address of the friend/relative of the arrested person or the person identified to whom the arrest information is given:</label>
          <div className="giraftari-input" id="relative-notified">{relativeNotified}</div>
        </div>
        <div className="giraftari-section" id="items-found-section">
          <label>9- Details of items found on the arrested person at the time of arrest, if any:</label>
          <div className="giraftari-input" id="items-found">{itemsFound}</div>
        </div>
        <div className="giraftari-footer">
          <p>It is certified that the arrested person has been informed of his/her arrest and rights.</p>
        </div>
        <div className="giraftari-signatures">
          <div className="giraftari-signature-section" id="signature-arrested-person-section">
            <label>Signature of the arrested person:</label>
            <div className="giraftari-input" id="signature-arrested-person">{signatureArrestedPerson}</div>
          </div>
          <div className="giraftari-signature-section" id="signature-officer-section">
            <label>Signature of the officer:</label>
            <div className="giraftari-input" id="signature-officer">{signatureOfficer}</div>
          </div>
        </div>
        <div className="giraftari-footer">
          <p>Note- 01- This arrest warrant is to inform the family or friends of the arrested person about the arrest.</p>
          <p>02- This document is for the welfare of the arrested person/relative.</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleEditClick} className="edit-button">Edit</button>
        <ReactToPrint
          trigger={() => <button className="print-button">Print Form</button>}
          content={() => componentRef.current}
          documentTitle="Arrest Warrant"
          pageStyle="print"
        />
      </div>
    </>
  );
}

export default GiraftariForm;

