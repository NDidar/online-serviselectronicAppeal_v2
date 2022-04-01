const Router = require('express')
const router = new Router();
const Appeal = require('../controllers/electronicAppealController')

router.post('/', Appeal.create)
router.get('/', Appeal.getAll)
router.get('/:id', Appeal.getOne)
router.put('/:id', Appeal.update)
router.delete('/:id',)

module.exports = router 