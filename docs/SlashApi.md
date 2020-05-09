# DexApiNodejs.SlashApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**querySlash**](SlashApi.md#querySlash) | **GET** /slash/slashings | Query validator slash info



## querySlash

> InlineResponse20064 querySlash(time, sid, count)

Query validator slash info

Query validator slash power, reason, and jailed status etc

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashApi();
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier count limited to 1024
apiInstance.querySlash(time, sid, count).then((data) => {
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

[**InlineResponse20064**](InlineResponse20064.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

