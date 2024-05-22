import React from 'react';
import '../styles/PanchanamaForm.css';  // Ensure the correct path to your CSS file

const PanchanamaForm = ({ formData, handleEditClick }) => {
  return (
    <div className="rajinama-container">
      <h2 className="text-center">Offenders' Information</h2>
      <p className="text-right">Forest Office: {formData.forestOffice} Date: {formData.date}</p>
      <table>
        <thead>
          <tr>
            <th className="text-center">Serial No.</th>
            <th className="text-left">Name of Offender</th>
            <th className="text-center">Father's Name</th>
            <th className="text-center">Age</th>
            <th className="text-left">Address</th>
            <th className="text-left">Type of Forest Offense</th>
          </tr>
        </thead>
        <tbody>
          {formData.offenders.map((offender, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{offender.name}</td>
              <td>{offender.fatherName}</td>
              <td>{offender.age}</td>
              <td>{offender.address}</td>
              <td>{offender.offense}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-left">This report contains the names of the offenders who have been caught while illegally taking forest products. Their detailed records will be prepared later.</p>
      <h3 className="text-center">Conditions for Compromise</h3>
      <ol className="text-left">
        {formData.conditions.map((condition, index) => (
          <li key={index}>{condition.condition}</li>
        ))}
        <p class="text-left">Signatures:</p>
        <ol class="text-left">
            <li>{}</li>
            <li>{}</li>
            <li>{}</li>
            <li>{}</li>
            <li>{}</li>

        </ol>
      </ol>
      <p className="text-right">Date: {formData.date}</p>
      <button className="form-button" onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default PanchanamaForm;
