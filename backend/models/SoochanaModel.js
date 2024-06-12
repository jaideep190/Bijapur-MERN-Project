const mongoose = require('mongoose');

const soochnaSchema = new mongoose.Schema({
    caseNumber: String,
    date: String,
    suspectName: String,
    fatherName: String,
    village: String,
    policeStation: String,
    district: String,
    sections: String,
    reason: String,
    arrestDate: String,
    arrestTime: String,
    magistrate: String,
    arrestedPersonName: String,
    relativeName: String,
    witness1Signature: String,
    witness2Signature: String,
    rangeOfficerSignature: String
});

const SoochnaDatas = mongoose.model('SoochnaForm', soochnaSchema);

module.exports = SoochnaDatas;
