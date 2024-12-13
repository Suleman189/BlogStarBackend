import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  // console.log(process.env.AUTHENTICATION)
  if (!(process.env.AUTHENTICATION == 'true')) return next();

  const token = req.headers.authorization?.split(' ')[1];
  // console.log(req.headers)
  if (!token) {
    return res.status(401).json({ message: 'Access Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log("================================================")
    // console.table(decoded)
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: 'Invalid or expired token', error: error.message });
  }
};

export { authenticateJWT };
