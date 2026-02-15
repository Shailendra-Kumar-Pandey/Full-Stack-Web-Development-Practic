import express from 'express';
import { fetchLawyers, lawyerStatus } from '../constroller/adminController.js';
import authantication from '../middleware/authantication.js';
const router = express.Router()


router.get('/getAllLawyers', authantication, fetchLawyers);


router.put('/changeLawyerStatus/:profileID', authantication, lawyerStatus);


export default router;