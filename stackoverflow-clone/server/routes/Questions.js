import express from 'express'

import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask', AskQuestion)
router.get('/get', getAllQuestions)
router.delete('delete/:id', deleteQuestion );
router.delete('vote/:id', auth, voteQuestion );
export default router