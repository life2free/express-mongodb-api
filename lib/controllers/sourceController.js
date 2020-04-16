const Source = require("../models/Source");
const functions = require("./functions");

module.exports = {
  index: (req, res) => {
    Source.find({}).then((sources) => {
      res.json(sources);
    });
  },
  queryById: (req, res) => {
    Source.findById(req.params.id).then((source) => {
      res.json(source);
    });
  },
  query: (req, res) => {
    let queryConditions = req.query;
    if (queryConditions.name) {
      queryConditions.name = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.name
      );
    }
    if (queryConditions.description) {
      queryConditions.description = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.description
      );
    }

    Source.find(queryConditions).then((sources) => {
      res.json(sources);
    });
  },
  create: (req, res) => {
    Source.create(req.body).then((source) => {
      res.json(source);
    });
  },
  edit: (req, res) => {
    Source.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then((source) => {
        res.json(source);
      })
      .catch((err) => {
        console.log("Update source failed!", err);
      });
  },
  delete: (req, res) => {
    Source.findByIdAndDelete(req.params.id)
      .then((source) => {
        res.json(source);
      })
      .catch((err) => {
        console.log("Delete source failed!", err);
      });
  },
};
