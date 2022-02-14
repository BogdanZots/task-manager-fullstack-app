const remindsModel = require("../models/reminds-model");
class RemindsService {
  async createRemind(data) {
    const { title, description, id } = data;
    const remind = await remindsModel.create({ title, description, id });
    if (!remind) return null;
    return remind;
  }
  async fetchReminds(id, searchField) {
    const reminds = await remindsModel.find({ id, title: { "$regex": `${searchField}`, "$options": "i" }});
    if (!reminds) return null;
    return reminds;
  }
}

module.exports = new RemindsService();
