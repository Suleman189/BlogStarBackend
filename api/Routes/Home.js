import express from 'express';

const router = express.Router();

router.get('/', function(req, res) {
  res.json({success: 'Successful routing'})
})

export default router;
