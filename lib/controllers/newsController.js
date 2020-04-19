const News = require("../models/News");
const functions = require("./functions");
const Config = require("../config");
const Source = require("../models/Source");

module.exports = {
  index: (req, res) => {
    News.find({}).then((newss) => {
      if (newss === null || newss.length === 0) {
        res.send("There is no News!");
      } else {
        res.json(newss);
      }
    });
  },

  queryById: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("News not found!");
    } else {
      News.findById(req.params.id)
        .then((news) => {
          if (news === null) {
            res.send("News not found!");
          } else {
            res.json(news);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },

  query: (req, res) => {
    let queryConditions = req.query;

    let filter = {};
    let keyword = queryConditions.q;
    if (keyword) {
      keyword = functions.funzzyAndIgnoreCaseQuery(keyword);
      filter = {
        $or: [
          { author: keyword },
          { title: keyword },
          { content: keyword },
          { description: keyword },
          { "source.name": keyword },
        ],
      };
    }

    delete queryConditions.q;
    Object.assign(filter, queryConditions);
    if (
      (filter._id && filter._id.length !== Config.MongodbObjectIdLength) ||
      (filter["source._id"] &&
        filter["source._id"].length !== Config.MongodbObjectIdLength)
    ) {
      res.send("News not found!");
    } else {
      News.find(filter).then((newss) => {
        if (newss === null || newss.length === 0) {
          res.send("News not found!");
        } else {
          res.json(newss);
        }
      });
    }
  },

  create: (req, res) => {
    let sourceName = "";
    let sourceId = req.body.source._id;
    // get the source name by source id and add to News.source.name
    Source.findById(sourceId).then((source) => {
      if (source !== null) {
        sourceName = source.name;
      }
      req.body.source.name = sourceName;
      News.create(req.body).then((news) => {
        res.json(news);
      });
    });
  },

  edit: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("News not found!");
    } else {
      let sourceName = "";
      let sourceId = req.body.source._id;
      // get the source name by source id and update to News.source.name
      Source.findById(sourceId).then((source) => {
        if (source !== null) {
          sourceName = source.name;
        }
        req.body.source.name = sourceName;
        News.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
          .then((news) => {
            if (news === null) {
              res.send("News not found!");
            } else {
              res.json(news);
            }
          })
          .catch((err) => {
            console.log("Update news failed!", err);
          });
      });
    }
  },

  delete: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("News not found!");
    } else {
      News.findByIdAndDelete(req.params.id)
        .then((news) => {
          if (news === null) {
            res.send("News not found!");
          } else {
            res.json(news);
          }
        })
        .catch((err) => {
          console.log("Delete news failed!", err);
        });
    }
  },
};
