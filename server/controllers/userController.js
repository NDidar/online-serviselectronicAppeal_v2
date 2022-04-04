const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, OrganizationAddress} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if(!email && !password){
                return next(ApiError.badRequest("Некорректный email или пароль"))
            }
            const candidate = await User.findOne({where: {email}});
            if(candidate){
                return next(ApiError.badRequest("Пользователь с таким email существует"))
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, role, password: hashPassword})
            const token = generateJwt(user.id, user.email, user.role)

            return res.json({token})
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if(!user){
                return next(ApiError.internal("Пользователь с таким email не найден"))
            }
            const comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword){
                return next(ApiError.internal("Не верный пароль"))
            }
    
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token}) 
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }


    async getAllEmployees(req, res,next) {
        try {
            const {role}= req.query
            console.log(role)
            const employees = await User.findAll({where: {role}})
            return res.json(employees)
        } catch (e) {
            console.error(e.message)
        }
    }

    async getUser(req, res) {
        try {
            let id = req.query.id
            console.log({id})
            let users = await User.findAll({where: {id}})
            console.log(id)
            return res.json(users)
        }catch (e) {
            console.error(e.message)
        }
    }

    async addInfoBio(req, res) {
        try{
            const {name, surname, delivery_address, phone_number, id} = req.body
            const updateBIO = await User.update({name, surname, delivery_address, phone_number}, {where: {id}});
            return res.json(updateBIO)
        } catch (e) {
            console.error(e.message)
        }
    }

    async delete(req, res, next){
        const id = req.params.id
        const deleteUser = await User.destroy({where: {id}})
        if (!deleteUser) {
            return next(ApiError.forbidden("Не найден пользователь"))
        }
        return res.json("Удалено!")
    }

}

module.exports = new UserController()