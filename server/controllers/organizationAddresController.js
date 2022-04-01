const {OrganizationAddress} = require('../models/models')
const ApiError = require('../error/ApiError');

class organizationAddressController {
    async create(req, res) {
        try {
            const {organization_name} = req.body
            const address = await OrganizationAddress.create({organization_name})
            return res.json(address)
        }catch (e) {
            console.error(e.message)
        }

    }

    async getAll(req, res) {
        const organizations = await OrganizationAddress.findAll()
        return res.json(organizations)
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
        const deleteOrganization = await OrganizationAddress.destroy({where: {id}})
        if (!deleteOrganization) {
            return next(ApiError.badRequest("Не найден такой тип еды"))
        }
        return res.json("Удалено!")
    }

}

module.exports = new organizationAddressController()
