const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/Authmiddleware')


router.post('/registration',userController.registration )
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check )
router.get('/profile', userController.getUser)
router.get('/employees', userController.getAllEmployees)
router.put('/profile', authMiddleware, userController.addInfoBio)
router.delete('/:id',authMiddleware, userController.delete)


module.exports = router