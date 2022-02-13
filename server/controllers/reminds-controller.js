const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const { checkAuth } = require("../service/user-service");
const userService = require("../service/user-service");
const remindsService = require("../service/reminds-service");
class RemindsController {
  async createRemind(req, res, next) {
    const { title, description, id } = req.body;
    try {
      const remindData = await remindsService.createRemind({
        title,
        description,
        id,
      });
      return res.json({ remindData }).status(200);
    } catch (e) {
      next(e);
    }
  }
  async getReminds(req, res, next) {
    const id = req.query.userId;
    console.log(id);
    try {
      const remindData = await remindsService.fetchReminds(id);
      return res.json({ remindData }).status(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RemindsController();
