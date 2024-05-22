import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';

const RajinamaForm = ({ formData, handleEditClick }) => {
    const componentRef = useRef(null);

    const downloadPDF = () => {
        const input = componentRef.current;
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
                pdf.save('rajinama.pdf');
            })
            .catch(function (error) {
                console.log('Error occurred:', error);
            });
    };

    return (
        <div ref={componentRef}>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mohkama Forest</title>
                <style>
                    {`
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                        }

                        .container {
                            max-width: 800px;
                            margin: 0 auto;
                            padding: 20px;
                        }

                        h1 {
                            text-align: center;
                            text-decoration: underline;

                        }

                        h2 {
                            text-align: center;
                            text-decoration: underline;

                        }

                        h3 {
                            text-align: center;
                            text-decoration: underline;

                        }

                        .form-group {
                            margin-bottom: 20px;
                        }

                        label {
                            display: block;
                            font-weight: bold;
                            margin-bottom: 5px;
                        }

                        input[type="text"] {
                            padding: 5px;
                            margin-right: 10px;
                        }

                        ul, ol {
                            padding-left: 20px;
                        }

                        p {
                            margin: 5px 0;
                        }

                        .smaller {
                            font-size: 1.0em;
                        }

                        .line {
                            margin-bottom: 10px;
                        }

                        .signature {
                            float: left;
                        }

                        .photographs {
                            float: right;
                            margin-top: -10px;
                        }

                        .clearfix::after {
                            content: "";
                            clear: both;
                            display: table;
                        }

                        .body{
                            font-size: 10px;
                        }
                    `}
                </style>
            </Helmet>

            <div className="container">
                <h1>Mohkama Forest</h1>
                <h3>Resignation (Raajinama) </h3>
                <p>Based on the investigation conducted in my/our presence</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name1">(1)</label>
                        <input type="text" id="name1" placeholder="Name" />
                        <input type="text" placeholder="Religion" />
                        <input type="text" placeholder="Caste" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name2">(2)</label>
                        <input type="text" id="name2" placeholder="Name" />
                        <input type="text" placeholder="Religion" />
                        <input type="text" placeholder="Caste" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name3">(3)</label>
                        <input type="text" id="name3" placeholder="Name" />
                        <input type="text" placeholder="Religion" />
                        <input type="text" placeholder="Caste" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name4">(4)</label>
                        <input type="text" id="name4" placeholder="Name" />
                        <input type="text" placeholder="Religion" />
                        <input type="text" placeholder="Caste" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name5">(5)</label>
                        <input type="text" id="name5" placeholder="Name" />
                        <input type="text" placeholder="Religion" />
                        <input type="text" placeholder="Caste" />
                    </div>
                    <br />
                    <div className="line"></div>
                    <div className="form-group">
                        <p>About Forest related Crimes, <span style={{ whiteSpace: 'pre-wrap' }}>i.e., ______________________________________________________________ <br />
                        ______________________________________________________________________________________
                        </span> is suspected of doing.</p>
                        <br />
                    </div>
                    <div className="form-group">
                        <p>And I want / we want that the guilty plea for the accused should be made at the rate of Rs. 68 of the Indian Forest Act, 1927 AD, which is still in force.</p>
                        <br />
                        <p>Further, if / If this certificate is false, I will be subject to punishment under the law and legal action will be taken / If it is found that the certificate is false,                            a fine of Rs. 500/- will be imposed and no claim of any kind will be entertained for reimbursement or payment of dues under this program.</p>
                            <br />
                            <p>I / If I do any such work, I will be subject to legal action / If any Forest Officer or any other Officer finds that this information is false, strict legal action will be taken against me.</p>
                            <p>It is also stated that the Gram Panchayat has the right / Village (or Nayab Tehsildar) to cancel this certificate and take any necessary action.</p>
                        </div>
                        <br />
                        <div className="clearfix">
                            <div className="form-group signature">
                                <p>Signature: ..................................... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date: ............................. </p>
                                <br />
                                <p className="smaller">Signature of Witnesses: <br /><br />(1) ..............................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> (2) ............................. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div className="form-group photographs">
                                <p>Photographs to be attached as per the instructions given below:</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className="form-group">
                            <h2>Certificate to be attached</h2>
                            <p>I certify that the above-mentioned persons that is the suspected persons presented this statement to me with their consent.</p>
                            <br />
                            <p> Date: ........................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Year: .......................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Signature: ................................</p>
                            <ul>
                                <li>In relation to the cases of Chhattisgarh, the words taken inside the brackets should be deleted.</li>
                                <li>If no property has been confiscated then the words written inside should be struck out.</li>
                                <li>which includes the produce from government forests.</li>
                            </ul>
                        </div>
                    </form>
                </div>
                <button type="button" id="edit_button" onClick={handleEditClick} style={{ marginTop: '20px' }}>
                    Edit
                </button>
                <button type="button" onClick={downloadPDF} style={{ marginLeft: '50px' }}>
                    Download PDF
                </button>
                <ReactToPrint
                    trigger={() => <button style={{ marginLeft: '400px' }}>Print Raajinama</button>}
                    content={() => componentRef.current}
                    documentTitle="Raajinama"
                />
            </div>
        );
};

export default RajinamaForm;
