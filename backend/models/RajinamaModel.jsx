const mongoose = require('mongoose');

const RajinamaSchema = new mongoose.Schema({
  porNumber: { type: String, required: true },
  suspect1: {
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    caste: { type: String, required: true },
    residence: { type: String, required: true }
  },
  suspect2: {
    name: { type: String, required: false },
    fatherName: { type: String, required: false },
    caste: { type: String, required: false },
    residence: { type: String, required: false }
  },
  suspect3: {
    name: { type: String, required: false },
    fatherName: { type: String, required: false },
    caste: { type: String, required: false },
    residence: { type: String, required: false }
  },
  suspect4: {
    name: { type: String, required: false },
    fatherName: { type: String, required: false },
    caste: { type: String, required: false },
    residence: { type: String, required: false }
  },
  suspect5: {
    name: { type: String, required: false },
    fatherName: { type: String, required: false },
    caste: { type: String, required: false },
    residence: { type: String, required: false }
  },
  forestRelatedCrimes: { type: String, required: true },
  date: { type: Date, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  witness1: { type: String, required: true },
  witness2: { type: String, required: true },
  investigationOfficer: { type: String, required: true }
});

module.exports = mongoose.model('Rajinama', RajinamaSchema);
