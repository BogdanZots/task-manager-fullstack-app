const { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

const BatchSchema = new Schema({
  // вызываем метод схема передаём туда обьект , этот обьект и есть наша схема данных
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  priority: { type: Object, unique: true, required: true },
  status: { type: Boolean },
  userId: { type: Number, required: true },
});

const batch = model("Batch", BatchSchema);
new batch({ title: "title" }).save((err) => {
  // через new batch() - создаём document
  if (err) return;
});
module.exports = model("Batch", BatchSchema); // Создаём модель "Batch" по схеме BatchSchema
