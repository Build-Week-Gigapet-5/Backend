const jwt = require("jsonwebtoken");

const secrets = require("../../../secrets/secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    name: user.name
  };

  const options = {
    expiresIn: "5d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = generateToken;
