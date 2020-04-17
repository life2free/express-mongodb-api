const express = require("express");
const app = express();
const parser = require("body-parser");
const indexRoute = require("./routes/indexRouter");
const SERVERPORT = require("./config").ServerPort;

app.use(parser.json());
app.set("port", process.env.PORT || SERVERPORT);

app.use(indexRoute);

app.listen(app.get("port"), () => {
  console.log(`✅ listening to port ${app.get("port")} 🌟`);
});
