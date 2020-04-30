# DexApiNodejs.TransactionsApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastTx**](TransactionsApi.md#broadcastTx) | **POST** /txs | Broadcast a signed tx
[**encodeTx**](TransactionsApi.md#encodeTx) | **POST** /txs/encode | Encode a transaction to the Amino wire format
[**getTxByHash**](TransactionsApi.md#getTxByHash) | **GET** /txs/{hash} | Get a Tx by hash
[**searchTx**](TransactionsApi.md#searchTx) | **GET** /txs | Search transactions

<a name="broadcastTx"></a>
# **broadcastTx**
> BroadcastTxCommitResult broadcastTx(body)

Broadcast a signed tx

Broadcast a signed tx to a full node

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let body = null; // Object | The tx must be a signed StdTx. The supported broadcast modes include `"block"`(return after tx commit), `"sync"`(return afer CheckTx) and `"async"`(return right away).

apiInstance.broadcastTx(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The tx must be a signed StdTx. The supported broadcast modes include &#x60;&quot;block&quot;&#x60;(return after tx commit), &#x60;&quot;sync&quot;&#x60;(return afer CheckTx) and &#x60;&quot;async&quot;&#x60;(return right away). | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="encodeTx"></a>
# **encodeTx**
> Object encodeTx(body)

Encode a transaction to the Amino wire format

Encode a transaction (signed or not) from JSON to base64-encoded Amino serialized bytes

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let body = null; // Object | The tx to encode

apiInstance.encodeTx(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The tx to encode | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTxByHash"></a>
# **getTxByHash**
> BroadcastTxCommitResult getTxByHash(hash)

Get a Tx by hash

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let hash = "hash_example"; // String | Tx hash

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

<a name="searchTx"></a>
# **searchTx**
> PaginatedQueryTxs searchTx(opts)

Search transactions

Search transactions by events.

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TransactionsApi();
let opts = { 
  'messageAction': "messageAction_example", // String | transaction events such as 'message.action=send' which results in the following endpoint: 'GET /txs?message.action=send'
  'messageSender': "messageSender_example", // String | transaction tags with sender: 'GET /txs?message.action=send&message.sender=cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv'
  'page': 56, // Number | Page number
  'limit': 56 // Number | Maximum number of items per page
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
 **messageAction** | **String**| transaction events such as &#x27;message.action&#x3D;send&#x27; which results in the following endpoint: &#x27;GET /txs?message.action&#x3D;send&#x27; | [optional] 
 **messageSender** | **String**| transaction tags with sender: &#x27;GET /txs?message.action&#x3D;send&amp;message.sender&#x3D;cosmos16xyempempp92x9hyzz9wrgf94r6j9h5f06pxxv&#x27; | [optional] 
 **page** | **Number**| Page number | [optional] 
 **limit** | **Number**| Maximum number of items per page | [optional] 

### Return type

[**PaginatedQueryTxs**](PaginatedQueryTxs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

