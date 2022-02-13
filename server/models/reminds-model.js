const { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

const RemindSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  /*       dueDate: { type: String, required: true },
    priority: { type: Object, unique: true, required: true },
    status: { type: Boolean }, */
  id: { type: String, required: true },
});
module.exports = model("Remind", RemindSchema);
