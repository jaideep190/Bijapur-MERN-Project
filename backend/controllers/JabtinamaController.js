const Jabtinama = require('../models/Jabtinama');
const FormStatus = require('../models/FormStatus');

exports.createJabtinama = async (req, res) => {
  const { porNumber, date, placeAndTime, nameAndPositionOffender, nameSeizingOfficer, nameInvestigatingOfficer, specialRecordPrepared, nameOffenderResidence, caste, timber, firewood, others, rate, quantity, amount, total, quantity1, amount1 } = req.body;

  try {
    const jabtinama = new Jabtinama({
      porNumber,
      date,
      placeAndTime,
      nameAndPositionOffender,
      nameSeizingOfficer,
      nameInvestigatingOfficer,
      specialRecordPrepared,
      nameOffenderResidence,
      caste,
      timber,
      firewood,
      others,
      rate,
      quantity,
      amount,
      total,
      quantity1,
      amount1
    });

    await jabtinama.save();

    await FormStatus.updateOne(
      { porNumber },
      { $set: { 'forms.jabtinama': true }, $addToSet: { linkedForms: 'Jabtinama' } }
    );

    res.status(201).json(jabtinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getJabtinama = async (req, res) => {
  try {
    const jabtinama = await Jabtinama.findOne({ porNumber: req.params.porNumber });
    if (!jabtinama) return res.status(404).json({ msg: 'Jabtinama not found' });
    res.json(jabtinama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
