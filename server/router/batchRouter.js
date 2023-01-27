const Router = require("express").Router;
const router = new Router();
const batchController = require("../controllers/batch-controller");
const authMiddleware = require("../middelwares/auth-middleware");

router.get("/", authMiddleware, batchController.getBatchItems);

module.exports = router;
