const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newss", { useNewUrlParser: true });

module.exports = mongoose;
