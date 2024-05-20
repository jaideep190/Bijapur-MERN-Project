import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';

export class JabtinamaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caseNumber: props.formData.caseNumber,
            date: props.formData.date,
            placeAndTime: props.formData.placeAndTime,
            nameAndPositionOffender: props.formData.nameAndPositionOffender,
            nameSeizingOfficer: props.formData.nameSeizingOfficer,
            nameInvestigatingOfficer: props.formData.nameInvestigatingOfficer,
            specialRecordPrepared: props.formData.specialRecordPrepared,
            nameOffenderResidence: props.formData.nameOffenderResidence,
            caste: props.formData.caste,
            timber: props.formData.timber,
            firewood: props.formData.firewood,
            others: props.formData.others,
            rate: props.formData.rate,
            quantity: props.formData.quantity,
            amount: props.formData.amount,
            total: props.formData.total,
            quantity1: props.formData.quantity1,
            amount1: props.formData.amount1
        };

        this.EditJabtinama = this.EditJabtinama.bind(this);
    }

    EditJabtinama() {
        this.props.handleEditClick();
    }

    downloadPDF = () => {
        const input = this.componentRef;
        const scale = 3;

        html2canvas(input, {
            scale: scale,
            useCORS: true,
            allowTaint: true,
            scrollX: 0,
            scrollY: -window.scrollY,
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 1.0);
                const pdf = new jsPDF('l', 'pt', [2480, 3508]);
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('por_form.pdf');
            })
            .catch(function (error) {
                console.log('Error occurred:', error);
            });
    };

    render() {
        return (
            <div ref={(el) => (this.componentRef = el)}>
                <Helmet>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Forest Department Supurdannama</title>
                    <style>
                        {`
                        body {
      position: relative;
    }
    .top-right {
      position: absolute;
      top: 0;
      right: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: Arial, sans-serif;
      font-size: 14px;
      margin-top: 50px;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
      text-align: left;
      text-decoration: underline; /* Underline the headings */
    }
    .enclosure, .forestDepartment {
      text-align: center;
      font-weight: bold;
      margin-top: 20px;
    }
    .signatures {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    #caseNumber, #date {
      text-align: right;
      padding: 5px 10px;
      margin-bottom: 10px; /* Add space after Case No. and Date */
    }
    #witness1, #witness2, #witness3, #witness4 {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: center;
      vertical-align: middle;
    }
    th[colspan="16"] {
      text-align: left;
    }
    .criminal-signature, .officer-signature {
      width: 20%;
    }
    .witness-signatures {
      width: 60%;
      text-align: center;
    }

                    `}
                    </style>
                </Helmet>
                <div className="top-right">
                    <span>Case No. <input type="text" id="caseNumberInput" /></span>
                    <br />
                    <span>Date <input type="text" id="dateInput" /></span>
                </div>

                <h1>Fard Japtinama Forest Department under 52 Forest Act 1927</h1>

                <table id="forestDepartmentTable">
                    <tr>
                        <th id="placeAndTime">Place and Time</th>
                        <th id="nameAndPositionOffender">Name and Position of Offender</th>
                        <th id="nameOffenderResidence">Name of Offender and Residence</th>
                        <th id="caste">Caste</th>
                        <th id="nameSeizingOfficer">Name of Seizing Officer</th>
                        <th id="nameInvestigatingOfficer">Name of Investigating Officer</th>
                        <th id="specialRecordPrepared">Special Record Prepared</th>
                        <th id="timber">Timber</th>
                        <th id="firewood">Firewood</th>
                        <th id="others">Others</th>
                        <th id="rate">Rate</th>
                        <th id="quantity">Quantity</th>
                        <th id="amount">Amount</th>
                        <th id="total">Total</th>
                        <th id="quantity1">Quantity</th>
                        <th id="amount1">Amount</th>
                    </tr>
                    <tr>
                        <td id="entry1"></td>
                        <td id="entry2"></td>
                        <td id="entry3"></td>
                        <td id="entry4"></td>
                        <td id="entry5"></td>
                        <td id="entry6"></td>
                        <td id="entry7"></td>
                        <td id="entry8"></td>
                        <td id="entry9"></td>
                        <td id="entry10"></td>
                        <td id="entry11"></td>
                        <td id="entry12"></td>
                        <td id="entry13"></td>
                        <td id="entry14"></td>
                        <td id="entry15"></td>
                        <td id="entry16"></td>
                    </tr>
                </table>

                <div className="signatures">
                    <div className="criminal-signature">
                        <p>Signature of the Criminal <span id="criminalSignature"></span></p>
                    </div>
                    <div className="witness-signatures">
                        <p>Signature of Witnesses: <br /> 1) <br /> 2) <br /> 3) <br /> 4)</p>
                    </div>
                    <div className="officer-signature">
                        <p>Signature of the Officer who seized <span id="officerSignature"></span></p>
                    </div>
                </div>

                <button type="button" id="edit_button" onClick={this.EditJabtinama} style={{ marginLeft: '50px' }}>
                    Edit
                </button>
                {/* <button type="button" onClick={this.downloadPDF} style={{ marginLeft: '50px' }}>
                    Download PDF
                </button> */}
                <ReactToPrint
                    trigger={() => {
                        return <button style={{ marginLeft: '400px' }}>Print POR</button>;
                    }}
                    content={() => this.componentRef}
                    documentTitle="new document"
                    pageStyle="print"
                />
            </div>
        );
    }
}

export default JabtinamaForm;
