const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Suspect schema
const SuspectSchema = new Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    caste: { type: String, required: true },
    residence: { type: String, required: true }
});

// Define the Rajinama schema
const RajinamaSchema = new Schema({
    suspects: [SuspectSchema],
    forestRelatedCrimes: { type: String, required: true },
    date: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    witness1: { type: String, required: true },
    witness2: { type: String, required: true },
    investigationOfficer: { type: String, required: true }
});

// Create the Rajinama model
const RajinamaDatas = mongoose.model('Rajinama', RajinamaSchema);

module.exports = RajinamaDatas;
