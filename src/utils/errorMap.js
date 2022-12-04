const errorMap = {
  ALREADY_REGISTERED: 409,
  INVALID_VALUE: 400,
  INVALID_FILDS: 400,
  NOT_REGISTERED: 404,
  NOT_PERMISSION: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
