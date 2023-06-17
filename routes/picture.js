const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const PictureController = require("../controllers/pictureControllers");

router.post("/", upload.single("file"), PictureController.create);
router.post("/", PictureController.findAll);
router.post("/:id", PictureController.remove);

module.exports = router;
