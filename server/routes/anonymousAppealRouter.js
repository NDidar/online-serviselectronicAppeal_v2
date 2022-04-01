const Router = require('express')
const router = new Router();
const anonAppeal = require('../controllers/anonymousAppealController')

router.post('/', anonAppeal.create)
router.get('/', anonAppeal.getAll)
router.get('/:id', anonAppeal.getOne)
router.put('/:id', anonAppeal.update)
router.delete('/:id',)

module.exports = router 