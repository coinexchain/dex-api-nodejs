# DexApiNodejs.IncentiveApi

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
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.IncentiveApi();
apiInstance.getIncentiveParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

