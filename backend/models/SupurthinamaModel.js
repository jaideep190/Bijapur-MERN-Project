const mongoose = require('mongoose');

const supurthinamaSchema = new mongoose.Schema({
    name: String,
    fathersName: String,
    caste: String,
    profession: String,
    residence: String,
    tehsil: String,
    district: String,
    date: String,
    month: String,
    year: String,
    witness1: String,
    witness2: String
});

const SupurthinamaDatas = mongoose.model('SupurthinamaForm', supurthinamaSchema);

module.exports = SupurthinamaDatas;
