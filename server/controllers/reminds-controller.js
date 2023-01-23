const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const { checkAuth } = require('../service/user-service');
const userService = require('../service/user-service');
const remindsService = require('../service/reminds-service');
class RemindsController {
  async createRemind(req, res, next) {
    const { title, description, id } = req.body;
    try {
      const data = await remindsService.createRemind({
        title,
        description,
        id,
      });
      return res.json({ data }).status(200);
    } catch (e) {
      next(e);
    }
  }
  async getReminds(req, res, next) {
    const id = req.query.userId;
    const { searchField = '' } = req.query;
    try {
      const remindData = await remindsService.fetchReminds(id, searchField);
      return res.json({ data: [...remindData] }).status(200);
    } catch (e) {
      next(e);
    }
  }
  async removeRemind(req, res, next) {
    const { id } = req.params;
    try {
      const data = await remindsService.deleteRemind(id);
      return res.json({ data }).status(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RemindsController();
