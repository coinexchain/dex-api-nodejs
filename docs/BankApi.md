# CetLiteForCoinExChain.BankApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddressBalances**](BankApi.md#getAddressBalances) | **GET** /bank/balances/{address} | Get the account balances
[**getBankParams**](BankApi.md#getBankParams) | **GET** /bank/parameters | Get the current bankx parameters
[**sendCoins**](BankApi.md#sendCoins) | **POST** /bank/accounts/{address}/transfers | Send coins from one account to another
[**setMemoRequired**](BankApi.md#setMemoRequired) | **POST** /bank/accounts/memo | Mark if memo is required to receive coins
[**transferSupervisedCoins**](BankApi.md#transferSupervisedCoins) | **POST** /bank/accounts/{address}/supervised_transfers | Operate a supervised transfer

<a name="getAddressBalances"></a>
# **getAddressBalances**
> {&#x27;String&#x27;: Object} getAddressBalances(address)

Get the account balances

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.BankApi();
let address = "address_example"; // String | Account address in bech32 format

apiInstance.getAddressBalances(address, (error, data, response) => {
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
 **address** | **String**| Account address in bech32 format | 

### Return type

**{&#x27;String&#x27;: Object}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBankParams"></a>
# **getBankParams**
> Object getBankParams()

Get the current bankx parameters

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.BankApi();
apiInstance.getBankParams((error, data, response) => {
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

<a name="sendCoins"></a>
# **sendCoins**
> StdTx sendCoins(bodyaddress)

Send coins from one account to another

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.BankApi();
let body = null; // Object | The sender and tx information
let address = "address_example"; // String | Account address in bech32 format

apiInstance.sendCoins(bodyaddress, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| The sender and tx information | 
 **address** | **String**| Account address in bech32 format | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setMemoRequired"></a>
# **setMemoRequired**
> StdTx setMemoRequired(body)

Mark if memo is required to receive coins

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.BankApi();
let body = null; // Object | The mark

apiInstance.setMemoRequired(body, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| The mark | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferSupervisedCoins"></a>
# **transferSupervisedCoins**
> StdTx transferSupervisedCoins(bodyaddress)

Operate a supervised transfer

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.BankApi();
let body = null; // Object | The sender and tx information
let address = "address_example"; // String | Account address in bech32 format

apiInstance.transferSupervisedCoins(bodyaddress, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| The sender and tx information | 
 **address** | **String**| Account address in bech32 format | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

