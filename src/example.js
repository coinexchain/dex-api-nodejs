import AuthApi from "./api/AuthApi";
import ApiContext from "./context/ApiContext";
import Coin from "./model/Coin";
import BaseReq from "./model/BaseReq";
import ApiClient from "./ApiClient";

const apiClient = ApiClient;
const toAddress = 'coinex10c22dwn7hxps77tnkpj5pzu9zcpq5zf76xms55';
const fromAddress = 'coinex1rhk04mqyycujlkkm5fqu7j0kehyxudx7z3280m';
const name = 'alice';
const password = '12345678';
const coin = new Coin('cet', '600000');
let fees = [];
fees.push(coin);

let baseReq = createBaseReq(fromAddress, fees);
let apiContext = new ApiContext(apiClient, fromAddress, name, password, baseReq);
refreshAccNumAndSeq();



// ===================== Methods ===========================
function createBaseReq(fromAddress, fees) {
    let baseReq = new BaseReq();
    baseReq['from'] = fromAddress;
    baseReq['memo'] = '';
    baseReq['chain_id'] = 'coinexdex-test1';
    baseReq['account_number'] = '0';
    baseReq['sequence'] = '0';
    baseReq['gas'] = '30000';
    baseReq['gas_adjustment'] = '1.1';
    baseReq['fees'] = fees;
    baseReq['simulate'] = false;
    return baseReq;
}

function refreshAccNumAndSeq() {
// Refresh account number and sequence
    const authApi = new AuthApi();
    authApi.getAccount(fromAddress).then(function (value) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(value));
        apiContext.baseReq['account_number'] = value['result']['account_number'];
        apiContext.baseReq['sequence'] = value['result']['sequence'];
        console.log(JSON.stringify(apiContext.baseReq));
    }, function (error) {
        console.error(error);
    });
}