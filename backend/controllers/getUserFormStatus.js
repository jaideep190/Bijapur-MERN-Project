import userFormStatusModels from '../models/userFormStatusModel.js';

const getUserFormStatus = async (req, res) => {
    const fromData = req.body;
    try {
        const caseDetails = await userFormStatusModels.findOne({ porNumber: fromData.porNumber });
        
        if (!caseDetails) {
            return res.status(404).json({ message: 'POR Number not found' });
        }

        return res.status(200).json(caseDetails);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default getUserFormStatus;

