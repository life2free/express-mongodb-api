const express = require("express");
const router = express.Router();
const newsRouter = require("./newsRouter");
const sourceRouter = require("./sourceRouter");
const VERSION = "v1";

router.get(`/${VERSION}`, (req, res) => {
  res.redirect(`/${VERSION}/newss`);
});

router.get("/", (req, res) => {
  res.redirect(`/${VERSION}/newss`);
});

router.use(`/${VERSION}/newss`, newsRouter);
router.use(`/${VERSION}/sources`, sourceRouter);

module.exports = router;
