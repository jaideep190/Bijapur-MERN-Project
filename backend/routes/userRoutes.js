// backend/routes/userRoutes.js

import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { savePOR } from '../controllers/porData.js';
import { ExistingPorNumbers } from '../controllers/ExistingPorNumbersController.js';
import getUserFormStatus from '../controllers/getUserFormStatus.js';
import updateUserFormStatus from '../controllers/updateUserFormStatus.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.post('/savepor',protect, savePOR);
router.route('/existingpornumbers').get(protect, ExistingPorNumbers);
router.post('/getuserformstatus',protect,getUserFormStatus) // Use the function from the new controller
router.post('/updateuserformstatus',protect,updateUserFormStatus)

export default router;

