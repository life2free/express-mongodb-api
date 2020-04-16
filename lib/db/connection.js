const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newss", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = mongoose;
