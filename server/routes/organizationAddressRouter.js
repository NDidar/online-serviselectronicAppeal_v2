const Router = require('express')
const router = new Router();
const organizationController = require('../controllers/organizationAddresController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), organizationController.create)
router.get('/', organizationController.getAll)
router.put('/:id', checkRole('ADMIN'), organizationController.update)
router.delete('/:id', checkRole('ADMIN'), organizationController.delete)

module.exports = router 