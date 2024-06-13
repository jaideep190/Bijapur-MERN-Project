// controllers/crimeDetailsController.js

import Por from '../models/PorModel.js';
import asyncHandler from 'express-async-handler'; // Import asyncHandler

const getCrimeDetails = asyncHandler(async (req, res) => { // Correct asyncHandler usage
    const porNumbers = await Por.find({}, 'porNumber'); // Assuming 'porNumber' is the field containing POR numbers
    if (porNumbers) {
        res.json(porNumbers);
    } else {
        console.error("Error fetching POR numbers");
        res.status(500).json({ message: 'Server Error' });
    }
});


export { getCrimeDetails };