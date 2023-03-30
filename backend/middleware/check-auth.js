const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //token is generally sent in the format of 'Bearer dsfergfjvjlvjaerj' so we are splitting at white space
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    //send 401 for not authenticated
    res.status(401).json({ message: "You are not authenticated." });
  }
};
