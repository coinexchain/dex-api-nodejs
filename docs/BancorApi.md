# DexApiNodejs.BancorApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryBancorDeal**](BancorApi.md#queryBancorDeal) | **GET** /bancorlite/deals | Query bancor market deal



## queryBancorDeal

> InlineResponse20057 queryBancorDeal(market, time, sid, count)

Query bancor market deal

Query bancor market deal until to given time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorApi();
let market = "market_example"; // String | B:stock/money
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier deal count limited to 1024
apiInstance.queryBancorDeal(market, time, sid, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| B:stock/money | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier deal count limited to 1024 | 

### Return type

[**InlineResponse20057**](InlineResponse20057.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

