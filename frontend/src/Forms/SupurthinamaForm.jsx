import React from 'react';
import '../styles/Supurthinama.css';

function SupurthinamaForm({ formData, handleEditClick }) { // Receive formData and handleEditClick function as props
  const { name, fathersName, caste, profession, residence, tehsil, district, date, month, year, witness1, witness2 } = formData;

  const handlePrintClick = () => {
    window.print();
  };
  
  return (
    <>
    <head>
        <title>Supurthinama</title>
    </head>
    <body className='supurthinama-body'>
        <div className="supurthinama-container">
            <h1 className="supurthinama-heading">Mohkama Forest</h1>
            <h1 className="supurthinama-heading">Supurthinama</h1>
            <div className="supurthinama-content">
                <div className="supurthinama-section">
                    <h3 className="supurthinama-text">
                        To be filled by, Name : {name}, Father's Name: {fathersName}, Caste : {caste}, Profession: {profession},
                        Residence : {residence}, Tehsil: {tehsil}, District : {district}.
                    </h3>
                </div>
                <div className="supurthinama-section">
                    <h3 className="supurthinama-text">
                        I am the forest officer who has received the following detailed items listed below in accordance with 
                        Section 52 of the Indian Forest Act, 1927. I received them today on Date: {date}, Month: {month}, Year: {year}. 
                        According to this document, I will return the items when demanded by the forest department.
                    </h3>
                </div>
                <div className="supurthinama-items">
                    <h3 className="supurthinama-text">
                        <div>
                            <h2 className="supurthinama-heading">Detailed Surrendered Items</h2>
                        </div>
                        <br />
                        Date: {date}, Month: {month}, Year: {year}.<br />
                        Names of witnesses under whom the items were surrendered:<br />
                        {witness1}<br />{witness2}
                    </h3>
                </div>
            </div>        
        </div>
        <button onClick={handleEditClick} className="edit-button">Edit</button> {/* Edit button to trigger handleEditClick function */}
        <button onClick={handlePrintClick} className="print-button">Print Form</button> {/* Button to trigger printing the form */}
    </body>
    </>
  )
}

export default SupurthinamaForm;