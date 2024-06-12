const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Giraftari schema
const GiraftariSchema = new Schema({
    policeStationDistrict: { type: String, required: true },
    crimeNumber: { type: String, required: true },
    accusedName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    age: { type: String, required: true },
    address: { type: String, required: true },
    arrestDateTime: { type: String, required: true },
    placeOfArrest: { type: String, required: true },
    arrestingOfficer: { type: String, required: true },
    witness1: { type: String, required: true },
    witness2: { type: String, required: true },
    relativeNotified: { type: String, required: true },
    itemsFound: { type: String, required: true },
    signatureArrestedPerson: { type: String, required: true },
    signatureOfficer: { type: String, required: true }
});

// Create the Giraftari model
const GiraftariDatas = mongoose.model('Giraftari', GiraftariSchema);

module.exports = GiraftariDatas;
