# DexApiNodejs.MiscApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryBlockTimes**](MiscApi.md#queryBlockTimes) | **GET** /misc/block-times | Query block time
[**queryDonation**](MiscApi.md#queryDonation) | **GET** /misc/donations | Query donations info
[**queryLastBlock**](MiscApi.md#queryLastBlock) | **GET** /misc/height | Query least block info



## queryBlockTimes

> [Number] queryBlockTimes(height, count)

Query block time

Query the block time up to given height

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MiscApi();
let height = 789; // Number | Block height
let count = 56; // Number | Querier count limited to 1024
apiInstance.queryBlockTimes(height, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **height** | **Number**| Block height | 
 **count** | **Number**| Querier count limited to 1024 | 

### Return type

**[Number]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryDonation

> InlineResponse20054 queryDonation(time, sid, count)

Query donations info

Query donations by DonateToCommunityPool or CommentToken

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MiscApi();
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count limited to 1024
apiInstance.queryDonation(time, sid, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier count limited to 1024 | 

### Return type

[**InlineResponse20054**](InlineResponse20054.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryLastBlock

> InlineResponse20053 queryLastBlock()

Query least block info

Query least block info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MiscApi();
apiInstance.queryLastBlock().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20053**](InlineResponse20053.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

