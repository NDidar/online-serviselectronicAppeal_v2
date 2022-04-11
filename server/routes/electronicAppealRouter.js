const Router = require('express')
const router = new Router();
const Appeal = require('../controllers/electronicAppealController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', Appeal.create)
router.get('/', Appeal.getAll)
router.get('/:id', Appeal.getOne)
router.put('/:id', Appeal.update)
router.delete('/:id', checkRole('USER'), Appeal.delete)

module.exports = router 