let dbURI = "";
if (process.env.NODE_ENV === "production") {
  dbURI = process.env.DB_URL;
} else {
  dbURI = "mongodb://localhost/newss";
}
const mongoose = require("mongoose");
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = mongoose;
