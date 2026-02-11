import express from 'express';
import { RagistrationController } from '../constroller/authController.js';

const router = express.Router()


router.post('/ragistration', RagistrationController)


export default router;