import AuthApi from "./api/AuthApi";
import ApiContext from "./context/ApiContext";
import Coin from "./model/Coin";
import BaseReq from "./model/BaseReq";
import ApiClient from "./ApiClient";
import Account from "./model/Account";
import BankApi from "./api/BankApi";
import Wallet from "./context/Wallet";
import TransactionsApi from "./api/TransactionsApi";

const apiClient = ApiClient;
const toAddress = 'coinex10c22dwn7hxps77tnkpj5pzu9zcpq5zf76xms55';
const name = 'alice';
const password = '12345678';
const bip39Password = '11111111';
const keyDirPath = "/Users/matrix/Desktop/dex-api-nodejs/tmp";

const wallet = new Wallet(name, password, bip39Password, keyDirPath);
wallet.polarBear.BearInit(keyDirPath);
const fromAddress = wallet.polarBear.GetAddress(name);
let baseReq = createBaseReq(fromAddress);
let apiContext = new ApiContext(apiClient, fromAddress, name, password, baseReq);

refreshAccNumAndSeq().then(function (value) {
    return getStdTx();
}).then(function (value) {
    return signAndBroadcast(value);
}).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.error(error);
});

// ===================== Methods ===========================
function createBaseReq(fromAddress) {
    let baseReq = new BaseReq();
    const coin = new Coin('cet', '600000');
    let fees = [];
    fees.push(coin);
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
    return authApi.getAccount(fromAddress).then(function (value) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(value));
        apiContext.baseReq['account_number'] = value['result']['account_number'];
        apiContext.baseReq['sequence'] = value['result']['sequence'];
    }, function (error) {
        console.error(error);
    });
}

function getStdTx() {
    const sendCoin = new Coin('cet', '1000000');
    let sendCoins = [];
    sendCoins.push(sendCoin);
    const account = new Account(apiContext.baseReq, sendCoins, '0');
    const bankApi = new BankApi();
    return bankApi.sendCoins(toAddress, account).then(function (value) {
        const stdTxStr = JSON.stringify(value);
        console.log('API called successfully. Returned data: ' + stdTxStr);
        return stdTxStr;
    }, function (err) {
        console.error(err);
    });
}

function signAndBroadcast(unsignedBytes) {
    const bytes = wallet.polarBear.SignAndBuildBroadcast(name, password,
        unsignedBytes, apiContext.baseReq.chain_id, 'block', apiContext.baseReq.account_number, apiContext.baseReq.sequence);
    const txBroadcast = JSON.parse(bytes);
    console.log(bytes);
    const transactionsApi = new TransactionsApi();
    return transactionsApi.broadcastTx(txBroadcast).then(function (result) {
        return result;
    }, function (error) {
        console.error(error);
    });

}