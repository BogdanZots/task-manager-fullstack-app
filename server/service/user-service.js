const UserModel = require("../models/user-model"); // импоритруем модель так как model исп. для операция с базой данных
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("../service/mail-service");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");
const remindsModel = require("../models/reminds-model");
const {
  generateTokens,
  validateAccessToken,
} = require("../service/token-service");
require("dotenv").config;
class UserService {
  async registration(email, password, name, surname , role) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with ${candidate.email} already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      // создаёт запись в бд ( document )
      email,
      password: hashPassword,
      activationLink,
      name,
      surname,
      role,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({
      ...userDto,
    });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw new Error("Неккоректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }
  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      return res.status(400).json({ message: "Pass is not equal" });
    }
    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      return res.status(401).json({ message: "Unathorized" });
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      return res.status(401).json({ message: "Unathorized" });
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
  async checkAuth(authToken) {
    const user = await validateAccessToken(authToken);
    console.log("user", user);
    if (!user) return null;
    return true;
  }
}

module.exports = new UserService();
