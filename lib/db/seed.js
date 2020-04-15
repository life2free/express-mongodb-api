const Source = require("../models/Source");
const sourceJsonData = require("./sources.json");
const News = require("../models/News");
const newsJsonData = require("./newss.json");

Source.collection.remove({});
Source.collection
  .insert(sourceJsonData)
  .then((sources) => {
    console.log(sources);
  })
  .catch((err) => {
    console.log(err);
  });

News.collection.remove({});
News.collection
  .insert(newsJsonData)
  .then((newss) => {
    console.log(newss);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });
