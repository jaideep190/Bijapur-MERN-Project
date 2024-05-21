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
                pdf.save('jabtinama.pdf');
            })
            .catch(function (error) {
                console.log('Error occurred:', error);
            });
    };

    render() {
        const { formData } = this.state;

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
                                font-family: Arial, sans-serif;
                            }
                            .top-right {
                                
                                text-align: right;
                                margin: 20px;
                            }
                            table {
                                border-collapse: collapse;
                                width: 100%;
                                font-size: 14px;
                                margin-top: 50px;
                            }
                            th, td {
                                border: 1px solid black;
                                padding: 5px;
                            }
                            th {
                                background-color: #f2f2f2;
                                text-align: center;
                                text-decoration: underline; /* Underline the headings */
                            }
                            .signatures {
                                display: flex;
                                text-align: center;
                                justify-content: space-between;
                                margin-top: 20px;
                            }
                            .signature-section {
                                width: 30%;
                                text-align: center;
                            }
                            .form-title {
                                text-align: left;
                                margin-top: 20px;
                                font-weight: bold;
                            }
                            
                        `}
                    </style>
                </Helmet>

                <div className="form-title">
                    Forest Department Seizure Report under Section 52 of the Forest Act, 1927
                </div>

                <div className="top-right">
                    <div className="input-container">
                        <label>Case Number:</label>
                        <span>{this.state.caseNumber}</span>
                    </div>
                    <div className="input-container">
                        <label>Date:</label>
                        <span>{this.state.date}</span>
                    </div>
                </div>

                <table id="forestDepartmentTable">
                    <thead>
                        <tr>
                            <th>Serial and Time</th>
                            <th>Place and Crime Occurred</th>
                            <th>Name and Position of Offender</th>
                            <th>Name of Offender and Residence</th>
                            <th>Caste</th>
                            <th>Name of Seizing Officer</th>
                            <th>Name of Investigating Officer</th>
                            <th>Special Record Prepared</th>
                            <th>Timber</th>
                            <th>Firewood</th>
                            <th>Others</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.placeAndTime}</td>
                            <td>{this.state.nameAndPositionOffender}</td>
                            <td>{this.state.nameOffenderResidence}</td>
                            <td>{this.state.caste}</td>
                            <td>{this.state.nameSeizingOfficer}</td>
                            <td>{this.state.nameInvestigatingOfficer}</td>
                            <td>{this.state.specialRecordPrepared}</td>
                            <td>{this.state.timber}</td>
                            <td>{this.state.firewood}</td>
                            <td>{this.state.others}</td>
                            <td>{this.state.rate}</td>
                            <td>{this.state.quantity}</td>
                            <td>{this.state.amount}</td>
                            <td>{this.state.total}</td>
                            <td>{this.state.quantity1}</td>
                            <td>{this.state.amount1}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="signatures">
                    <div className="signature-section">
                        <p>Signature Name:</p>
                        <p>1)</p>
                        <p>2)</p>
                        <p>3)</p>
                    </div>
                    <div className="signature-section">
                        <p>Signature of the Officer who Seized</p>
                    </div>
                </div>

                <button type="button" id="edit_button" onClick={this.EditJabtinama} style={{ marginTop: '20px' }}>
                    Edit
                </button>
                <button type="button" onClick={this.downloadPDF} style={{ marginLeft: '50px' }}>
                    Download PDF
                </button>
                <ReactToPrint
                    trigger={() => <button style={{ marginLeft: '400px' }}>Print POR</button>}
                    content={() => this.componentRef}
                    documentTitle="Forest_Department_Supurdannama"
                />
            </div>
        );
    }
}

export default JabtinamaForm;

