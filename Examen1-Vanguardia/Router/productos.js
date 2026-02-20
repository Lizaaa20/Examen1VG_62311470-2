const express = require("express");
const router = express.Router();
const controller = require("../Controller/productocontroller");

router.post("/", controller.create);
router.get("/", controller.show);
router.get("/:id", controller.showOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleted);

module.exports = router;