const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/Authmiddleware')


router.post('/registration',userController.registration )
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check )
router.get('/profile', userController.getUser)
router.put('/profile', authMiddleware, userController.addInfoBio)


module.exports = router