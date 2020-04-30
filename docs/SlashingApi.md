# DexApiNodejs.SlashingApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSigningInfo**](SlashingApi.md#getSigningInfo) | **GET** /slashing/validators/{validatorPubKey}/signing_info | Get sign info of given validator
[**getSigningInfos**](SlashingApi.md#getSigningInfos) | **GET** /slashing/signing_infos | Get sign info of given all validators
[**getSlashingParams**](SlashingApi.md#getSlashingParams) | **GET** /slashing/parameters | Get the current slashing parameters
[**unjailValidator**](SlashingApi.md#unjailValidator) | **POST** /slashing/validators/{validatorAddr}/unjail | Unjail a jailed validator

<a name="getSigningInfo"></a>
# **getSigningInfo**
> Object getSigningInfo(validatorPubKey)

Get sign info of given validator

Get sign info of given validator

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let validatorPubKey = "validatorPubKey_example"; // String | Bech32 validator public key

apiInstance.getSigningInfo(validatorPubKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorPubKey** | **String**| Bech32 validator public key | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSigningInfos"></a>
# **getSigningInfos**
> Object getSigningInfos(page, limit)

Get sign info of given all validators

Get sign info of all validators

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let page = 56; // Number | Page number
let limit = 56; // Number | Maximum number of items per page

apiInstance.getSigningInfos(page, limit).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number | 
 **limit** | **Number**| Maximum number of items per page | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSlashingParams"></a>
# **getSlashingParams**
> Object getSlashingParams()

Get the current slashing parameters

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
apiInstance.getSlashingParams().then((data) => {
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

<a name="unjailValidator"></a>
# **unjailValidator**
> BroadcastTxCommitResult unjailValidator(bodyvalidatorAddr)

Unjail a jailed validator

Send transaction to unjail a jailed validator

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let body = null; // Object | 
let validatorAddr = "validatorAddr_example"; // String | Bech32 validator address

apiInstance.unjailValidator(bodyvalidatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | 
 **validatorAddr** | **String**| Bech32 validator address | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

