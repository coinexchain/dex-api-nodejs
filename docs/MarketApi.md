# DexApiNodejs.MarketApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](MarketApi.md#cancelOrder) | **POST** /market/cancel-order | Cancel the order
[**cancelTradingPair**](MarketApi.md#cancelTradingPair) | **POST** /market/cancel-trading-pair | Cancel the trading-pair
[**createGteOrder**](MarketApi.md#createGteOrder) | **POST** /market/gte-orders | Create GTE order in blockchain
[**createIocOrder**](MarketApi.md#createIocOrder) | **POST** /market/ioc-orders | Create IOC order in blockchain
[**createTradingPair**](MarketApi.md#createTradingPair) | **POST** /market/trading-pairs | Create trading-pair in blockchain
[**getMarketParams**](MarketApi.md#getMarketParams) | **GET** /market/parameters | Get the current market parameters
[**getOrder**](MarketApi.md#getOrder) | **GET** /market/orders/{order-id} | Query order info
[**getOrders**](MarketApi.md#getOrders) | **GET** /market/orders/account/{address} | Query user order-id list
[**getOrdersInMarket**](MarketApi.md#getOrdersInMarket) | **GET** /market/orderbook/{stock}/{money} | Query trading-pair&#x27;s orderbook
[**getTradingPair**](MarketApi.md#getTradingPair) | **GET** /market/trading-pairs/{stock}/{money} | Query trading-pair info
[**modifyPricePrecision**](MarketApi.md#modifyPricePrecision) | **POST** /market/price-precision | Modify the price precision of the trading pair in the dex
[**queryTradingPairs**](MarketApi.md#queryTradingPairs) | **GET** /market/exist-trading-pairs | Query all trading-pair infos in blockchain

<a name="cancelOrder"></a>
# **cancelOrder**
> StdTx cancelOrder(body)

Cancel the order

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = null; // Object | cancel order tx

apiInstance.cancelOrder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| cancel order tx | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelTradingPair"></a>
# **cancelTradingPair**
> StdTx cancelTradingPair(body)

Cancel the trading-pair

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = null; // Object | cancel trading-pair in dex

apiInstance.cancelTradingPair(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| cancel trading-pair in dex | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGteOrder"></a>
# **createGteOrder**
> StdTx createGteOrder(body)

Create GTE order in blockchain

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = new DexApiNodejs.ModelObject(); // ModelObject | create order tx

apiInstance.createGteOrder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelObject**](ModelObject.md)| create order tx | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIocOrder"></a>
# **createIocOrder**
> StdTx createIocOrder(body)

Create IOC order in blockchain

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = new DexApiNodejs.ModelObject(); // ModelObject | create order tx

apiInstance.createIocOrder(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelObject**](ModelObject.md)| create order tx | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTradingPair"></a>
# **createTradingPair**
> StdTx createTradingPair(body)

Create trading-pair in blockchain

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = new DexApiNodejs.ModelObject(); // ModelObject | Create trading-pair

apiInstance.createTradingPair(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelObject**](ModelObject.md)| Create trading-pair | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMarketParams"></a>
# **getMarketParams**
> Object getMarketParams()

Get the current market parameters

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
apiInstance.getMarketParams().then((data) => {
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

<a name="getOrder"></a>
# **getOrder**
> Object getOrder(orderId)

Query order info

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let orderId = "orderId_example"; // String | The order id

apiInstance.getOrder(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The order id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrders"></a>
# **getOrders**
> Object getOrders(address)

Query user order-id list

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let address = "address_example"; // String | The user address

apiInstance.getOrders(address).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The user address | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrdersInMarket"></a>
# **getOrdersInMarket**
> Object getOrdersInMarket(stock, money)

Query trading-pair&#x27;s orderbook

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let stock = "stock_example"; // String | stock symbol
let money = "money_example"; // String | money symbol

apiInstance.getOrdersInMarket(stock, money).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stock** | **String**| stock symbol | 
 **money** | **String**| money symbol | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTradingPair"></a>
# **getTradingPair**
> Object getTradingPair(stock, money)

Query trading-pair info

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let stock = "stock_example"; // String | stock symbol
let money = "money_example"; // String | money symbol

apiInstance.getTradingPair(stock, money).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stock** | **String**| stock symbol | 
 **money** | **String**| money symbol | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyPricePrecision"></a>
# **modifyPricePrecision**
> StdTx modifyPricePrecision(body)

Modify the price precision of the trading pair in the dex

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let body = null; // Object | trading-pair, price-precision as params

apiInstance.modifyPricePrecision(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| trading-pair, price-precision as params | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="queryTradingPairs"></a>
# **queryTradingPairs**
> Object queryTradingPairs()

Query all trading-pair infos in blockchain

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
apiInstance.queryTradingPairs().then((data) => {
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

