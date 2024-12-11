import express from 'express';
import { createStar, getAllStars } from '../Controllers/StarsController.js';
import { authenticateJWT } from '../Middlewares/JwtAuthentication.js';
const router = express.Router();

router.get('/', authenticateJWT, getAllStars);
router.post('/', authenticateJWT, createStar);

export default router;
