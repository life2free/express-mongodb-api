const Source = require("../models/Source");
const sourcesJsonData = require("./sources.json");
const News = require("../models/News");
const newssJsonData = require("./newss.json");

Source.deleteMany({}).then(() => {
  Source.create(sourcesJsonData)
    .then((sources) => {
      console.log(sources);

      News.deleteMany({}).then(() => {
        newssJsonData.map((newsJsonData) => {
          let newsSource = newsJsonData.source;
          Source.findOne({ id: `${newsSource.id}` }).then((source) => {
            newsJsonData.source._id = source._id;
            News.create(newsJsonData)
              .then((news) => {
                console.log(news);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
