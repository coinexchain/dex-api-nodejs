# DexApiNodejs.TxApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTxFromTradeServer**](TxApi.md#getTxFromTradeServer) | **GET** /tx/txs/{hash} | Get a Tx from trade server by hash
[**queryIncome**](TxApi.md#queryIncome) | **GET** /tx/incomes | Query account all income until to given time
[**queryTx**](TxApi.md#queryTx) | **GET** /tx/txs | Query transactions



## getTxFromTradeServer

> Tx getTxFromTradeServer(hash)

Get a Tx from trade server by hash

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TxApi();
let hash = 2B6D7633C460DAABFCA47592B7F76A95CE95C52B515179C9E9BA49AA620377BA; // String | Tx hash
apiInstance.getTxFromTradeServer(hash).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Tx hash | 

### Return type

[**Tx**](Tx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryIncome

> InlineResponse20062 queryIncome(account, time, sid, count, opts)

Query account all income until to given time

Query income info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TxApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count limited to 1024
let opts = {
  'token': "token_example" // String | Symbol
};
apiInstance.queryIncome(account, time, sid, count, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| Bech32 address | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier count limited to 1024 | 
 **token** | **String**| Symbol | [optional] 

### Return type

[**InlineResponse20062**](InlineResponse20062.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryTx

> InlineResponse20062 queryTx(account, time, sid, count, opts)

Query transactions

Query transactions signed by given account until to given time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TxApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count limited to 1024
let opts = {
  'token': "token_example" // String | Symbol
};
apiInstance.queryTx(account, time, sid, count, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| Bech32 address | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier count limited to 1024 | 
 **token** | **String**| Symbol | [optional] 

### Return type

[**InlineResponse20062**](InlineResponse20062.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

