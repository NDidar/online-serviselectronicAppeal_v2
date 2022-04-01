const {DepartmentOfAppeal} = require('../models/models')
const ApiError = require('../error/ApiError');

class departmentController {
    async create(req, res) {
        try {
            const {department} = req.body
            const departmentOfAppeal = await DepartmentOfAppeal.create({department})
            return res.json(departmentOfAppeal)
        }catch (e) {
            console.error(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const departments = await DepartmentOfAppeal.findAll()
            return res.json(departments)
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res){
        // try {
        //     const {id} = req.params
        //     const {name} = req.body
        //     const updateType = await Type.update({name},{where:{id}})
        //     console.log(id)
        //     console.log(name)
        //     return res.json("Update")
        // }catch (e) {
        //     console.error(e.message)
        // }

    }

    async delete(req, res, next){
        const id = req.params.id
        const deleteDepartment = await DepartmentOfAppeal.destroy({where: {id}})
        if (!deleteDepartment) {
            return next(ApiError.badRequest("Не найден такой тип еды"))
        }
        return res.json("Удалено!")
    }

}

module.exports = new departmentController()
