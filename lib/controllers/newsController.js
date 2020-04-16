const News = require("../models/News");
const functions = require("./functions");

module.exports = {
  index: (req, res) => {
    News.find({})
      .populate({
        path: "source",
        select: "id name",
        model: "Source",
      })
      .then((newss) => {
        res.json(newss);
      });
  },
  queryById: (req, res) => {
    if (req.params.id.length !== 24) {
      res.send("News not found!");
    } else {
      News.findById(req.params.id)
        .populate({
          path: "source",
          select: "id name",
          model: "Source",
        })
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
    if (queryConditions.author) {
      queryConditions.author = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.author
      );
    }
    if (queryConditions.title) {
      queryConditions.title = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.title
      );
    }
    if (queryConditions.description) {
      queryConditions.description = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.description
      );
    }
    if (queryConditions.content) {
      queryConditions.content = functions.funzzyAndIgnoreCaseQuery(
        queryConditions.content
      );
    }

    News.find(queryConditions)
      .populate({
        path: "source",
        select: "id name",
        model: "Source",
      })
      .then((newss) => {
        if (newss === null || newss.length === 0) {
          res.send("News not found!");
        } else {
          res.json(newss);
        }
      });
  },
  create: (req, res) => {
    News.create(req.body).then((news) => {
      res.json(news);
    });
  },
  edit: (req, res) => {
    News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then((news) => {
        res.json(news);
      })
      .catch((err) => {
        console.log("Update news failed!", err);
      });
  },
  delete: (req, res) => {
    News.findByIdAndDelete(req.params.id)
      .then((source) => {
        res.json(source);
      })
      .catch((err) => {
        console.log("Delete news failed!", err);
      });
  },
};