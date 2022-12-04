const { verifyToken } = require('../auth/jwtFunctions');

module.exports = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = verifyToken(token);
  if (payload.isError) {
    return res.status(401)
      .json({ message: 'Expired or invalid token' });
  }

  return next();
};
