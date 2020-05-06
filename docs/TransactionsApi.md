# DexApiNodejs.TransactionsApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastTx**](TransactionsApi.md#broadcastTx) | **POST** /txs | Broadcast a signed tx
[**encodeTx**](TransactionsApi.md#encodeTx) | **POST** /txs/encode | Encode a transaction to the Amino wire format
[**getTxByHash**](TransactionsApi.md#getTxByHash) | **GET** /txs/{hash} | Get a Tx by hash
[**searchTx**](TransactionsApi.md#searchTx) | **GET** /txs | Search transactions



## broadcastTx

> BroadcastTxCommitResult broadcastTx(txBroadcast)

Broadcast a signed tx

Broadcast a signed tx to a full node

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let txBroadcast = new DexApiNodejs.InlineObject(); // InlineObject | 
apiInstance.broadcastTx(txBroadcast).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txBroadcast** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## encodeTx

> InlineResponse2003 encodeTx(tx)

Encode a transaction to the Amino wire format

Encode a transaction (signed or not) from JSON to base64-encoded Amino serialized bytes

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let tx = new DexApiNodejs.InlineObject1(); // InlineObject1 | 
apiInstance.encodeTx(tx).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tx** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTxByHash

> BroadcastTxCommitResult getTxByHash(hash)

Get a Tx by hash

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let hash = BCBE20E8D46758B96AE5883B792858296AC06E51435490FBDCAE25A72B3CC76B; // String | Tx hash
apiInstance.getTxByHash(hash).then((data) => {
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

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchTx

> PaginatedQueryTxs searchTx(opts)

Search transactions

Search transactions by events.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let opts = {
  'messageAction': send, // String | transaction events such as 'message.action=send' which results in the following endpoint: 'GET /txs?message.action=send'
  'messageSender': cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv, // String | transaction tags with sender: 'GET /txs?message.action=send&message.sender=cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv'
  'page': 1, // Number | Page number
  'limit': 1 // Number | Maximum number of items per page
};
apiInstance.searchTx(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageAction** | **String**| transaction events such as &#39;message.action&#x3D;send&#39; which results in the following endpoint: &#39;GET /txs?message.action&#x3D;send&#39; | [optional] 
 **messageSender** | **String**| transaction tags with sender: &#39;GET /txs?message.action&#x3D;send&amp;message.sender&#x3D;cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv&#39; | [optional] 
 **page** | **Number**| Page number | [optional] 
 **limit** | **Number**| Maximum number of items per page | [optional] 

### Return type

[**PaginatedQueryTxs**](PaginatedQueryTxs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

