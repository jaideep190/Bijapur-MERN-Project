// backend/routes/userRoutes.js

import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { savePOR } from '../controllers/porData.js';
import { getCrimeDetails } from '../controllers/crimeDetailsController.js'; // Import the new controller
import { saveGiraftari } from '../controllers/GiraftariController.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.post('/savepor',protect, savePOR);
router.post('/savegiraftari',protect, saveGiraftari);
router.route('/crimedetails').get(protect, getCrimeDetails); // Use the function from the new controller

export default router;


