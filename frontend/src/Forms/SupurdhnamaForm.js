import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';

export class SupurdhnamaForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surrenderingPerson: props.formData.surrenderingPerson,
            sonDaughter: props.formData.sonDaughter,
            caste: props.formData.caste,
            profession: props.formData.profession,
            residentOf: props.formData.residentOf,
            tehsil: props.formData.tehsil,
            district: props.formData.district,
            forestOfficerDetails: props.formData.forestOfficerDetails,
            seizedGoodsDetails: props.formData.seizedGoodsDetails,
            seizedGoodsDate: props.formData.seizedGoodsDate,
            witness1: props.formData.witness1,
            witness2: props.formData.witness2,
        };

        this.EditPor = this.EditPor.bind(this);
    }

    EditPor() {
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
                            font-family: Arial, sans-serif;
                            font-size: 14px;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            text-align: left;
                            margin: 20px auto;
                            padding-left: 100px;
                            padding-right: 100px;
                        }
                        .heading1 {
                            font-size: 28px;
                            font-weight: bold;
                            margin-bottom: 10px;
                            text-align: center;
                        }
                        .terms {
                            margin-bottom: 20px;
                        }
                        div p {
                            font-size: 20px;
                            display: inline;
                        }
                        .heading2 {
                            text-align: center;
                            font-size: 18px;
                            font-weight: bold;
                            margin-bottom: 10px;
                        }
                        .witnesses {
                            text-align: left;
                            margin-left: 100px;
                        }
                        .signature {
                            text-align: right;
                            margin-right: 100px;
                        }
                    `}
                    </style>
                </Helmet>
                <div>
                    <h1 className="heading1"> Mohkama Forest Department</h1>
                    <h2 className="heading2"> Supurdannama (Surrender Document)</h2>
                    <br />
                </div>
                <div className="container">
                    <p> Surrendering Person: {this.state.surrenderingPerson}</p>
                    <p> Son/Daughter of: {this.state.sonDaughter}</p>
                    <p> Caste: {this.state.caste}</p>
                    <p> Profession: {this.state.profession}</p>
                    <p> Resident of: {this.state.residentOf}</p>
                    <p> Tehsil: {this.state.tehsil}</p>
                    <p> District: {this.state.district}</p>
                </div>
                <br />
                <div className="container">
                    <p> Forest Officer: {this.state.forestOfficerDetails}</p>
                    <p>
                        has done as per the details given below under 52 Indian Forest{' '}
                    </p>
                    <p> Act, 1972 AD. It is handed over to me on this </p>
                    <p> Date: {this.state.seizedGoodsDate}</p>
                    <p>
                        I take this material in my hand and promise to protect it completely and{' '}
                    </p>
                    <p>
                        present it immediately whenever someone calls for it and I will not take
                        any rent or remuneration for it.{' '}
                    </p>
                </div>
                <br />
                <div className="container">
                    <p style={{ textAlign: 'center' }}> Details of Seized Forest Goods</p>
                    <p style={{ textAlign: 'center' }}>
                        Date: {this.state.seizedGoodsDate} Month: {this.state.seizedGoodsDate}{' '}
                        Year (20XX): {this.state.seizedGoodsDate} Signature:{' '}
                    </p>
                </div>
                <br />
                <div className="witnesses">
                    <p> Name of Witnesses:</p>
                    <br />
                    <p>
                        {' '}
                        <br /> 1) {this.state.witness1}
                    </p>
                    <br />
                    <p>
                        {' '}
                        <br /> 2) {this.state.witness2}
                    </p>
                </div>
                <div className="signature">
                    <p> Signature of Handing Over Forest Officer: {this.state.forestOfficerDetails}</p>
                </div>

                <button type="button" id="edit_button" onClick={this.EditPor} style={{ marginLeft: '50px' }}>
                    Edit
                </button>
                <button type="button" onClick={this.downloadPDF} style={{ marginLeft: '50px' }}>
                    Download PDF
                </button>
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

export default SupurdhnamaForm;
