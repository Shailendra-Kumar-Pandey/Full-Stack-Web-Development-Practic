import express from 'express';
import { getAllLandload } from '../controller/adminController.js';
import vailidation from '../middleware/chackAuthantication.js';
const router = express.Router()


router.get('/getAllLandload', vailidation, getAllLandload)



export default router;