const Source = require("../models/Source");
const functions = require("./functions");
const Config = require("../config");

module.exports = {
  shuffle: (sourceArray) => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  },

  shuffle1: (sourceArray) => {
    console.log(sourceArray);
    let arr = [];
    for (item in sourceArray) {
      arr.push(item);
    }
    let ret = arr.sort(() => Math.random() - 0.5);
    return ret;
  },

  index: (req, res) => {
    Source.find({}).then((sources) => {
      if (sources === null || sources.length === 0) {
        res.send("There is no Source!");
      } else {
        // console.log(sources);
        // sources = this.shuffle(sources);

        // for (var i = 0; i < sources.length - 1; i++) {
        //   var j = i + Math.floor(Math.random() * (sources.length - i));
        //   var temp = sources[j];
        //   sources[j] = sources[i];
        //   sources[i] = temp;
        // }
        sources.sort(() => Math.random() - 0.5);
        // return sourceArray;
        res.json(sources);
      }
    });
  },

  queryById: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("Source not found!");
    } else {
      Source.findById(req.params.id).then((source) => {
        if (source === null) {
          res.send("Source not found!");
        } else {
          res.json(source);
        }
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
        $or: [{ name: keyword }, { description: keyword }],
      };
    }

    delete queryConditions.q;
    Object.assign(filter, queryConditions);
    if (filter._id && filter._id.length !== Config.MongodbObjectIdLength) {
      res.send("News not found!");
    } else {
      Source.find(filter).then((sources) => {
        if (sources === null || sources.length === 0) {
          res.send("Source not found!");
        } else {
          res.json(sources);
        }
      });
    }
  },

  create: (req, res) => {
    Source.create(req.body).then((source) => {
      res.json(source);
    });
  },

  edit: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("Source not found!");
    } else {
      Source.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .then((source) => {
          if (source === null) {
            res.send("Source not found!");
          } else {
            res.json(source);
          }
        })
        .catch((err) => {
          console.log("Update source failed!", err);
        });
    }
  },

  delete: (req, res) => {
    if (req.params.id.length !== Config.MongodbObjectIdLength) {
      res.send("Source not found!");
    } else {
      Source.findByIdAndDelete(req.params.id)
        .then((source) => {
          if (source === null) {
            res.send("Source not found!");
          } else {
            res.json(source);
          }
        })
        .catch((err) => {
          console.log("Delete source failed!", err);
        });
    }
  },
};
