const mongoose = require('mongoose');

const offenderSchema = new mongoose.Schema({
    name: String,
    fatherName: String,
    caste: String,
    age: String,
    village: String,
    gram: String,
    tehsil: String,
    district: String,
    pin: String,
    arrestDate: String,
    arrestTime: String
});

const remandFormSchema = new mongoose.Schema({
    caseName: String,
    district: String,
    caseNo: String,
    caseDate: String,
    sections: String,
    incidentDate: String,
    incidentPlace: String,
    issueDate: String,
    complainantName: String,
    offenders: [offenderSchema], // Embedded array of offenders
    preRemandDate: String,
    finalRemandDate: String,
    remark: String,
    finalReportSubmissionDate: String,
    magistrateName: String,
    magistrateDistrict: String
});

const RemandDatas = mongoose.model('RemandForm', remandFormSchema);

module.exports = RemandDatas;
