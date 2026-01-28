import express from 'express';
import { ragistrationUser, logIN } from '../controller/authController.js';

const router = express.Router()

router.post('/ragistration', ragistrationUser)


router.get('/userLogin', logIN)


export default router;