const Source = require("../models/Source");
const sourceJsonData = require("./sources.json");

Source.collection.remove({});
Source.collection
  .insert(sourceJsonData)
  .then((sources) => {
    console.log(sources);
  })
  .catch((err) => {
    console.log(err);
  });
