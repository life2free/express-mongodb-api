const express = require("express");
const router = express.Router();
const sourceController = require("../controllers/sourceController");

router.get("/", sourceController.index);
router.get("/:id", sourceController.queryById);
router.get("/search/keywords", sourceController.query);
router.post("/", sourceController.create);
router.put("/:id", sourceController.edit);
router.delete("/:id", sourceController.delete);

module.exports = router;
