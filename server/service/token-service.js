require("dotenv").config;
const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model");

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, "accesssecretKey", {
      expiresIn: "120s",
    });
    const refreshToken = jwt.sign(payload, "refreshsecretKey", {
      expiresIn: "30d",
    });
    return { accessToken, refreshToken };
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne(userId);
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save(); // почему у него есть доступ к методу save ??
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }
  validateAccessToken(token) {
    try {
      console.log("tolen", token);
      const userData = jwt.verify(token, "accesssecretKey");
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, "refreshsecretKey");
      return userData;
    } catch (e) {
      return null;
    }
  }
  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}
module.exports = new TokenService();
