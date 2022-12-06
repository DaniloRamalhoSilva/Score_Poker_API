const validateUserFilds = (req, res, next) => {
  const { name, password } = req.body;

  if (!name || password === undefined) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = { validateUserFilds };
