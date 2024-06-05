const Supurthinama = require('../models/Supurthinama');
const FormStatus = require('../models/FormStatus');

exports.createSupurthinama = async (req, res) => {
  const { porNumber, name, fathersName, caste, profession, residence, tehsil, district, date, month, year, witness1, witness2 } = req.body;

  try {
    const supurthinama = new Supurthinama({
      porNumber,
      name,
      fathersName,
      caste,
      profession,
      residence,
      tehsil,
      district,
      date,
      month,
      year,
      witness1,
      witness2
    });

    await supurthinama.save();

    await FormStatus.updateOne(
      { porNumber },
      { $set: { 'forms.supurthinama': true }, $addToSet: { linkedForms: 'Supurthinama' } }
    );

    res.status(201).json(supurthinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getSupurthinama = async (req, res) => {
  try {
    const supurthinama = await Supurthinama.findOne({ porNumber: req.params.porNumber });
    if (!supurthinama) return res.status(404).json({ msg: 'Supurthinama not found' });
    res.json(supurthinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
