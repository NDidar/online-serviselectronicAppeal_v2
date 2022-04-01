const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    home_address: {type: DataTypes.STRING},
    phone_number: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const LegalEntity = sequelize.define('legal_entity',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const ElectronicAppeal = sequelize.define('electronic_appeal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    home_address: {type: DataTypes.STRING},
    phone_number: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING},
    file: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "notreviewed"}
})

const AnonymousAppeal = sequelize.define('anonymous_appeal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING},
    file: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "notreviewed"}
})

const OrganizationAddress = sequelize.define('organization_address', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organization_name: {type: DataTypes.STRING, allowNull: false}
})

const DepartmentOfAppeal = sequelize.define('department_appeal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    department: {type: DataTypes.STRING, allowNull: false}
})

ElectronicAppeal.hasMany(LegalEntity, {as: 'info'});
LegalEntity.belongsTo(ElectronicAppeal)

User.hasMany(ElectronicAppeal)
ElectronicAppeal.belongsTo(User)

OrganizationAddress.hasMany(ElectronicAppeal)
ElectronicAppeal.belongsTo(OrganizationAddress)

DepartmentOfAppeal.hasMany(ElectronicAppeal)
ElectronicAppeal.belongsTo(DepartmentOfAppeal)

OrganizationAddress.hasMany(AnonymousAppeal)
AnonymousAppeal.belongsTo(OrganizationAddress)

DepartmentOfAppeal.hasMany(AnonymousAppeal)
AnonymousAppeal.belongsTo(DepartmentOfAppeal)

module.exports = {
    User,
    LegalEntity,
    ElectronicAppeal,
    AnonymousAppeal,
    DepartmentOfAppeal,
    OrganizationAddress
}