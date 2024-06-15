import React from 'react';
import '../styles/Rajinama.css';

function RajinamaForm({ formData, handleEditClick }) {
  const {
    suspects,
    forestRelatedCrimes,
    date,
    month,
    year,
    witness1,
    witness2,
    investigationOfficer
  } = formData;

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
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
            {suspects.map((suspect, index) => (
              <p key={index} className="rajinama-text">
                {index + 1}) {suspect.name} son of {suspect.fatherName} caste {suspect.caste} resident of {suspect.residence}
              </p>
            ))}
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
            Date: {date} Month: {month}, year: {year}
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
              {suspects.map((suspect, index) => (
                <React.Fragment key={index}>
                  <label className="form-label" htmlFor={`name${index}`}>Suspect {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`name${index}`}
                    name="name"
                    value={suspect.name}
                    onChange={(e) => handleSuspectChange(index, e)}
                    required
                  />
                  <label className="form-label" htmlFor={`fatherName${index}`}>Father's Name {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`fatherName${index}`}
                    name="fatherName"
                    value={suspect.fatherName}
                    onChange={(e) => handleSuspectChange(index, e)}
                    required
                  />
                  <label className="form-label" htmlFor={`caste${index}`}>Caste {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`caste${index}`}
                    name="caste"
                    value={suspect.caste}
                    onChange={(e) => handleSuspectChange(index, e)}
                    required
                  />
                  <label className="form-label" htmlFor={`residence${index}`}>Residence {index + 1}</label>
                  <input
                    className="form-input"
                    type="text"
                    id={`residence${index}`}
                    name="residence"q
                    value={suspect.residence}
                    onChange={(e) => handleSuspectChange(index, e)}
                    required
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="rajinama-certificate">
            <div className="rajinama-certificate-title">
              <h2>Certificate of Verification</h2>
            </div>
            <div className="rajinama-certificate-content">
              <p className="rajinama-text">I hereby certify that the suspects have presented this agreement willingly in my presence.</p>
              <p className="rajinama-text">Date: {date}, Month: {month}, Year: {year}, Signature : {investigationOfficer}</p>
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
      <button onClick={handleEditClick} className="edit-button">Edit</button>
      <button onClick={handlePrintClick} className="print-button">Print Form</button>
    </>
  );
}

export default RajinamaForm;
