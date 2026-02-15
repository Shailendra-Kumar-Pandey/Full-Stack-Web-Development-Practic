import express from 'express';
import { lawyerProfile } from '../constroller/lawyerController';

const router = express.Router()

router.post('/createProfile', lawyerProfile)


export default router;