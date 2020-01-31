const jwt = require("jsonwebtoken");
const secret = require("../../secrets/secrets");

module.exports = () => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, secret.jwt);
      next();
    } catch (err) {
      res.status(401).json({ message: "You have entered invalid crednetials" });
    }
  };
};
