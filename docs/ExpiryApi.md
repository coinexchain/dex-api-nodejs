# DexApiNodejs.ExpiryApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryRedelegation**](ExpiryApi.md#queryRedelegation) | **GET** /expiry/redelegations | Query redelegation
[**queryUnbonding**](ExpiryApi.md#queryUnbonding) | **GET** /expiry/unbondings | Query Unbonding
[**queryUnlock**](ExpiryApi.md#queryUnlock) | **GET** /expiry/unlocks | Query Unlock
[**querylocked**](ExpiryApi.md#querylocked) | **GET** /expiry/lockeds | Query lock tx



## queryRedelegation

> InlineResponse20058 queryRedelegation(account, time, sid, count)

Query redelegation

Query delegator&#39;s redelegation-completion info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.ExpiryApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count limited to 1024
apiInstance.queryRedelegation(account, time, sid, count).then((data) => {
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

### Return type

[**InlineResponse20058**](InlineResponse20058.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryUnbonding

> InlineResponse20059 queryUnbonding(account, time, sid, count)

Query Unbonding

Query delegator&#39;s unbonding-completion info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.ExpiryApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count
apiInstance.queryUnbonding(account, time, sid, count).then((data) => {
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
 **count** | **Number**| Querier count | 

### Return type

[**InlineResponse20059**](InlineResponse20059.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryUnlock

> InlineResponse20061 queryUnlock(account, time, sid, count, opts)

Query Unlock

Query Unlock info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.ExpiryApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count
let opts = {
  'token': "token_example" // String | Symbol
};
apiInstance.queryUnlock(account, time, sid, count, opts).then((data) => {
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
 **count** | **Number**| Querier count | 
 **token** | **String**| Symbol | [optional] 

### Return type

[**InlineResponse20061**](InlineResponse20061.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## querylocked

> InlineResponse20060 querylocked(account, time, sid, count, opts)

Query lock tx

Query lock transfer info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.ExpiryApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count
let opts = {
  'token': "token_example" // String | Symbol
};
apiInstance.querylocked(account, time, sid, count, opts).then((data) => {
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
 **count** | **Number**| Querier count | 
 **token** | **String**| Symbol | [optional] 

### Return type

[**InlineResponse20060**](InlineResponse20060.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

