import mongoose from 'mongoose';

const porSchema = new mongoose.Schema({
    porNumber:{
        type:String,
        required:true
    },
    culpritName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    culpritAddress: {
        type: String,
        required: true
    },
    caste: {
        type: String,
        required: true
    },
    crimeType: {
        type: String,
        required: true
    },
    crimeSection: {
        type: String,
        required: true
    },
    crimePlace: {
        type: String,
        required: true
    },
    crimeDate: {
        type: String,
        required: true
    },
    seizedGoods: {
        type: String,
        required: true
    },
    witnessNames: {
        type: String,
        required: true
    },
    areaAssistant: {
        type: String,
        required: true
    },
    rangeOfficer: {
        type: String,
        required: true
    },
    areaOfficer: {
        type: String,
        required: true
    },
    vma: {
        type: String,
        required: true
    },
    premises: {
        type: String,
        required: true
    }
});

const porDatas = mongoose.model('porDatas', porSchema);
export default porDatas;