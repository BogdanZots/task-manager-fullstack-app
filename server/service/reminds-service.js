const remindsModel = require("../models/reminds-model");
class RemindsService {
  async createRemind(data) {
    const { title, description } = data;
    const remind = await remindsModel.create({ title, description });
    if (!remind) return null;
    return remind;
  }
}

module.exports = new RemindsService();
