import express from 'express';
import { AIResponse, createCaseWithAIResponse } from '../constroller/clientController.js';
import authantication from '../middleware/authantication.js';

const router = express.Router()

    router.post('/AI_response', authantication, AIResponse)

    router.post('/create_case_with_ai_response', authantication, createCaseWithAIResponse)


export default router;