# DexApiNodejs.MarketApi

All URIs are relative to *https://dex-api.coinex.org*

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
[**getOrdersInMarket**](MarketApi.md#getOrdersInMarket) | **GET** /market/orderbook/{stock}/{money} | Query trading-pair&#39;s orderbook
[**getTradingPair**](MarketApi.md#getTradingPair) | **GET** /market/trading-pairs/{stock}/{money} | Query trading-pair info
[**modifyPricePrecision**](MarketApi.md#modifyPricePrecision) | **POST** /market/price-precision | Modify the price precision of the trading pair in the dex
[**queryCandleStick**](MarketApi.md#queryCandleStick) | **GET** /market/candle-sticks | Query market candleStick
[**queryDeal**](MarketApi.md#queryDeal) | **GET** /market/deals | Query market deal
[**queryDepth**](MarketApi.md#queryDepth) | **GET** /market/depths | Query market depth
[**queryOrder**](MarketApi.md#queryOrder) | **GET** /market/user-orders | Query account&#39;s order
[**queryTickers**](MarketApi.md#queryTickers) | **GET** /market/tickers | Query market tickers
[**queryTradingPairs**](MarketApi.md#queryTradingPairs) | **GET** /market/exist-trading-pairs | Query all trading-pair infos in blockchain



## cancelOrder

> StdTx cancelOrder(orderInfo)

Cancel the order

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let orderInfo = new DexApiNodejs.InlineObject27(); // InlineObject27 | 
apiInstance.cancelOrder(orderInfo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderInfo** | [**InlineObject27**](InlineObject27.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelTradingPair

> StdTx cancelTradingPair(info)

Cancel the trading-pair

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let info = new DexApiNodejs.InlineObject28(); // InlineObject28 | 
apiInstance.cancelTradingPair(info).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **info** | [**InlineObject28**](InlineObject28.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGteOrder

> StdTx createGteOrder(orderInfo)

Create GTE order in blockchain

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let orderInfo = new DexApiNodejs.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | create order tx
apiInstance.createGteOrder(orderInfo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderInfo** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| create order tx | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIocOrder

> StdTx createIocOrder(orderInfo)

Create IOC order in blockchain

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let orderInfo = new DexApiNodejs.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | create order tx
apiInstance.createIocOrder(orderInfo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderInfo** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| create order tx | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTradingPair

> StdTx createTradingPair(info)

Create trading-pair in blockchain

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let info = new DexApiNodejs.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | Create trading-pair
apiInstance.createTradingPair(info).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **info** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| Create trading-pair | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMarketParams

> InlineResponse20042 getMarketParams()

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

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrder

> InlineResponse20046 getOrder(orderId)

Query order info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let orderId = coinex1dmz7e2fddhejdz5n7e3qc5szx3zn2gj3ta8rwj; // String | The order id
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

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrders

> InlineResponse20047 getOrders(address)

Query user order-id list

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let address = coinex1dmz7e2fddhejdz5n7e3qc5szx3zn2gj3ta8rwj; // String | The user address
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

[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersInMarket

> InlineResponse20045 getOrdersInMarket(stock, money)

Query trading-pair&#39;s orderbook

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let stock = btc; // String | stock symbol
let money = cet; // String | money symbol
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

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTradingPair

> InlineResponse20044 getTradingPair(stock, money)

Query trading-pair info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let stock = btc; // String | stock symbol
let money = cet; // String | money symbol
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

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyPricePrecision

> StdTx modifyPricePrecision(info)

Modify the price precision of the trading pair in the dex

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let info = new DexApiNodejs.InlineObject26(); // InlineObject26 | 
apiInstance.modifyPricePrecision(info).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **info** | [**InlineObject26**](InlineObject26.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryCandleStick

> [CandleStick] queryCandleStick(market, timespan, time, sid, count)

Query market candleStick

Query candleStick until to given time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let market = "market_example"; // String | stock/money
let timespan = "timespan_example"; // String | 1min/1hour/1day
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier candleStick count limited to 1024
apiInstance.queryCandleStick(market, timespan, time, sid, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| stock/money | 
 **timespan** | **String**| 1min/1hour/1day | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier candleStick count limited to 1024 | 

### Return type

[**[CandleStick]**](CandleStick.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryDeal

> InlineResponse20056 queryDeal(market, time, sid, count)

Query market deal

Query market deal until to given time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let market = "market_example"; // String | stock/money
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier deal count limited to 1024
apiInstance.queryDeal(market, time, sid, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| stock/money | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier deal count limited to 1024 | 

### Return type

[**InlineResponse20056**](InlineResponse20056.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryDepth

> InlineResponse20055 queryDepth(market, count)

Query market depth

Query purchases and sales of a market at all price levels

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let market = "market_example"; // String | stock/money
let count = 56; // Number | Querier count limited to 1024
apiInstance.queryDepth(market, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| stock/money | 
 **count** | **Number**| Querier count limited to 1024 | 

### Return type

[**InlineResponse20055**](InlineResponse20055.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryOrder

> UserOrder queryOrder(account, time, sid, count, opts)

Query account&#39;s order

Query account&#39;s order activities in all markets until to given time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let account = "account_example"; // String | Bech32 address
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier order count limited to 1024
let opts = {
  'token': "token_example", // String | Symbol
  'tag': "tag_example" // String | Filter responses type by tag string create/fill/cancel
};
apiInstance.queryOrder(account, time, sid, count, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| Bech32 address | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier order count limited to 1024 | 
 **token** | **String**| Symbol | [optional] 
 **tag** | **String**| Filter responses type by tag string create/fill/cancel | [optional] 

### Return type

[**UserOrder**](UserOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryTickers

> [Tickers] queryTickers(marketList)

Query market tickers

Query tickers info

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.MarketApi();
let marketList = ["null"]; // [String] | Market count limited to 1~100
apiInstance.queryTickers(marketList).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketList** | [**[String]**](String.md)| Market count limited to 1~100 | 

### Return type

[**[Tickers]**](Tickers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryTradingPairs

> InlineResponse20043 queryTradingPairs()

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

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

