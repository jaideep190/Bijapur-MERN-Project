const mongoose = require('mongoose');

const PORSchema = new mongoose.Schema({
  porNumber: { type: String, unique: true, required: true },
  culpritName: { type: String, required: true },
  fatherName: { type: String, required: true },
  culpritAddress: { type: String, required: true },
  caste: { type: String, required: true },
  crimeType: { type: String, required: true },
  crimeSection: { type: String, required: true },
  crimePlace: { type: String, required: true },
  crimeDate: { type: Date, required: true },
  seizedGoods: { type: String, required: true },
  witnessNames: [{ type: String }],
  areaAssistant: { type: String, required: true },
  rangeOfficer: { type: String, required: true },
  areaOfficer: { type: String, required: true },
  vma: { type: String, required: true },
  premises: { type: String, required: true }
});

module.exports = mongoose.model('POR', PORSchema);
