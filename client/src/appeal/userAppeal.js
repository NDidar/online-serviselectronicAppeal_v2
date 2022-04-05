import {makeAutoObservable} from "mobx";

export default class userAppeal{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = ''
        this._userId = ''
        this._employees = []
        makeAutoObservable(this);
    }


    get isAuth() {
        return this._isAuth;
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    get user() {
        return this._user;
    }

    setUser(user) {
        this._user = user;
    }


    get role() {
        return this._role;
    }

    setRole(role) {
        this._role = role;
    }


    get employees() {
        return this._employees;
    }

    setEmployees(value) {
        this._employees = value;
    }


    get userId() {
        return this._userId;
    }

    setUserId(userId) {
        this._userId = userId;
    }
}




