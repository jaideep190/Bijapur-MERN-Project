// backend/controllers/updateUserFormStatus.js

import userFormStatusModels from '../models/userFormStatusModel.js';

const updateUserFormStatus = async (req, res) => {
    const formData = req.body;
    console.log(formData);
    try {
        let updatedFormStatus;

        const existingFormStatus = await userFormStatusModels.findOne({ porNumber: formData.porNumber });

        if (!existingFormStatus && formData.formType !== 'porForm') {
            return res.status(404).json({ message: 'POR Number does not exist' });
        }

        // Update the respective formType field to true based on the request
        const updateField = {};
        updateField[formData.formType] = true;

        updatedFormStatus = await userFormStatusModels.findOneAndUpdate(
            { porNumber: formData.porNumber },
            updateField,
            { new: true, upsert: true }
        );

        return res.status(200).json(updatedFormStatus);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default updateUserFormStatus;