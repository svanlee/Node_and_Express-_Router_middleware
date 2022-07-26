function validateNameLength(req, res, next) {
    const nameLength = req.params.name;
  if (nameLength.length < 3) {
    next("Name length is too short.");
  } else {
    next();
  }
};

module.exports = validateNameLength;
