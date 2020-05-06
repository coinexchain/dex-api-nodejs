# DexApiNodejs.AssetApi

All URIs are relative to *https://dex-api.coinex.org*

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



## addWhitelist

> StdTx addWhitelist(symbol, whitelist)

Add forbid whitelist

Add forbiddable token whitelist addr

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let whitelist = new DexApiNodejs.Whitelist(); // Whitelist | token whitelist addr
apiInstance.addWhitelist(symbol, whitelist).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **whitelist** | [**Whitelist**](Whitelist.md)| token whitelist addr | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## burnToken

> StdTx burnToken(symbol, amount)

Burn token

Burn burnable token

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let amount = new DexApiNodejs.InlineObject22(); // InlineObject22 | 
apiInstance.burnToken(symbol, amount).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **amount** | [**InlineObject22**](InlineObject22.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## forbidAddr

> StdTx forbidAddr(symbol, addresses)

Forbid address

Add forbidden addresses

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let addresses = new DexApiNodejs.Addresses(); // Addresses | forbidden addresses
apiInstance.forbidAddr(symbol, addresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **addresses** | [**Addresses**](Addresses.md)| forbidden addresses | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## forbidToken

> StdTx forbidToken(symbol, baseReq)

Forbid token

Forbid forbiddable token

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let baseReq = new DexApiNodejs.InlineObject23(); // InlineObject23 | 
apiInstance.forbidToken(symbol, baseReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **baseReq** | [**InlineObject23**](InlineObject23.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAssetParams

> InlineResponse20037 getAssetParams()

Get the current asset parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
apiInstance.getAssetParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getForbiddenAddresses

> InlineResponse20040 getForbiddenAddresses(symbol)

query forbidden addresses

Get forbidden addresses with provided &#x60;symbol&#x60;

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
apiInstance.getForbiddenAddresses(symbol).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReservedSymbols

> InlineResponse20041 getReservedSymbols()

List reserved symbols

List all reserved symbols

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
apiInstance.getReservedSymbols().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getToken

> InlineResponse20039 getToken(symbol)

queryToken

Get token with provided &#x60;symbol&#x60;

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
apiInstance.getToken(symbol).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTokenList

> InlineResponse20038 getTokenList()

List tokens

List all existing tokens

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
apiInstance.getTokenList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWhitelist

> InlineResponse20040 getWhitelist(symbol)

queryWhitelist

Get token whitelist with provided &#x60;symbol&#x60;

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
apiInstance.getWhitelist(symbol).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueToken

> StdTx issueToken(tokenInfo)

Issue token

Issue a new Token

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let tokenInfo = new DexApiNodejs.IssueToken(); // IssueToken | the detail info about the Token to issue
apiInstance.issueToken(tokenInfo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenInfo** | [**IssueToken**](IssueToken.md)| the detail info about the Token to issue | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mintToken

> StdTx mintToken(symbol, amount)

Mint token

Mint mintable token

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let amount = new DexApiNodejs.InlineObject21(); // InlineObject21 | 
apiInstance.mintToken(symbol, amount).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **amount** | [**InlineObject21**](InlineObject21.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyTokenInfo

> StdTx modifyTokenInfo(symbol, info)

Modify token info

Modify token info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let info = new DexApiNodejs.InlineObject25(); // InlineObject25 | 
apiInstance.modifyTokenInfo(symbol, info).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **info** | [**InlineObject25**](InlineObject25.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeWhitelist

> StdTx removeWhitelist(symbol, whitelist)

Remove forbid whitelist

Remove forbiddable token whitelist addr

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let whitelist = new DexApiNodejs.Whitelist(); // Whitelist | token whitelist addr
apiInstance.removeWhitelist(symbol, whitelist).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **whitelist** | [**Whitelist**](Whitelist.md)| token whitelist addr | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferOwnership

> StdTx transferOwnership(symbol, newOwner)

Transfer ownership

Transfer token owner ship

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let newOwner = new DexApiNodejs.InlineObject20(); // InlineObject20 | 
apiInstance.transferOwnership(symbol, newOwner).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **newOwner** | [**InlineObject20**](InlineObject20.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unForbidAddr

> StdTx unForbidAddr(symbol, addresses)

UnForbid address

Remove forbidden addresses

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let addresses = new DexApiNodejs.Addresses(); // Addresses | un forbidden addresses
apiInstance.unForbidAddr(symbol, addresses).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **addresses** | [**Addresses**](Addresses.md)| un forbidden addresses | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unFrobidToken

> StdTx unFrobidToken(symbol, baseReq)

UnForbid token

UnForbid forbiddable token

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.AssetApi();
let symbol = abc; // String | token symbol
let baseReq = new DexApiNodejs.InlineObject24(); // InlineObject24 | 
apiInstance.unFrobidToken(symbol, baseReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol | 
 **baseReq** | [**InlineObject24**](InlineObject24.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

