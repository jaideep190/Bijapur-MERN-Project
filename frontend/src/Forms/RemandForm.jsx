import React from 'react';
import '../styles/RemandForm.css';

function RemandForm({ formData, handleEditClick }) {
  const {
    caseName, district, caseNo, caseDate, sections, incidentDate, incidentPlace,
    issueDate, complainantName, offenders,
    preRemandDate, finalRemandDate, remark, finalReportSubmissionDate,
    magistrateName, magistrateDistrict
  } = formData;

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <body className='remand-body'>
        <div className="remand-container">
          <div className="remand-header">
            <h1 className="remand-heading">Remand Form</h1>
          </div>
          <div className="remand-content">
            <div className="remand-details">
              1. Name of Case: - {caseName}, District: - {district}<br />
              2. POR No. {caseNo} dt. {caseDate} under - Indian Penal Code (Section) Act 1972<br />
              Sections {sections}<br />
              3. Date of Incident: - {incidentDate}<br />
              4. Place of Incident: - {incidentPlace}<br />
              5. Date of Issue of Summons: - {issueDate}<br />
              6. Name of Complainant: - {complainantName}<br />
              7. Name of Accused:
              <ul className="remand-list">
                {offenders.map((offender, index) => (
                  <li key={index}>
                    {offender.name} son of {offender.fatherName}, Caste {offender.caste}, age {offender.age}, Vill/Ward - {offender.village}, Gram - {offender.gram}, Tehsil - {offender.tehsil}, District - {offender.district} (C.G.) Pin - {offender.pin}
                  </li>
                ))}
              </ul>
              8. Date and Time of Arrest:
              <ul className="remand-list">
                {offenders.map((offender, index) => (
                  <li key={index}>
                    ({index + 1}) {offender.name} dt. {offender.arrestDate} Time {offender.arrestTime}
                  </li>
                ))}
              </ul>
              9. Pre-Remand: - {preRemandDate}<br />
              10. Final Remand: - {finalRemandDate}<br />
              11. Remark: - {remark}<br />
            </div>
            <div className="remand-footer">
              Sir,<br />
              It is clear that, for question no. 1, para- 2 of section 7 is not applicable, so the question arises. Regarding the same, under POR Case no {caseNo} dated {caseDate} under the Indian Penal Code (Section) Act 1972, sections {sections} have been invoked against them. Appearances are necessary in this regard. The final report will be submitted by {finalReportSubmissionDate} after collecting evidence.
            </div>
            <div className="signature">
              <br /><br /><br />
              (Stamp)<br />
              Judicial Magistrate First Class<br />
              {magistrateName}<br />
              District - {magistrateDistrict}
            </div>
          </div>
        </div>
      </body>
      <button onClick={handleEditClick} className="edit-button">Edit</button> {/* Edit button to trigger handleEditClick function */}
      <button onClick={handlePrintClick} className="print-button">Print Form</button> {/* Button to trigger printing the form */}
    </>
  );
}

export default RemandForm;

