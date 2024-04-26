import React, { Component } from 'react'
import '../styles/PorForm.css'
import ReactToPrint from 'react-to-print'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export class PorForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            porNumber:props.formData.porNumber,
            culpritName: props.formData.culpritName,
            fatherName: props.formData.fatherName,
            culpritAddress: props.formData.culpritAddress,
            caste: props.formData.caste,
            crimeType: props.formData.crimeType,
            crimeSection: props.formData.crimeSection,
            crimePlace: props.formData.crimePlace,
            crimeDate: props.formData.crimeDate,
            seizedGoods: props.formData.seizedGoods,
            witnessNames: props.formData.witnessNames,
            areaAssistant: props.formData.areaAssistant,
            rangeOfficer: props.formData.rangeOfficer,
            areaOfficer: props.formData.areaOfficer,
            vma: props.formData.vma,
            premises: props.formData.premises,
            toggle: props.formData.toggle
        }
    }

    EditPor = () => {
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
                const pdf = new jsPDF('l', 'pt', [2480 ,3508 ]);
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('por_form.pdf');
            })
            .catch(function (error) {
                console.log('Error occurred:', error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <div ref={el => (this.componentRef = el)} >
                    <body className="por_form" >
                        <table>
                            <tr>
                                <th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Forest Department, Regional Forest<br/>(Part One)</th>
                            </tr>
                            <tr><td>POR No: {this.state.porNumber}</td><td>Page No.</td></tr>
                            <tr><th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Initial Crime Information</th></tr>
                            <tr><td colspan="2">1. Report Number: 999 Date:07 Month:03 Year 2023</td></tr>
                            <tr><td colspan="2" id="culpritDetails">2. Name of Culprit: {this.state.culpritName}, Father's Name: {this.state.fatherName}, Caste: {this.state.caste}, Address:  {this.state.culpritAddress}</td></tr>
                            <tr><td colspan="2" id="caseSection">3. Type and Section Of Crime: {this.state.crimeType}, {this.state.crimeSection}</td></tr>
                            <tr><td colspan="2" id="crimePlace">4. Place of Crime{this.state.crimePlace}</td></tr>
                            <tr><td colspan="2" id="crimeDate">5. Date of Crime{this.state.crimeDate}</td></tr>
                            <tr><td colspan="2" id="seizedGoods">6. Details of Seized Goods and Action Taken: {this.state.seizedGoods}, </td></tr>
                            <tr><td colspan="2" id="witnessNames">7. Names of Witnesses: {this.state.witnessNames}</td></tr>
                            <tr><td colspan="2" id="areaAssistant">Second Part: Area Assistant: {this.state.areaAssistant} P.S Sent to the Circle</td></tr>
                            <tr><td colspan="2" id="rangeOfficer">Third Part: Range Officer: {this.state.rangeOfficer}Sent to the Area</td></tr>
                            <tr><td>Place:xxxxxx</td><td>Signature of the Forest Guard...................................</td></tr>
                            <tr><td>Date: 07-03-2023</td><td id="premises">Premises: {this.state.premises}</td></tr>
                            <tr><td colspan="2">Note: This report should be sent to the senior officer within 48 hours of detection of the crime</td></tr>
                            <tr><td colspan="2">GRPRJ-FS/106-8/2005-5000 Bks of 25 lvs</td></tr>
                        </table>
                        <div class="dotted-line"></div>

                        <table>
                            <tr>
                                <th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Forest Department, Regional Forest<br/>(Part Two)</th>
                            </tr>
                            <tr><td>POR No: {this.state.porNumber}</td><td>Page No.</td></tr>
                            <tr><th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Initial Crime Information</th></tr>
                            <tr><td colspan="2">1. Report Number: 999 Date:07 Month:03 Year 2023</td></tr>
                            <tr><td colspan="2" id="culpritDetails">2. Name of Culprit, Father's Name, Caste, and Address: {this.state.culpritName}, {this.state.fatherName},{this.state.culpritAddress},{this.state.caste}</td></tr>
                            <tr><td colspan="2" id="caseSection">3. Type and Section Of Crime: {this.state.crimeType}, {this.state.crimeSection}</td></tr>
                            <tr><td colspan="2" id="crimePlace">4. Place of Crime{this.state.crimePlace}</td></tr>
                            <tr><td colspan="2" id="crimeDate">5. Date of Crime{this.state.crimeDate}</td></tr>
                            <tr><td colspan="2" id="seizedGoods">6. Details of Seized Goods and Action Taken: {this.state.seizedGoods}, </td></tr>
                            <tr><td colspan="2" id="witnessNames">7. Names of Witnesses: {this.state.witnessNames}</td></tr>
                            <tr><td colspan="2" id="areaAssistant">Second Part: Area Assistant: {this.state.areaAssistant} P.S Sent to the Circle</td></tr>
                            <tr><td colspan="2" id="rangeOfficer">Third Part: Range Officer: {this.state.rangeOfficer}Sent to the Area</td></tr>
                            <tr><td>Place:xxxxxx</td><td>Signature of the Forest Guard...................................</td></tr>
                            <tr><td>Date: 07-03-2023</td><td id="premises">Premises: {this.state.premises}</td></tr>
                            <tr><td colspan="2">Note: This report should be sent to the senior officer within 48 hours of detection of the crime</td></tr>
                            <tr><td colspan="2">GRPRJ-FS/106-8/2005-5000 Bks of 25 lvs</td></tr>
                        </table>
                        <div class="dotted-line"></div>

                        <table>
                            <tr>
                                <th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Forest Department, Regional Forest<br/>(Part Three)</th>
                            </tr>
                            <tr><td>POR No: {this.state.porNumber}</td><td>Page No.</td></tr>
                            <tr><th colspan="2" style={{textAlign: 'center', fontWeight: 'bold'}}>Initial Crime Information</th></tr>
                            <tr><td colspan="2">1. Report Number: 999 Date:07 Month:03 Year 2023</td></tr>
                            <tr><td colspan="2" id="culpritDetails">2. Name of Culprit, Father's Name, Caste, and Address: {this.state.culpritName}, {this.state.fatherName},{this.state.culpritAddress},{this.state.caste}</td></tr>
                            <tr><td colspan="2" id="caseSection">3. Type and Section Of Crime: {this.state.crimeType}, {this.state.crimeSection}</td></tr>
                            <tr><td colspan="2" id="crimePlace">4. Place of Crime{this.state.crimePlace}</td></tr>
                            <tr><td colspan="2" id="crimeDate">5. Date of Crime{this.state.crimeDate}</td></tr>
                            <tr><td colspan="2" id="seizedGoods">6. Details of Seized Goods and Action Taken: {this.state.seizedGoods}, </td></tr>
                            <tr><td colspan="2" id="witnessNames">7. Names of Witnesses: {this.state.witnessNames}</td></tr>
                            <tr><td colspan="2" id="areaAssistant">Second Part: Area Assistant: {this.state.areaAssistant} P.S Sent to the Circle</td></tr>
                            <tr><td colspan="2" id="rangeOfficer">Third Part: Range Officer: {this.state.rangeOfficer}Sent to the Area</td></tr>
                            <tr><td>Place:xxxxxx</td><td>Signature of the Forest Guard...................................</td></tr>
                            <tr><td>Date: 07-03-2023</td><td id="premises">Premises: {this.state.premises}</td></tr>
                            <tr><td colspan="2" id="vma">V.M.A: {this.state.vma}Sent to Forest Department</td></tr>
                            <tr><td colspan="2" id="areaOfficer">Area Officer: {this.state.areaOfficer}</td></tr>
                            <tr><td colspan="2">Note: This report should be sent to the senior officer within 48 hours of detection of the crime</td></tr>
                            <tr><td colspan="2">GRPRJ-FS/106-8/2005-5000 Bks of 25 lvs</td></tr>
                        </table>
                    </body>
                </div>
                <button type="button" id='edit_button' onClick={this.EditPor} >Edit</button>
                <button type="button" onClick={this.downloadPDF} >Download PDF</button>
                <ReactToPrint
                    trigger={() => {
                        return <button >Print POR</button>
                    }}
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                />

                
            </React.Fragment>
        )
    }
}

export default PorForm