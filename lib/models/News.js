const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  source: { type: Schema.Types.ObjectId, ref: "Source" },
  author: { type: String, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  url: { type: String, trim: true },
  imageUrl: { type: String, trim: true },
  date: { type: String, trim: true },
  content: { type: String, trim: true },
});

module.exports = mongoose.model("News", newsSchema);
