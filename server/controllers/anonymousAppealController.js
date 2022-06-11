const {AnonymousAppeal, OrganizationAddress, DepartmentOfAppeal, ElectronicAppeal} = require('../models/models')
const ApiError = require('../error/ApiError');
const path = require('path')
const uuid = require('uuid')

class anonymousAppealController {
    async create(req, res, next) {
        try {
            const {content, organizationAddressId, departmentAppealId} = req.body;
            const {img, file} = req.files;
            const imgName = uuid.v4() + ".jpg";
            const fileName = uuid.v4() + ".doc";
            img.mv(path.resolve(__dirname, '..','static', imgName))
            file.mv(path.resolve(__dirname, '..','static', fileName))
            const anonAppeal = await AnonymousAppeal.create({content, organizationAddressId, departmentAppealId, img: imgName, file: fileName})
            return res.json(anonAppeal)
        }catch (e) {
            next(ApiError.badRequest("e.message"))
        }
    }

    async getAll(req, res, next) {
        try {
            let {organizationAddressId, departmentAppealId, status, limit, page} = req.query;
            console.log(limit);
            page = page || 1;
            limit = limit || 9
            let offset = page * limit - limit;
            console.log(organizationAddressId);
            let appeals;
            if (!organizationAddressId && !departmentAppealId && !status){
                appeals = await AnonymousAppeal.findAndCountAll({ limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId,status}, limit ,offset, include: {all: true}})
            }
            /////
            if (organizationAddressId && !departmentAppealId && !status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {organizationAddressId}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && departmentAppealId && !status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {departmentAppealId}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && !departmentAppealId && status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {status}, limit ,offset, include: {all: true}})
            }

            //
            if (!organizationAddressId && departmentAppealId && status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {departmentAppealId, status}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && !departmentAppealId && status){
                appeals = await AnonymousAppeal.findAndCountAll({where: {organizationAddressId,status}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && !status ){
                appeals = await AnonymousAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId}, limit ,offset, include: {all: true}})
            }
            return res.json(appeals)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const status = req.body.status
            console.log(status)
            const updateStatus = await AnonymousAppeal.update({status},{where:{id}})
            return res.json(updateStatus)
        }catch (e) {
            console.error(e.message)
        }

    }

    async getOne(req, res, next){
        try {
            const {id} = req.params
            const anonAppeal = await AnonymousAppeal.findOne({
                where: {id},
                include: [{model: OrganizationAddress},{model: DepartmentOfAppeal}]
            })
            return res.json(anonAppeal)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async delete(req, res, next){
        // const id = req.params.id
        // const deleteType = await Type.destroy({where: {id}})
        // if (!deleteType) {
        //     return next(ApiError.badRequest("Не найден такой тип еды"))
        // }
        // return res.json("Удалено!")
    }

}

module.exports = new anonymousAppealController()
