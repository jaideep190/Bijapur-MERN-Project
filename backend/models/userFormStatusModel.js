const mongoose = require('mongoose');

const FormStatusSchema = new mongoose.Schema({
  porNumber: {
    type: String,
    required: true,
    unique: true,
  },
  forms: {
    por: {
      type: Boolean,
      default: false,
    },
    jabtinama: {
      type: Boolean,
      default: false,
    },
    supurthinama: {
      type: Boolean,
      default: false,
    },
    rajinama: {
      type: Boolean,
      default: false,
    },
    panchanama: {
      type: Boolean,
      default: false,
    },
  },
  linkedForms: [{
    type: String,
    enum: ['Jabtinama', 'Supurthinama', 'Rajinama', 'Panchanama'],
  }],
});

module.exports = mongoose.model('FormStatus', FormStatusSchema);
