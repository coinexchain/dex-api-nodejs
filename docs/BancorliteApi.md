# DexApiNodejs.BancorliteApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bancorCancel**](BancorliteApi.md#bancorCancel) | **POST** /bancorlite/bancor-cancel | cancel bancor
[**bancorInit**](BancorliteApi.md#bancorInit) | **POST** /bancorlite/bancor-init | create bancor
[**bancorTrade**](BancorliteApi.md#bancorTrade) | **POST** /bancorlite/bancor-trade | trade with bancor
[**getBancorInfo**](BancorliteApi.md#getBancorInfo) | **GET** /bancorlite/pools/{symbol} | get the bancor pool info
[**getBancorInfos**](BancorliteApi.md#getBancorInfos) | **GET** /bancorlite/infos | get all bancor infos
[**getBancorliteParams**](BancorliteApi.md#getBancorliteParams) | **GET** /bancorlite/parameters | Get the current bancorlite parameters



## bancorCancel

> StdTx bancorCancel(bancorCancel)

cancel bancor

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let bancorCancel = new DexApiNodejs.InlineObject35(); // InlineObject35 | 
apiInstance.bancorCancel(bancorCancel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bancorCancel** | [**InlineObject35**](InlineObject35.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bancorInit

> StdTx bancorInit(bancorInit)

create bancor

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let bancorInit = new DexApiNodejs.InlineObject33(); // InlineObject33 | 
apiInstance.bancorInit(bancorInit).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bancorInit** | [**InlineObject33**](InlineObject33.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bancorTrade

> StdTx bancorTrade(bancorTrade)

trade with bancor

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let bancorTrade = new DexApiNodejs.InlineObject34(); // InlineObject34 | 
apiInstance.bancorTrade(bancorTrade).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bancorTrade** | [**InlineObject34**](InlineObject34.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBancorInfo

> {String: Object} getBancorInfo(symbol)

get the bancor pool info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let symbol = btc-cet; // String | stock and money pair
apiInstance.getBancorInfo(symbol).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| stock and money pair | 

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBancorInfos

> InlineResponse20052 getBancorInfos()

get all bancor infos

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
apiInstance.getBancorInfos().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20052**](InlineResponse20052.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBancorliteParams

> InlineResponse20051 getBancorliteParams()

Get the current bancorlite parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
apiInstance.getBancorliteParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20051**](InlineResponse20051.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

