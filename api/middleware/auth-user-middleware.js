const jwt = require("jsonwebtoken");
const secrets = require("../../secrets/secrets");

module.exports = () => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, secrets.jwtSecret);
      req.user = decoded.id;
      next();
    } catch (err) {
      res.status(401).json({ Message: "Invalid credentials!" });
    }
  };
};
