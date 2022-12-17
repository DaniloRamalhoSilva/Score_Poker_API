require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = ({ id, name }) => {
  const token = jwt.sign({ data: { userId: id, name } }, secret, jwtConfig);
  return token;
};

const verifyToken = (authorizatio) => {
  try {
    const payload = jwt.verify(authorizatio, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  createToken,
  verifyToken,
};
