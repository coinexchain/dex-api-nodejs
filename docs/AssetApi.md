# CetLiteForCoinExChain.AssetApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWhitelist**](AssetApi.md#addWhitelist) | **POST** /asset/tokens/{symbol}/forbidden/whitelist | Add forbid whitelist
[**burnToken**](AssetApi.md#burnToken) | **POST** /asset/tokens/{symbol}/burns | Burn token
[**forbidAddr**](AssetApi.md#forbidAddr) | **POST** /asset/tokens/{symbol}/forbidden/addresses | Forbid address
[**forbidToken**](AssetApi.md#forbidToken) | **POST** /asset/tokens/{symbol}/forbids | Forbid token
[**getAssetParams**](AssetApi.md#getAssetParams) | **GET** /asset/parameters | Get the current asset parameters
[**getForbiddenAddresses**](AssetApi.md#getForbiddenAddresses) | **GET** /asset/tokens/{symbol}/forbidden/addresses | query forbidden addresses
[**getReservedSymbols**](AssetApi.md#getReservedSymbols) | **GET** /asset/tokens/reserved/symbols | List reserved symbols
[**getToken**](AssetApi.md#getToken) | **GET** /asset/tokens/{symbol} | queryToken
[**getTokenList**](AssetApi.md#getTokenList) | **GET** /asset/tokens | List tokens
[**getWhitelist**](AssetApi.md#getWhitelist) | **GET** /asset/tokens/{symbol}/forbidden/whitelist | queryWhitelist
[**issueToken**](AssetApi.md#issueToken) | **POST** /asset/tokens | Issue token
[**mintToken**](AssetApi.md#mintToken) | **POST** /asset/tokens/{symbol}/mints | Mint token
[**modifyTokenInfo**](AssetApi.md#modifyTokenInfo) | **POST** /asset/tokens/{symbol}/infos | Modify token info
[**removeWhitelist**](AssetApi.md#removeWhitelist) | **POST** /asset/tokens/{symbol}/unforbidden/whitelist | Remove forbid whitelist
[**transferOwnership**](AssetApi.md#transferOwnership) | **POST** /asset/tokens/{symbol}/ownerships | Transfer ownership
[**unForbidAddr**](AssetApi.md#unForbidAddr) | **POST** /asset/tokens/{symbol}/unforbidden/addresses | UnForbid address
[**unFrobidToken**](AssetApi.md#unFrobidToken) | **POST** /asset/tokens/{symbol}/unforbids | UnForbid token

<a name="addWhitelist"></a>
# **addWhitelist**
> StdTx addWhitelist(bodysymbol)

Add forbid whitelist

Add forbiddable token whitelist addr

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = new CetLiteForCoinExChain.Whitelist(); // Whitelist | token whitelist addr
let symbol = "symbol_example"; // String | token symbol

apiInstance.addWhitelist(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Whitelist**](Whitelist.md)| token whitelist addr | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="burnToken"></a>
# **burnToken**
> StdTx burnToken(bodysymbol)

Burn token

Burn burnable token

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | burn token amount
let symbol = "symbol_example"; // String | token symbol

apiInstance.burnToken(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| burn token amount | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="forbidAddr"></a>
# **forbidAddr**
> StdTx forbidAddr(bodysymbol)

Forbid address

Add forbidden addresses

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = new CetLiteForCoinExChain.Addresses(); // Addresses | forbidden addresses
let symbol = "symbol_example"; // String | token symbol

apiInstance.forbidAddr(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Addresses**](Addresses.md)| forbidden addresses | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="forbidToken"></a>
# **forbidToken**
> StdTx forbidToken(bodysymbol)

Forbid token

Forbid forbiddable token

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | base req
let symbol = "symbol_example"; // String | token symbol

apiInstance.forbidToken(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| base req | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssetParams"></a>
# **getAssetParams**
> Object getAssetParams()

Get the current asset parameters

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
apiInstance.getAssetParams((error, data, response) => {
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

<a name="getForbiddenAddresses"></a>
# **getForbiddenAddresses**
> Object getForbiddenAddresses(symbol)

query forbidden addresses

Get forbidden addresses with provided &#x60;symbol&#x60;

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let symbol = "symbol_example"; // String | token symbol

apiInstance.getForbiddenAddresses(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReservedSymbols"></a>
# **getReservedSymbols**
> Object getReservedSymbols()

List reserved symbols

List all reserved symbols

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
apiInstance.getReservedSymbols((error, data, response) => {
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

<a name="getToken"></a>
# **getToken**
> Object getToken(symbol)

queryToken

Get token with provided &#x60;symbol&#x60;

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let symbol = "symbol_example"; // String | token symbol

apiInstance.getToken(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenList"></a>
# **getTokenList**
> Object getTokenList()

List tokens

List all existing tokens

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
apiInstance.getTokenList((error, data, response) => {
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

<a name="getWhitelist"></a>
# **getWhitelist**
> Object getWhitelist(symbol)

queryWhitelist

Get token whitelist with provided &#x60;symbol&#x60;

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let symbol = "symbol_example"; // String | token symbol

apiInstance.getWhitelist(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueToken"></a>
# **issueToken**
> StdTx issueToken(body)

Issue token

Issue a new Token

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = new CetLiteForCoinExChain.IssueToken(); // IssueToken | the detail info about the Token to issue

apiInstance.issueToken(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IssueToken**](IssueToken.md)| the detail info about the Token to issue | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mintToken"></a>
# **mintToken**
> StdTx mintToken(bodysymbol)

Mint token

Mint mintable token

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | mint token amount
let symbol = "symbol_example"; // String | token symbol

apiInstance.mintToken(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| mint token amount | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyTokenInfo"></a>
# **modifyTokenInfo**
> StdTx modifyTokenInfo(bodysymbol)

Modify token info

Modify token info

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | new token info
let symbol = "symbol_example"; // String | token symbol

apiInstance.modifyTokenInfo(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| new token info | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeWhitelist"></a>
# **removeWhitelist**
> StdTx removeWhitelist(bodysymbol)

Remove forbid whitelist

Remove forbiddable token whitelist addr

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = new CetLiteForCoinExChain.Whitelist(); // Whitelist | token whitelist addr
let symbol = "symbol_example"; // String | token symbol

apiInstance.removeWhitelist(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Whitelist**](Whitelist.md)| token whitelist addr | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferOwnership"></a>
# **transferOwnership**
> StdTx transferOwnership(bodysymbol)

Transfer ownership

Transfer token owner ship

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | transfer ownership to new owner
let symbol = "symbol_example"; // String | token symbol

apiInstance.transferOwnership(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| transfer ownership to new owner | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unForbidAddr"></a>
# **unForbidAddr**
> StdTx unForbidAddr(bodysymbol)

UnForbid address

Remove forbidden addresses

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = new CetLiteForCoinExChain.Addresses(); // Addresses | un forbidden addresses
let symbol = "symbol_example"; // String | token symbol

apiInstance.unForbidAddr(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Addresses**](Addresses.md)| un forbidden addresses | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unFrobidToken"></a>
# **unFrobidToken**
> StdTx unFrobidToken(bodysymbol)

UnForbid token

UnForbid forbiddable token

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.AssetApi();
let body = null; // Object | base req
let symbol = "symbol_example"; // String | token symbol

apiInstance.unFrobidToken(bodysymbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| base req | 
 **symbol** | **String**| token symbol | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

