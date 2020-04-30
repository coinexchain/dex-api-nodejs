# DexApiNodejs.AuthApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AuthApi.md#getAccount) | **GET** /auth/accounts/{address} | Get the account information on blockchain
[**getAuthParams**](AuthApi.md#getAuthParams) | **GET** /auth/parameters | Get the current auth parameters
[**setReferee**](AuthApi.md#setReferee) | **POST** /auth/accounts/{address}/referee | Set referee for account

<a name="getAccount"></a>
# **getAccount**
> Object getAccount(address)

Get the account information on blockchain

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AuthApi();
let address = "address_example"; // String | Account address

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAuthParams"></a>
# **getAuthParams**
> Object getAuthParams()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setReferee"></a>
# **setReferee**
> StdTx setReferee(bodyaddress)

Set referee for account

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AuthApi();
let body = null; // Object | Referee
let address = "address_example"; // String | Account address in bech32 format

apiInstance.setReferee(bodyaddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| Referee | 
 **address** | **String**| Account address in bech32 format | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

