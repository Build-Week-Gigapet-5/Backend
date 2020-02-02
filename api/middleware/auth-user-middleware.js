const jwt = require("jsonwebtoken");
const secrets = require("../../secrets/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Bad one!" });
      } else {
        if (decodedToken.type === "user") {
          req.name = decodedToken;
          next();
        } else {
          res.status(400).json({ message: "Wrong user type" });
        }
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
