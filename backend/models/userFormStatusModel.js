import mongoose from 'mongoose';

const userFormStatusSchema = new mongoose.Schema({
    porNumber:{
        type:String,
        required:true
    },
    porForm:{
        type:Boolean,
    },
    japtinamaForm:{
        type:Boolean,
    },
    rajinamaForm:{
        type:Boolean,
    },
    girafthariPanchnamaForm:{
        type:Boolean,
    },
    supurdnamaForm:{
        type:Boolean,
    },    
});

const userFormStatusModels = mongoose.model('userFormStatusModels', userFormStatusSchema);
export default userFormStatusModels;
