const {ElectronicAppeal, LegalEntity} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')

class electronicAppealController {
    async create(req, res, next) {
        try {
            let {name, surname, home_address,phone_number,content,userId, organizationAddressId, departmentAppealId, nameLegal} = req.body;
            let {img, file} = req.files;
            const imgName = uuid.v4() + ".jpg";
            const fileName = uuid.v4() + ".doc";
            img.mv(path.resolve(__dirname, '..','static', imgName))
            file.mv(path.resolve(__dirname, '..','static', fileName))

            const Appeal = await ElectronicAppeal.create({name, surname, home_address,phone_number,content,userId, organizationAddressId, departmentAppealId, img: imgName, file: fileName})
            
            if (nameLegal) {
                    const infos = await LegalEntity.create({
                        nameLegal: nameLegal,
                        electronicAppealId: Appeal.id
                    })
            }
            return res.json(Appeal)
        }catch (e) {
            next(ApiError.badRequest("e.message"))
        }
    }

    async getAll(req, res, next) {
        try {
            let {organizationAddressId, departmentAppealId, status, limit, page} = req.query
            console.log(limit);
            console.log(page);
            limit = limit || 9;
            page = page || 1;
            let offset = page * limit - limit;
            let appeals;
            if (!organizationAddressId && !departmentAppealId){
                appeals = await ElectronicAppeal.findAndCountAll({where: {status}, limit ,offset})
            }
            if (organizationAddressId && !departmentAppealId){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,status}, limit ,offset})
            }
            if (!organizationAddressId && departmentAppealId ){
                appeals = await ElectronicAppeal.findAndCountAll({where: {departmentAppealId, status}, limit ,offset})
            }
            if (organizationAddressId && departmentAppealId ){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId,status}, limit ,offset})
            }
            return res.json(appeals)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res, next){
        try {
            const {id} = req.params
            const appeal = await ElectronicAppeal.findOne(
                    {
                        where: {id},
                        include: [{model: LegalEntity, as: 'info'}]
                    },
                )
            return res.json(appeal)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const status = req.body.status
            console.log(status)
            const updateStatus = await ElectronicAppeal.update({status},{where:{id}})
            return res.json(updateStatus)
        }catch (e) {
            console.error(e.message)
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

module.exports = new electronicAppealController()
