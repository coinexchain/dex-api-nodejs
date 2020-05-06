# DexApiNodejs.AuthApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AuthApi.md#getAccount) | **GET** /auth/accounts/{address} | Get the account information on blockchain
[**getAuthParams**](AuthApi.md#getAuthParams) | **GET** /auth/parameters | Get the current auth parameters
[**setReferee**](AuthApi.md#setReferee) | **POST** /auth/accounts/{address}/referee | Set referee for account



## getAccount

> InlineResponse2004 getAccount(address)

Get the account information on blockchain

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AuthApi();
let address = coinex16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt; // String | Account address
apiInstance.getAccount(address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Account address | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAuthParams

> InlineResponse20034 getAuthParams()

Get the current auth parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AuthApi();
apiInstance.getAuthParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setReferee

> StdTx setReferee(address, referee)

Set referee for account

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AuthApi();
let address = coinex16gdxm24ht2mxtpz9cma6tr6a6d47x63hlq4pxt; // String | Account address in bech32 format
let referee = new DexApiNodejs.InlineObject5(); // InlineObject5 | 
apiInstance.setReferee(address, referee).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Account address in bech32 format | 
 **referee** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

