import express from 'express';
import { fetchLawyers } from '../constroller/adminController.js';
import authantication from '../middleware/authantication.js';
const router = express.Router()


router.get('/getAllLawyers', authantication, fetchLawyers);

export default router;