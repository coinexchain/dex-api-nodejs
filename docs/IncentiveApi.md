# CetLiteForCoinExChain.IncentiveApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIncentiveParams**](IncentiveApi.md#getIncentiveParams) | **GET** /incentive/parameters | Get the current incentive parameters

<a name="getIncentiveParams"></a>
# **getIncentiveParams**
> Object getIncentiveParams()

Get the current incentive parameters

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.IncentiveApi();
apiInstance.getIncentiveParams((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

