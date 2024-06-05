const FormStatus = require('../models/FormStatus');

exports.getFormStatus = async (req, res) => {
  try {
    const formStatus = await FormStatus.findOne({ porNumber: req.params.porNumber });
    if (!formStatus) return res.status(404).json({ msg: 'Form status not found' });
    res.json(formStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateFormStatus = async (req, res) => {
  const { porNumber, formName, status } = req.body;

  try {
    const formStatus = await FormStatus.findOne({ porNumber });
    if (!formStatus) return res.status(404).json({ msg: 'Form status not found' });

    formStatus.forms[formName] = status;

    if (status) {
      formStatus.linkedForms.addToSet(formName);
    } else {
      formStatus.linkedForms.pull(formName);
    }

    await formStatus.save();
    res.json(formStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
