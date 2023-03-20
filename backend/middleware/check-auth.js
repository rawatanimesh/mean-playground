const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //token is generally sent in the format of 'Bearer dsfergfjvjlvjaerj' so we are splitting at white space
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_this_should_be_longer");
    next();
  } catch (error) {
    //send 401 for not authenticated
    res.status(401).json({ message: "Auth failed!" });
  }
};