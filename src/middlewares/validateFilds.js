const validateUserFilds = (req, res, next) => {
  const { name, password } = req.body;

  if (!name || password === undefined) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const validateConfigFilds = (req, res, next) => {
  const {
    pointsFirst,
    pointsSecond,
    pointsThird,
    minUsers,
  } = req.body;

  if (!pointsFirst || !pointsSecond || !pointsThird || !minUsers) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const validateMatchFilds = (req, res, next) => {
  const {
    userIds,
    userIdFirst,
    userIdSecond,
    userIdThird,
  } = req.body;

  if (!userIds || !userIdFirst || !userIdSecond || !userIdThird) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  validateUserFilds,
  validateConfigFilds,
  validateMatchFilds,
};
