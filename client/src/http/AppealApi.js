import {$authHost, $host} from "./index";

//Organizations
export const createOrganization = async (organization_name) => {
    const {data} = await $authHost.post('api/organization', organization_name)
    return data
}

export const fetchOrganizations = async () => {
    const {data} = await $host.get('api/organization', )
    return data
}

export const updateOrganization = async (organization_name, id) => {
    const {data} = await $authHost.put('api/organization/' + id, organization_name)
    return data
}

export const deleteOrganization = async (id) => {
    const {data} = await $authHost.delete('api/organization/' + id)
    console.log(id)
    return data
}

//departments
export const creatDepartment = async (department) => {
    const {data} = await $authHost.post('api/department', department)
    return data
}

export const fetchDepartments = async () => {
    const {data} = await $host.get('api/department')
    return data
}

export const updateDepartment = async (department, id) => {
    const {data} = await $authHost.put('api/department/' + id, department)
    return data
}

export const deleteDepartment = async (id) => {
    const {data} = await $authHost.delete('api/department/' + id)
    console.log(id)
    return data
}

//appeal
export const creatElectronicAppeal = async (appeal) => {
    const {data} = await $host.post('api/appeal', appeal)
    return data
}

export const fetchAppeals = async (statusLegal, organizationAddressId,departmentAppealId, status,limit, page, userId) => {
    const {data} = await $host.get('api/appeal', {params: {
            statusLegal, organizationAddressId, departmentAppealId,
            status, limit, page, userId
        }})
    return data
}

export const fetchOneAppeal = async (id) => {
    const {data} = await $host.get('api/appeal/' + id)
    return data
}

export const updateStatus = async (status, id) => {
    const {data} = await $host.put('api/appeal/' + id, status)
    return data
}

export const deleteAppeal = async (id) => {
    const {data} = await $host.delete('api/appeal/' + id)
    console.log(id)
    return data
}

//Anon appeal

export const creatAnonAppeal = async (appeal) => {
    const {data} = await $host.post('api/anonymousAppeal', appeal)
    return data
}

export const fetchAnonAppeals = async (organizationAddressId,departmentAppealId, status,limit, page) => {
    const {data} = await $host.get('api/anonymousAppeal', {params: {
            organizationAddressId, departmentAppealId,
            status, limit, page
        }})
    return data
}