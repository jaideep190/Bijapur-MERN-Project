const Rajinama = require('../models/Rajinama');
const FormStatus = require('../models/FormStatus');

exports.createRajinama = async (req, res) => {
  const { porNumber, suspect1, fatherName1, caste1, residence1, suspect2, fatherName2, caste2, residence2, suspect3, fatherName3, caste3, residence3, suspect4, fatherName4, caste4, residence4, suspect5, fatherName5, caste5, residence5, forestRelatedCrimes, date, month, year, witness1, witness2, investigationOfficer } = req.body;

  try {
    const rajinama = new Rajinama({
      porNumber,
      suspect1,
      fatherName1,
      caste1,
      residence1,
      suspect2,
      fatherName2,
      caste2,
      residence2,
      suspect3,
      fatherName3,
      caste3,
      residence3,
      suspect4,
      fatherName4,
      caste4,
      residence4,
      suspect5,
      fatherName5,
      caste5,
      residence5,
      forestRelatedCrimes,
      date,
      month,
      year,
      witness1,
      witness2,
      investigationOfficer
    });

    await rajinama.save();

    await FormStatus.updateOne(
      { porNumber },
      { $set: { 'forms.rajinama': true }, $addToSet: { linkedForms: 'Rajinama' } }
    );

    res.status(201).json(rajinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRajinama = async (req, res) => {
  try {
    const rajinama = await Rajinama.findOne({ porNumber: req.params.porNumber });
    if (!rajinama) return res.status(404).json({ msg: 'Rajinama not found' });
    res.json(rajinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
