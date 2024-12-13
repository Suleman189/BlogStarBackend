import express from 'express';
import { createStar, getAllStars, getStar, updateStar } from '../Controllers/StarsController.js';
import { authenticateJWT } from '../Middlewares/JwtAuthentication.js';

const router = express.Router();

router.get('/', authenticateJWT, getAllStars);
router.post('/', authenticateJWT, createStar);
router.get('/:id', authenticateJWT, getStar)
router.put('/:id', authenticateJWT, updateStar)

export default router;
