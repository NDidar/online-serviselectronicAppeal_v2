const {ElectronicAppeal, LegalEntity, OrganizationAddress, DepartmentOfAppeal} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')

class electronicAppealController {
    async create(req, res, next) {
        try {
            let {nameLegal, statusLegal, name, surname, home_address,phone_number,content,userId, organizationAddressId, departmentAppealId} = req.body;
            console.log(nameLegal)
            let {img, file} = req.files;
            const imgName = uuid.v4() + ".jpg";
            const fileName = uuid.v4() + ".doc";
            img.mv(path.resolve(__dirname, '..','static', imgName))
            file.mv(path.resolve(__dirname, '..','static', fileName))

            const Appeal = await ElectronicAppeal.create({nameLegal,statusLegal, name, surname, home_address,phone_number,content,userId, organizationAddressId, departmentAppealId, img: imgName, file: fileName})
            return res.json(Appeal)
        }catch (e) {
            next(ApiError.badRequest("e.message"))
        }
    }


    async getAll(req, res, next) {
        try {
            let {statusLegal, organizationAddressId, departmentAppealId, status, limit, page, userId} = req.query
            console.log(userId);
            console.log(status);
            limit = limit || 9;
            page = page || 1;
            let offset = page * limit - limit;
            let appeals;
            if(userId && status){
                appeals = await ElectronicAppeal.findAndCountAll({where: {userId, status}, limit ,offset, include: {all: true}})
            }
            if(userId && !status){
                appeals = await ElectronicAppeal.findAndCountAll({where: {userId}, limit ,offset, include: {all: true}})
            }

            if (!organizationAddressId && !departmentAppealId && !status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({ limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId,status,statusLegal}, limit ,offset, include: {all: true}})
            }
            /////
            if (organizationAddressId && !departmentAppealId && !status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && departmentAppealId && !status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {departmentAppealId}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && !departmentAppealId && status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {status}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && !departmentAppealId && !status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {statusLegal}, limit ,offset, include: {all: true}})
            }


            //
            if (!organizationAddressId && departmentAppealId && status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {departmentAppealId, status,statusLegal}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && !departmentAppealId && status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,status, statusLegal}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && !status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId, statusLegal}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId, status}, limit ,offset, include: {all: true}})
            }

            ///
            if (organizationAddressId && !departmentAppealId && status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,status}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && !departmentAppealId && !status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId, statusLegal}, limit ,offset, include: {all: true}})
            }
            if (organizationAddressId && departmentAppealId && !status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {organizationAddressId,departmentAppealId}, limit ,offset, include: {all: true}})
            }
            ///
            if (!organizationAddressId && departmentAppealId && status && !statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {departmentAppealId, status}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && departmentAppealId && !status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {departmentAppealId, statusLegal}, limit ,offset, include: {all: true}})
            }
            if (!organizationAddressId && !departmentAppealId && status && statusLegal){
                appeals = await ElectronicAppeal.findAndCountAll({where: {status,statusLegal}, limit ,offset, include: {all: true}})
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
                        include: [{all: true}]
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
        const id = req.params.id
        const deleteAppeal = await ElectronicAppeal.destroy({where: {id}})
        if (!deleteAppeal) {
            return next(ApiError.badRequest("Не найден такой тип еды"))
        }
        return res.json("Удалено!")
    }

    async downloadFile(req,res){
        try {

        }catch (e) {
            console.log(e)
            return res.status(500).json({message: "Download error"})
        }
    }

}

module.exports = new electronicAppealController()