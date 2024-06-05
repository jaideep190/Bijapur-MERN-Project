const mongoose = require('mongoose');

const OffenderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  offense: { type: String, required: true }
});

const ConditionSchema = new mongoose.Schema({
  condition: { type: String, required: true }
});

const PanchanamaSchema = new mongoose.Schema({
  porNumber: { type: String, required: true },
  forestOffice: { type: String, required: true },
  date: { type: Date, required: true },
  offenders: [OffenderSchema],
  conditions: [ConditionSchema]
});

module.exports = mongoose.model('Panchanama', PanchanamaSchema);
