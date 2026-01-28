import express from 'express';
import { ragistrationUser } from '../controller/authController.js';

const router = express.Router()

router.post('/ragistration', ragistrationUser)


export default router;