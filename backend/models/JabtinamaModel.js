const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Jabtinama schema
const JabtinamaSchema = new Schema({
    porNumber: { type: String, required: true },
    date: { type: String, required: true },
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
    rate: { type: String, required: true },
    quantity: { type: String, required: true },
    amount: { type: String, required: true },
    total: { type: String, required: true },
    quantity1: { type: String, required: true },
    amount1: { type: String, required: true },
    toggle: { type: Number, default: 0 }
});

// Create the Jabtinama model
const JabtinamaDatas = mongoose.model('Jabtinama', JabtinamaSchema);

module.exports = JabtinamaDatas;
