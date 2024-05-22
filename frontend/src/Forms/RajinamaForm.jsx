import React from 'react';
import '../styles/Rajinama.css';

function RajinamaForm({ formData, handleEditClick }) {
  const {
    suspect1,
    fatherName1,
    caste1,
    residence1,
    suspect2,
    fatherName2,
    caste2,
    residence2,
    suspect3,
    fatherName3,
    caste3,
    residence3,
    suspect4,
    fatherName4,
    caste4,
    residence4,
    suspect5,
    fatherName5,
    caste5,
    residence5,
    forestRelatedCrimes,
    date,
    month,
    year,
    witness1,
    witness2,
    investigationOfficer,
  } = formData;

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <head>
        <title>Rajinama</title>
      </head>
      <body className='rajinama-body'>
        <div className="rajinama-container">
          <div className="rajinama-header">
            <div className="rajinama-title">
              <h1 className="rajinama-heading">Mohkamma Forest</h1>
              <h1 className="rajinama-heading">Rajinama Form</h1>
            </div>
          </div>
          <div className="rajinama-content">
            <div className="rajinama-section">
              <p className="rajinama-text">Based on the investigation in our presence</p>
              <p className="rajinama-text">1) {suspect1} son of {fatherName1} caste {caste1} resident of {residence1}</p>
              <p className="rajinama-text">2) {suspect2} son of {fatherName2} caste {caste2} resident of {residence2}</p>
              <p className="rajinama-text">3) {suspect3} son of {fatherName3} caste {caste3} resident of {residence3}</p>
              <p className="rajinama-text">4) {suspect4} son of {fatherName4} caste {caste4} resident of {residence4}</p>
              <p className="rajinama-text">5) {suspect5} son of {fatherName5} caste {caste5} resident of {residence5}</p>
              <p className="rajinama-text">have been suspected to commit the forest related crime, i.e. {forestRelatedCrimes}</p>
            </div>
            <div className="rajinama-details">
              I/We want the offense to be compounded in accordance with Rule 68 of Section 68 of the Hindustan Forest Act, 1927 (as applicable).<br />
              Therefore, I/we undertake to pay compensation within the stipulated period from the date of this petition, the amount of which shall not 
              exceed Rs 500/- per person as determined by the Divisional Forest Officer or any other officer of the Forest Department who is authorized 
              to compound such offence.<br />
              I/We undertake to pay the amount determined by the Divisional Forest Officer or any other officer authorized in this regard, as the value of 
              the property seized and liable to confiscation.<br />
              It is decided that upon payment of the aforementioned amount, no further action will be taken against me/us (or the aforementioned property).<br />
            </div>
            <div className="rajinama-date">
              Date: {date} Month:{month}, year: {year}
            </div>
            <br />
            <div className="rajinama-signatures">
              <div className="rajinama-witnesses">
                Signatures of witness'<br />
                {witness1}<br />
                {witness2}<br />
              </div>
              <div className="rajinama-suspects">
                Signatures of the suspects:<br />
                {suspect1}<br />
                {suspect2}<br />
                {suspect3}<br />
                {suspect4}<br />
                {suspect5}<br />
              </div>
            </div>
            <div className="rajinama-certificate">
              <div className="rajinama-certificate-title">
                <h2>Certificate of Verification</h2>
              </div>
              <div className="rajinama-certificate-content">
                <p className="rajinama-text">I hereby certify that the suspects have presented this agreement willingly in my presence.</p>
                <p className="rajinama-text">Date: {date}, Month:{month}, Year:{year}, Signature : {investigationOfficer}</p>
              </div>
            </div>
            <div className="rajinama-footer">
              <ul>
                <li>In relation to the cases of Chhattisgarh, the words taken inside the brackets should be deleted.</li>
                <li>If no property has been confiscated then the words written inside should be struck out.</li>
                <li>which includes the produce from government forests.</li>
              </ul>
            </div>
          </div>
        </div>
        <button onClick={handleEditClick} className="edit-button">Edit</button> {/* Edit button to trigger handleEditClick function */}
        <button onClick={handlePrintClick} className="print-button">Print Form</button> {/* Button to trigger printing the form */}
      </body>
    </>
  )
}

export default RajinamaForm;
