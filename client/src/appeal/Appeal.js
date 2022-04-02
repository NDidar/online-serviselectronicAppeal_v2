import {makeAutoObservable} from "mobx";

export default class Appeal{
    constructor() {
        this._organizations = []
        this._departments = []
        this._appeals = [
            {id: 1, name: 'Didar', surname: 'Nepesov', home_address: "bedy 4", phone_number: '+375259347618', content: 'give me my money', img: 'https://n1s1.starhit.ru/10/66/a5/1066a5b45c321bcd9378cafbe9b299f7/460x307_0_e021581bbb760b2b8a53e649834d1bfe@600x400_0x3e4c1b94_19140920741454693774.jpeg', file: 'https://elib.bsu.by/bitstream/123456789/101930/1/Andryuschenko.pdf', status: 'notreviewed'},
            {id: 2, name: 'Didar', surname: 'Nepesov', home_address: "bedy 4", phone_number: '+375259347618', content: 'give me my money', img: 'https://n1s1.starhit.ru/10/66/a5/1066a5b45c321bcd9378cafbe9b299f7/460x307_0_e021581bbb760b2b8a53e649834d1bfe@600x400_0x3e4c1b94_19140920741454693774.jpeg', file: 'https://elib.bsu.by/bitstream/123456789/101930/1/Andryuschenko.pdf', status: 'notreviewed'},
            {id: 3, name: 'Didar', surname: 'Nepesov', home_address: "bedy 4", phone_number: '+375259347618', content: 'give me my money', img: 'https://n1s1.starhit.ru/10/66/a5/1066a5b45c321bcd9378cafbe9b299f7/460x307_0_e021581bbb760b2b8a53e649834d1bfe@600x400_0x3e4c1b94_19140920741454693774.jpeg', file: 'https://elib.bsu.by/bitstream/123456789/101930/1/Andryuschenko.pdf', status: 'notreviewed'},
            {id: 4, name: 'Didar', surname: 'Nepesov', home_address: "bedy 4", phone_number: '+375259347618', content: 'give me my money', img: 'https://n1s1.starhit.ru/10/66/a5/1066a5b45c321bcd9378cafbe9b299f7/460x307_0_e021581bbb760b2b8a53e649834d1bfe@600x400_0x3e4c1b94_19140920741454693774.jpeg', file: 'https://elib.bsu.by/bitstream/123456789/101930/1/Andryuschenko.pdf', status: 'notreviewed'},
        ]
        this._selectedOrganization = {}
        this._selectedDepartment = {}
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
}