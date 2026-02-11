import express from 'express';
import { logIN, RagistrationController } from '../constroller/authController.js';

const router = express.Router()


router.post('/ragistration', RagistrationController)


router.post('/login', logIN);

export default router;