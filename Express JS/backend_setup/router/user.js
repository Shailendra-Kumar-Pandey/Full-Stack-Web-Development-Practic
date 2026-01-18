import express from 'express';
import { Ragistration } from '../controller/userController.js';

const router = express.Router()


router.post('/createUser', Ragistration)



export default router;