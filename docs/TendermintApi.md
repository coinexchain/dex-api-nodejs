# DexApiNodejs.TendermintApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlock**](TendermintApi.md#getBlock) | **GET** /blocks/{height} | Get a block at a certain height
[**getLatestBlock**](TendermintApi.md#getLatestBlock) | **GET** /blocks/latest | Get the latest block
[**getLatestValidatorSet**](TendermintApi.md#getLatestValidatorSet) | **GET** /validatorsets/latest | Get the latest validator set
[**getNodeInfo**](TendermintApi.md#getNodeInfo) | **GET** /node_info | The properties of the connected node
[**getSyncing**](TendermintApi.md#getSyncing) | **GET** /syncing | Syncing state of node
[**getValidatorSet**](TendermintApi.md#getValidatorSet) | **GET** /validatorsets/{height} | Get a validator set a certain height



## getBlock

> BlockQuery getBlock(height)

Get a block at a certain height

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
let height = 1; // Number | Block height
apiInstance.getBlock(height).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**BlockQuery**](BlockQuery.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLatestBlock

> BlockQuery getLatestBlock()

Get the latest block

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
apiInstance.getLatestBlock().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**BlockQuery**](BlockQuery.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLatestValidatorSet

> InlineResponse2001 getLatestValidatorSet()

Get the latest validator set

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
apiInstance.getLatestValidatorSet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeInfo

> InlineResponse200 getNodeInfo()

The properties of the connected node

Information about the connected node

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
apiInstance.getNodeInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSyncing

> getSyncing()

Syncing state of node

Get if the node is currently syning with other nodes

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
apiInstance.getSyncing().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getValidatorSet

> InlineResponse2002 getValidatorSet(height)

Get a validator set a certain height

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.TendermintApi();
let height = 1; // Number | Block height
apiInstance.getValidatorSet(height).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

