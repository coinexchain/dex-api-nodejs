# DexApiNodejs.AliasApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressFromAlias**](AliasApi.md#getAddressFromAlias) | **GET** /alias/address-of-alias/{alias} | Given an alias, query the corresponding address
[**getAliasParams**](AliasApi.md#getAliasParams) | **GET** /alias/parameters | Get the current alias parameters
[**getAliasesFromAddress**](AliasApi.md#getAliasesFromAddress) | **GET** /alias/aliases-of-address/{address} | Given an account&#x27;s address, query all the corresponding aliases
[**updateAlias**](AliasApi.md#updateAlias) | **POST** /alias/update | Add or remove alias for an address

<a name="getAddressFromAlias"></a>
# **getAddressFromAlias**
> Object getAddressFromAlias(alias)

Given an alias, query the corresponding address

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let alias = "alias_example"; // String | The alias to be queried

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAliasParams"></a>
# **getAliasParams**
> Object getAliasParams()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAliasesFromAddress"></a>
# **getAliasesFromAddress**
> Object getAliasesFromAddress(address)

Given an account&#x27;s address, query all the corresponding aliases

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let address = "address_example"; // String | The account's address to be queried

apiInstance.getAliasesFromAddress(address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The account&#x27;s address to be queried | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAlias"></a>
# **updateAlias**
> StdTx updateAlias(body)

Add or remove alias for an address

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AliasApi();
let body = null; // Object | update an address's aliases

apiInstance.updateAlias(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| update an address&#x27;s aliases | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

