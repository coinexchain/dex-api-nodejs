# DexApiNodejs.BankApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressBalances**](BankApi.md#getAddressBalances) | **GET** /bank/balances/{address} | Get the account balances
[**getBankParams**](BankApi.md#getBankParams) | **GET** /bank/parameters | Get the current bankx parameters
[**sendCoins**](BankApi.md#sendCoins) | **POST** /bank/accounts/{address}/transfers | Send coins from one account to another
[**setMemoRequired**](BankApi.md#setMemoRequired) | **POST** /bank/accounts/memo | Mark if memo is required to receive coins
[**transferSupervisedCoins**](BankApi.md#transferSupervisedCoins) | **POST** /bank/accounts/{address}/supervised_transfers | Operate a supervised transfer



## getAddressBalances

> {String: Object} getAddressBalances(address)

Get the account balances

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BankApi();
let address = coinex16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt; // String | Account address in bech32 format
apiInstance.getAddressBalances(address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Account address in bech32 format | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBankParams

> InlineResponse20035 getBankParams()

Get the current bankx parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BankApi();
apiInstance.getBankParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendCoins

> StdTx sendCoins(address, account)

Send coins from one account to another

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BankApi();
let address = coinex16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt; // String | Account address in bech32 format
let account = new DexApiNodejs.InlineObject2(); // InlineObject2 | 
apiInstance.sendCoins(address, account).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Account address in bech32 format | 
 **account** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setMemoRequired

> StdTx setMemoRequired(account)

Mark if memo is required to receive coins

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BankApi();
let account = new DexApiNodejs.InlineObject4(); // InlineObject4 | 
apiInstance.setMemoRequired(account).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferSupervisedCoins

> StdTx transferSupervisedCoins(address, postTxBody)

Operate a supervised transfer

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BankApi();
let address = coinex16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt; // String | Account address in bech32 format
let postTxBody = new DexApiNodejs.InlineObject3(); // InlineObject3 | 
apiInstance.transferSupervisedCoins(address, postTxBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Account address in bech32 format | 
 **postTxBody** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

