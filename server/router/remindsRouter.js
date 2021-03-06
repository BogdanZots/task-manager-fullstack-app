const Router = require("express").Router;
const remindsController = require("../controllers/reminds-controller");
const router = new Router();
const authMiddleware = require("../middelwares/auth-middleware");

router.post("/", authMiddleware, remindsController.createRemind);
router.get("/", authMiddleware, remindsController.getReminds);

module.exports = router;
