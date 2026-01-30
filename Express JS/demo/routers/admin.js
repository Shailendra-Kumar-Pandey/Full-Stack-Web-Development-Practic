import express from 'express';
import { getAllLandload, landloadProfileVerification } from '../controller/adminController.js';
import vailidation from '../middleware/chackAuthantication.js';
const router = express.Router()


router.get('/getAllLandload', vailidation, getAllLandload)

router.put('/landloadStatus/:profileID', vailidation, landloadProfileVerification)



export default router;