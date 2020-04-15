const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Source = new Schema({
  id: { type: String, trim: true },
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  url: { type: String, trim: true },
  category: { type: String, trim: true },
  language: { type: String, trim: true },
  country: { type: String, trim: true },
});

module.exports = mongoose.model("Source", Source);
