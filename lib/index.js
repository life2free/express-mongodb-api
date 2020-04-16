const express = require("express");
const app = express();
const parser = require("body-parser");
const indexRoute = require("./routes/indexRouter");
const SERVERPORT = 4000;

app.use(parser.json());

app.use(indexRoute);

app.listen(SERVERPORT, () => {
  console.log(`listening to port ${SERVERPORT}`);
});
