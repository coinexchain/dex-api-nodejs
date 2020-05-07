import ApiClient from "../ApiClient";

export default class ApiContext {

    constructor(apiClient, fromAddress, name, password, baseReq) {
        this.apiClient = apiClient || ApiClient.instance;
        this.fromAddress = fromAddress;
        this.name = name;
        this.password = password;
        this.baseReq = baseReq;
    }

}