const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/", newsController.index);
router.get("/:id", newsController.queryById);
router.get("/query/q", newsController.query);
router.post("/", newsController.create);
router.put("/:id", newsController.edit);
router.delete("/:id", newsController.delete);

module.exports = router;
