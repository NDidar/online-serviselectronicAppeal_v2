import {$authHost, $host} from "./index";

//Organizations
export const createOrganization = async (organization) => {
    const {data} = await $host.post('api/organization', organization)
    return data
}

export const fetchOrganizations = async () => {
    const {data} = await $host.get('api/organization', )
    return data
}


//departments
export const creatDepartment = async (department) => {
    const {data} = await $host.post('api/department', department)
    return data
}

export const fetchDepartments = async () => {
    const {data} = await $host.get('api/department')
    return data
}

//appeal
export const creatAppeal = async (appeal) => {
    const {data} = await $host.post('api/appeal', appeal)
    return data
}

export const fetchAppeals = async () => {
    const {data} = await $host.get('api/appeal')
    return data
}


export const fetchOneAppeal = async (id) => {
    const {data} = await $host.get('api/appeal/' + id)
    return data
}
