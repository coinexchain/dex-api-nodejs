# DexApiNodejs.AliasApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressFromAlias**](AliasApi.md#getAddressFromAlias) | **GET** /alias/address-of-alias/{alias} | Given an alias, query the corresponding address
[**getAliasParams**](AliasApi.md#getAliasParams) | **GET** /alias/parameters | Get the current alias parameters
[**getAliasesFromAddress**](AliasApi.md#getAliasesFromAddress) | **GET** /alias/aliases-of-address/{address} | Given an account&#39;s address, query all the corresponding aliases
[**updateAlias**](AliasApi.md#updateAlias) | **POST** /alias/update | Add or remove alias for an address



## getAddressFromAlias

> InlineResponse20048 getAddressFromAlias(alias)

Given an alias, query the corresponding address

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let alias = superman; // String | The alias to be queried
apiInstance.getAddressFromAlias(alias).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **String**| The alias to be queried | 

### Return type

[**InlineResponse20048**](InlineResponse20048.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAliasParams

> InlineResponse20050 getAliasParams()

Get the current alias parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
apiInstance.getAliasParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20050**](InlineResponse20050.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAliasesFromAddress

> InlineResponse20049 getAliasesFromAddress(address)

Given an account&#39;s address, query all the corresponding aliases

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let address = coinex1dmz7e2fddhejdz5n7e3qc5szx3zn2gj3ta8rwj; // String | The account's address to be queried
apiInstance.getAliasesFromAddress(address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The account&#39;s address to be queried | 

### Return type

[**InlineResponse20049**](InlineResponse20049.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlias

> StdTx updateAlias(aliasUpdateReq)

Add or remove alias for an address

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let aliasUpdateReq = new DexApiNodejs.InlineObject29(); // InlineObject29 | 
apiInstance.updateAlias(aliasUpdateReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aliasUpdateReq** | [**InlineObject29**](InlineObject29.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

