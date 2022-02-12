const remindsModel = require("../models/reminds-model");
class RemindsService {
  async createRemind(data) {
    const { title, description } = data;
    const remind = await remindsModel.create({ title, description });
    if (!remind) return null;
    return remind;
  }
  async fetchReminds() {
    const reminds = await remindsModel.find();
    if (!remind) return null;
    return reminds;
  }
}

module.exports = new RemindsService();
