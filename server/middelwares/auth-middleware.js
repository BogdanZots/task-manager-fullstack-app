const tokenService = require("../service/token-service");

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Unathorized" });
    }
    
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ message: "Unathorized" });
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return res.status(401).json({ message: "Unathorized3" });
    }
    req.user = userData;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Unathorized" });
  }
};
