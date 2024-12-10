import express from 'express';
import { createStar, getAllStars } from '../Controllers/StarsController.js';
const router = express.Router();

router.get('/', getAllStars)
router.post('/', createStar)

export default router;
