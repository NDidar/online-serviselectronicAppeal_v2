const Router = require('express')
const router = new Router();
const anonymousAppealRouter = require('./anonymousAppealRouter')
const departmentRouter = require('./departmentRouter')
const electronicAppealRouter = require('./electronicAppealRouter')
const organizationAddressRouter = require('./organizationAddressRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/appeal', electronicAppealRouter)
router.use('/anonymousAppeal', anonymousAppealRouter)
router.use('/organization', organizationAddressRouter)
router.use('/department', departmentRouter)

module.exports = router