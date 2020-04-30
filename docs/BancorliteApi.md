# DexApiNodejs.BancorliteApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bancorCancel**](BancorliteApi.md#bancorCancel) | **POST** /bancorlite/bancor-cancel | cancel bancor
[**bancorInit**](BancorliteApi.md#bancorInit) | **POST** /bancorlite/bancor-init | create bancor
[**bancorTrade**](BancorliteApi.md#bancorTrade) | **POST** /bancorlite/bancor-trade | trade with bancor
[**getBancorInfo**](BancorliteApi.md#getBancorInfo) | **GET** /bancorlite/pools/{symbol} | get the bancor pool info
[**getBancorInfos**](BancorliteApi.md#getBancorInfos) | **GET** /bancorlite/infos | get all bancor infos
[**getBancorliteParams**](BancorliteApi.md#getBancorliteParams) | **GET** /bancorlite/parameters | Get the current bancorlite parameters

<a name="bancorCancel"></a>
# **bancorCancel**
> StdTx bancorCancel(body)

cancel bancor

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let body = null; // Object | cancel bancor

apiInstance.bancorCancel(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| cancel bancor | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bancorInit"></a>
# **bancorInit**
> StdTx bancorInit(body)

create bancor

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let body = null; // Object | create bancor

apiInstance.bancorInit(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| create bancor | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bancorTrade"></a>
# **bancorTrade**
> StdTx bancorTrade(body)

trade with bancor

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let body = null; // Object | trade with bancor

apiInstance.bancorTrade(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| trade with bancor | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBancorInfo"></a>
# **getBancorInfo**
> {&#x27;String&#x27;: Object} getBancorInfo(symbol)

get the bancor pool info

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.BancorliteApi();
let symbol = "symbol_example"; // String | stock and money pair

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

**{&#x27;String&#x27;: Object}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBancorInfos"></a>
# **getBancorInfos**
> Object getBancorInfos()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBancorliteParams"></a>
# **getBancorliteParams**
> Object getBancorliteParams()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

