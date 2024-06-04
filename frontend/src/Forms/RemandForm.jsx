import React from 'react';
import '../styles/RemandForm.css';

function RemandForm({ formData, handleEditClick }) {
  const {
    caseName, district, caseNo, caseDate, sections, incidentDate, incidentPlace,
    issueDate, complainantName, accused1Name, accused1FatherName, accused1Caste, accused1Age,
    accused1Village, accused1Gram, accused1Tehsil, accused1District, accused1Pin, accused1ArrestDate,
    accused1ArrestTime, preRemandDate, finalRemandDate, remark, finalReportSubmissionDate,
    magistrateName, magistrateDistrict
  } = formData;

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <div id="remand-body">
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
                <li>{accused1Name} son of {accused1FatherName} Caste {accused1Caste}, age {accused1Age}, Vill/Ward - {accused1Village}, Gram - {accused1Gram}, Tehsil - {accused1Tehsil}, District - {accused1District} (C.G.) Pin - {accused1Pin}</li>
                {/* Add similar fields for accused 2-5 */}
              </ul>
              8. Date and Time of Arrest:
              <ul className="remand-list">
                <li>(1) {accused1Name} dt. {accused1ArrestDate} Time {accused1ArrestTime}</li>
                {/* Add similar fields for accused 2-5 */}
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
      </div>
      <button onClick={handleEditClick} className="edit-button">Edit</button> {/* Edit button to trigger handleEditClick function */}
      <button onClick={handlePrintClick} className="print-button">Print Form</button> {/* Button to trigger printing the form */}
    </>
  );
}

export default RemandForm;

