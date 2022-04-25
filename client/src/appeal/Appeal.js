import {makeAutoObservable} from "mobx";


export default class Appeal{
    constructor() {
        this._organizations = []
        this._departments = []
        this._appeals = []
        this._legalAppeals = []
        this._anonAppeals = []
        this._selectedOrganization = {}
        this._selectedDepartment = {}
        this._selectedStatus = {}
        this._page = 1
        this._total_count = 0
        this._limit = 9
        makeAutoObservable(this)
    }



    get organizations() {
        return this._organizations;
    }

    setOrganizations(organization) {
        this._organizations = organization;
    }

    get departments() {
        return this._departments;
    }

    setDepartment(department) {
        this._departments = department;
    }

    get appeals() {
        return this._appeals;
    }

    setAppeals(appeals) {
        this._appeals = appeals;
    }

    //selected organization
    get selectedOrganization() {
        return this._selectedOrganization;
    }

    setSelectedOrganization(organization_name) {
        this._selectedOrganization = organization_name;
    }

    //selected department

    get selectedDepartment() {
        return this._selectedDepartment;
    }

    setSelectedDepartment(department) {
        this._selectedDepartment = department;
    }


    get page() {
        return this._page;
    }

    setPage(page) {
        this._page = page;
    }

    get totalCount() {
        return this._total_count;
    }

    setTotalCount(count) {
        this._total_count = count;
    }

    get limit() {
        return this._limit;
    }

    setLimit(limit) {
        this._limit = limit;
    }


    get selectedStatus() {
        return this._selectedStatus;
    }

    setSelectedStatus(value) {
        this._selectedStatus = value;
    }


    get legalAppeals() {
        return this._legalAppeals;
    }

    setLegalAppeals(value) {
        this._legalAppeals = value;
    }

    get anonAppeals() {
        return this._anonAppeals;
    }

    setAnonAppeals(value) {
        this._anonAppeals = value;
    }
}