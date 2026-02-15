import express from 'express';
import { lawyerProfile } from '../constroller/lawyerController.js';

const router = express.Router()

router.post('/createProfile', lawyerProfile)


export default router;