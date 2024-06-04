const mongoose = require('mongoose');

const SupurthinamaSchema = new mongoose.Schema({
  porNumber: { type: String, required: true },
  name: { type: String, required: true },
  fathersName: { type: String, required: true },
  caste: { type: String, required: true },
  profession: { type: String, required: true },
  residence: { type: String, required: true },
  tehsil: { type: String, required: true },
  district: { type: String, required: true },
  date: { type: Date, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  witness1: { type: String, required: true },
  witness2: { type: String, required: true }
});

module.exports = mongoose.model('Supurthinama', SupurthinamaSchema);
