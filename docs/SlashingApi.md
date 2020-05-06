# DexApiNodejs.SlashingApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSigningInfo**](SlashingApi.md#getSigningInfo) | **GET** /slashing/validators/{validatorPubKey}/signing_info | Get sign info of given validator
[**getSigningInfos**](SlashingApi.md#getSigningInfos) | **GET** /slashing/signing_infos | Get sign info of given all validators
[**getSlashingParams**](SlashingApi.md#getSlashingParams) | **GET** /slashing/parameters | Get the current slashing parameters
[**unjailValidator**](SlashingApi.md#unjailValidator) | **POST** /slashing/validators/{validatorAddr}/unjail | Unjail a jailed validator



## getSigningInfo

> InlineResponse20015 getSigningInfo(validatorPubKey)

Get sign info of given validator

Get sign info of given validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let validatorPubKey = coinexvalconspub1zcjduepq7mft6gfls57a0a42d7uhx656cckhfvtrlmw744jv4q0mvlv0dypskehfk8; // String | Bech32 validator public key
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

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSigningInfos

> InlineResponse20016 getSigningInfos(page, limit)

Get sign info of given all validators

Get sign info of all validators

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let page = 1; // Number | Page number
let limit = 5; // Number | Maximum number of items per page
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSlashingParams

> InlineResponse20017 getSlashingParams()

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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unjailValidator

> BroadcastTxCommitResult unjailValidator(validatorAddr, unjailBody)

Unjail a jailed validator

Send transaction to unjail a jailed validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.SlashingApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 validator address
let unjailBody = new DexApiNodejs.InlineObject9(); // InlineObject9 | 
apiInstance.unjailValidator(validatorAddr, unjailBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorAddr** | **String**| Bech32 validator address | 
 **unjailBody** | [**InlineObject9**](InlineObject9.md)|  | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

