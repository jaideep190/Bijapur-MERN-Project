const express = require('express');
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { savePOR } = require('../controllers/porData');
const { ExistingPorNumbers } = require('../controllers/ExistingPorNumbersController');
const getUserFormStatus = require('../controllers/getUserFormStatus');
const updateUserFormStatus = require('../controllers/updateUserFormStatus');
const {
  createPOR,
  getPOR,
  createJabtinama,
  getJabtinama,
  createSupurthinama,
  getSupurthinama,
  createRajinama,
  getRajinama,
  createPanchanama,
  getPanchanama,
} = require('../controllers/formController');

const router = express.Router();

// User Authentication Routes
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

// User Profile Routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// POR Routes
router.post('/por', protect, createPOR);
router.get('/por/:porNumber', protect, getPOR);

// Jabtinama Routes
router.post('/jabtinama', protect, createJabtinama);
router.get('/jabtinama/:porNumber', protect, getJabtinama);

// Supurthinama Routes
router.post('/supurthinama', protect, createSupurthinama);
router.get('/supurthinama/:porNumber', protect, getSupurthinama);

// Rajinama Routes
router.post('/rajinama', protect, createRajinama);
router.get('/rajinama/:porNumber', protect, getRajinama);

// Panchanama Routes
router.post('/panchanama', protect, createPanchanama);
router.get('/panchanama/:porNumber', protect, getPanchanama);

// Additional Routes for Form Status
router.post('/getuserformstatus', protect, getUserFormStatus);
router.post('/updateuserformstatus', protect, updateUserFormStatus);


module.exports = router;
