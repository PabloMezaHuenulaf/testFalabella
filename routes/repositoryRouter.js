const { Router } = require("express");
const repositoryController = require('../controllers/repositoryController');

const router = Router();

router.get('/', repositoryController);
router.get('/:languaje', repositoryController);


module.exports = router;