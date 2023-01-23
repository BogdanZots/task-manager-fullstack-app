const Router = require('express').Router;
const remindsController = require('../controllers/reminds-controller');
const router = new Router();
const authMiddleware = require('../middelwares/auth-middleware');

router.post('/', authMiddleware, remindsController.createRemind);
router.get('/', authMiddleware, remindsController.getReminds);
router.delete('/:id', authMiddleware, remindsController.removeRemind);

module.exports = router;
