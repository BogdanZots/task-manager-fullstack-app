const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middelwares/auth-middleware");
const remindsRouter = require("./remindsRouter");
const batchRouter = require("./batchRouter");
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);

// common
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/check-auth", authMiddleware, userController.checkAuth);

// reminds
router.use("/reminds", remindsRouter); // router.use - middleware который потом передаёт управление на remindsRouter.js
router.use("/batch", batchRouter);
module.exports = router;
