const mongoose = require('mongoose');

const JabtinamaSchema = new mongoose.Schema({
  porNumber: { type: String, required: true },
  date: { type: Date, required: true },
  placeAndTime: { type: String, required: true },
  nameAndPositionOffender: { type: String, required: true },
  nameSeizingOfficer: { type: String, required: true },
  nameInvestigatingOfficer: { type: String, required: true },
  specialRecordPrepared: { type: String, required: true },
  nameOffenderResidence: { type: String, required: true },
  caste: { type: String, required: true },
  timber: { type: String, required: true },
  firewood: { type: String, required: true },
  others: { type: String, required: true },
  rate: { type: Number, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  total: { type: Number, required: true },
  quantity1: { type: Number, required: true },
  amount1: { type: Number, required: true }
});

module.exports = mongoose.model('Jabtinama', JabtinamaSchema);
