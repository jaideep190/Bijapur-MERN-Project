const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Offender schema
const OffenderSchema = new Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    age: { type: String, required: true },
    address: { type: String, required: true },
    offense: { type: String, required: true }
});

// Define the Condition schema
const ConditionSchema = new Schema({
    condition: { type: String, required: true }
});

// Define the Panchanama schema
const PanchanamaSchema = new Schema({
    forestOffice: { type: String, required: true },
    date: { type: String, required: true },
    offenders: [OffenderSchema],
    conditions: [ConditionSchema]
});

// Create the Panchanama model
const PanchanamaDatas = mongoose.model('Panchanama', PanchanamaSchema);

module.exports = PanchanamaDatas;
