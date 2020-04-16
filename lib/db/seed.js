const Source = require("../models/Source");
const sourcesJsonData = require("./sources.json");
const News = require("../models/News");
const newssJsonData = require("./newss.json");

Source.collection.remove({});
// Source.deleteMany({}).then(() => {
Source.collection
  .insert(sourcesJsonData)
  .then((sources) => {
    console.log(sources);
  })
  .catch((err) => {
    console.log(err);
  });
// });

News.collection.remove({});
// News.deleteMany({}).then(() => {
newssJsonData.map((newsJsonData) => {
  let newsSource = newsJsonData.source;

  Source.findOne({ id: `${newsSource.id}` }).then((source) => {
    newsJsonData.source = source._id;
    News.collection
      .insert(newsJsonData)
      .then((news) => {
        console.log(news);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
// process.exit();
// });

// News.collection
//   .insert(newssJsonData)
//   .then((newss) => {
//     console.log(newss);
//     process.exit();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
