const Router = require('express')
const router = new Router();
const departmentAppealController = require('../controllers/departmentController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), departmentAppealController.create)
router.get('/', departmentAppealController.getAll)
router.put('/:id',checkRole('ADMIN'),departmentAppealController.update)
router.delete('/:id',checkRole('ADMIN'), departmentAppealController.delete)

module.exports = router 