import express from 'express';
import { completeProfile } from '../controller/landloadController.js';
const router = express.Router()


router.post('/createProfile', completeProfile)

export default router;