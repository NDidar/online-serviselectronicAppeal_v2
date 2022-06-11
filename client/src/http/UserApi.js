import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, password, role) => {
    if(role === 'EMPLOYEE'){
        const {data} = await $host.post('api/user/registration', {email, password, role})
        return data
    } else{
        const {data} = await $host.post('api/user/registration', {email, password, role})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    }

}



export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchEmployees = async () => {
    const {data} = await $host.get('api/user/employees', {params:{
            role: 'EMPLOYEE'
        }})
    return data
}

export const fetchUser = async (id) => {
    const {data} = await $host.get('api/user/profile',{params:{
            id
        }})
    return data
}

export const updateUser = async (name) => {
    const {data} = await $authHost.put('api/user/profile', name)
    return data
}

export const deleteUser = async (id) => {
    const {data} = await $authHost.delete('api/user/' + id)
    return data
}