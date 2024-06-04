const Panchanama = require('../models/Panchanama');
const FormStatus = require('../models/FormStatus');

exports.createPanchanama = async (req, res) => {
  const { porNumber, forestOffice, date, offenders, conditions } = req.body;

  try {
    const panchanama = new Panchanama({
      porNumber,
      forestOffice,
      date,
      offenders,
      conditions
    });

    await panchanama.save();

    await FormStatus.updateOne(
      { porNumber },
      { $set: { 'forms.panchanama': true }, $addToSet: { linkedForms: 'Panchanama' } }
    );

    res.status(201).json(panchanama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPanchanama = async (req, res) => {
  try {
    const panchanama = await Panchanama.findOne({ porNumber: req.params.porNumber });
    if (!panchanama) return res.status(404).json({ msg: 'Panchanama not found' });
    res.json(panchanama);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
