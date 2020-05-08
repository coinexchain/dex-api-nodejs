import ref from 'ref-napi';
import ffi from 'ffi-napi';
import fs from 'fs';

export default class Wallet {

    constructor(keyName, password, bip39Password, keyDirPath) {
        this.keyName = keyName;
        this.password = password;
        this.bip39Password = bip39Password;
        this.keyDirPath = keyDirPath;
        this.polarBear = ffi.Library("/Users/matrix/Desktop/dex-api-nodejs/src/context/wallet_mac", {
            'BearInit': ['void', ['CString']],
            'CreateKey': ['CString', ['CString', 'CString', 'CString', 'uint32', 'uint32']],
            'DeleteKey': ['CString', ['CString', 'CString']],
            'RecoverKey': ['CString', ['CString', 'CString', 'CString', 'CString', 'uint32', 'uint32']],
            'AddKey': ['CString', ['CString', 'CString', 'CString']],
            'ExportKey': ['CString', ['CString', 'CString', 'CString']],
            'ListKeys': ['CString', []],
            'ResetPassword': ['CString', ['CString', 'CString', 'CString']],
            'GetAddress': ['CString', ['CString']],
            'GetSigner': ['CString', ['CString']],
            'GetPubKey': ['CString', ['CString']],
            'GetAddressFromWIF': ['CString', ['CString']],
            'Sign': ['CString', ['CString', 'CString', 'CString']],
            'SignStdTx': ['CString', ['CString', 'CString', 'CString', 'CString', 'uint64', 'uint64']],
            'SignAndBuildBroadcast': ['CString', ['CString', 'CString', 'CString', 'CString', 'CString', 'uint64', 'uint64']],
        });
    }

}

function testWallet() {

    const keyName = 'alice';
    const password = '12345678';
    const bip39Password = '11111111';
    const keyDirPath = "/Users/matrix/Desktop/dex-api-nodejs/tmp";

    const wallet = new Wallet(keyName, password, bip39Password, keyDirPath);

    // Init Wallet
    wallet.polarBear.BearInit(keyDirPath);

    // Create Key
    const key = wallet.polarBear.CreateKey(keyName, password, bip39Password, 0, 0);
    console.log(key);

    // List Key
    const keys = wallet.polarBear.ListKeys();
    console.log(keys);

    // Get Public Key
    const pubKey = wallet.polarBear.GetPubKey(keyName);
    console.log(pubKey)

    // Get Address From WIF
    const wif = "5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ";
    const addressWif = wallet.polarBear.GetAddressFromWIF(wif);
    console.log(addressWif);


    // Export Key
    const exportKey = wallet.polarBear.ExportKey(keyName, password, password);
    console.log(exportKey);

    // Write File
    const filePath = keyDirPath + '/' + keyName + '.txt';
    fs.writeFileSync(filePath, exportKey);

    // Sign
    const sign = wallet.polarBear.Sign(keyName, password, "hello, polar bear!");
    console.log(sign);

    // Delete tmp
    // fs.rmdirSync(keyDirPath, {recursive: true});
}

// testWallet();






