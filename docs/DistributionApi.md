# CetLiteForCoinExChain.DistributionApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**donateToCommunityPool**](DistributionApi.md#donateToCommunityPool) | **POST** /distribution/{accAddress}/donates | Donate to the community pool
[**getAllRewards**](DistributionApi.md#getAllRewards) | **GET** /distribution/delegators/{delegatorAddr}/rewards | Get the total rewards balance from all delegations
[**getCommunityPool**](DistributionApi.md#getCommunityPool) | **GET** /distribution/community_pool | Community pool parameters
[**getDistributionInfo**](DistributionApi.md#getDistributionInfo) | **GET** /distribution/validators/{validatorAddr} | Validator distribution information
[**getDistributionParams**](DistributionApi.md#getDistributionParams) | **GET** /distribution/parameters | Fee distribution parameters
[**getOutstandingRewards**](DistributionApi.md#getOutstandingRewards) | **GET** /distribution/validators/{validatorAddr}/outstanding_rewards | Fee distribution outstanding rewards of a single validator
[**getRewardByValidator**](DistributionApi.md#getRewardByValidator) | **GET** /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr} | Query a delegation reward
[**getValidatorRewards**](DistributionApi.md#getValidatorRewards) | **GET** /distribution/validators/{validatorAddr}/rewards | Commission and self-delegation rewards of a single validator
[**getWithdrawAddress**](DistributionApi.md#getWithdrawAddress) | **GET** /distribution/delegators/{delegatorAddr}/withdraw_address | Get the rewards withdrawal address
[**setWithdrawAddress**](DistributionApi.md#setWithdrawAddress) | **POST** /distribution/delegators/{delegatorAddr}/withdraw_address | Replace the rewards withdrawal address
[**withdrawAllRewards**](DistributionApi.md#withdrawAllRewards) | **POST** /distribution/delegators/{delegatorAddr}/rewards | Withdraw all the delegator&#x27;s delegation rewards
[**withdrawAllValidatorRewards**](DistributionApi.md#withdrawAllValidatorRewards) | **POST** /distribution/validators/{validatorAddr}/rewards | Withdraw the validator&#x27;s rewards
[**withdrawRewardsByValidator**](DistributionApi.md#withdrawRewardsByValidator) | **POST** /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr} | Withdraw a delegation reward

<a name="donateToCommunityPool"></a>
# **donateToCommunityPool**
> StdTx donateToCommunityPool(bodyaccAddress)

Donate to the community pool

Donate some amount of cet to the community pool

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let body = null; // Object | Amount of cet to donate
let accAddress = "accAddress_example"; // String | Account address of the user

apiInstance.donateToCommunityPool(bodyaccAddress, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| Amount of cet to donate | 
 **accAddress** | **String**| Account address of the user | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRewards"></a>
# **getAllRewards**
> Object getAllRewards(delegatorAddr)

Get the total rewards balance from all delegations

Get the sum of all the rewards earned by delegations by a single delegator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getAllRewards(delegatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCommunityPool"></a>
# **getCommunityPool**
> Object getCommunityPool()

Community pool parameters

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
apiInstance.getCommunityPool((error, data, response) => {
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

<a name="getDistributionInfo"></a>
# **getDistributionInfo**
> Object getDistributionInfo(validatorAddr)

Validator distribution information

Query the distribution information of a single validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getDistributionInfo(validatorAddr, (error, data, response) => {
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
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistributionParams"></a>
# **getDistributionParams**
> Object getDistributionParams()

Fee distribution parameters

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
apiInstance.getDistributionParams((error, data, response) => {
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

<a name="getOutstandingRewards"></a>
# **getOutstandingRewards**
> Object getOutstandingRewards(validatorAddr)

Fee distribution outstanding rewards of a single validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getOutstandingRewards(validatorAddr, (error, data, response) => {
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
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRewardByValidator"></a>
# **getRewardByValidator**
> Object getRewardByValidator(delegatorAddr, validatorAddr)

Query a delegation reward

Query a single delegation reward by a delegator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getRewardByValidator(delegatorAddr, validatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getValidatorRewards"></a>
# **getValidatorRewards**
> Object getValidatorRewards(validatorAddr)

Commission and self-delegation rewards of a single validator

Query the commission and self-delegation rewards of validator.

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getValidatorRewards(validatorAddr, (error, data, response) => {
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
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWithdrawAddress"></a>
# **getWithdrawAddress**
> Object getWithdrawAddress(delegatorAddr)

Get the rewards withdrawal address

Get the delegations&#x27; rewards withdrawal address. This is the address in which the user will receive the reward funds

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getWithdrawAddress(delegatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setWithdrawAddress"></a>
# **setWithdrawAddress**
> BroadcastTxCommitResult setWithdrawAddress(delegatorAddr)

Replace the rewards withdrawal address

Replace the delegations&#x27; rewards withdrawal address for a new one.

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.setWithdrawAddress(delegatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="withdrawAllRewards"></a>
# **withdrawAllRewards**
> BroadcastTxCommitResult withdrawAllRewards(delegatorAddr)

Withdraw all the delegator&#x27;s delegation rewards

Withdraw all the delegator&#x27;s delegation rewards

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.withdrawAllRewards(delegatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="withdrawAllValidatorRewards"></a>
# **withdrawAllValidatorRewards**
> BroadcastTxCommitResult withdrawAllValidatorRewards(validatorAddr)

Withdraw the validator&#x27;s rewards

Withdraw the validator&#x27;s self-delegation and commissions rewards

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.withdrawAllValidatorRewards(validatorAddr, (error, data, response) => {
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
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="withdrawRewardsByValidator"></a>
# **withdrawRewardsByValidator**
> BroadcastTxCommitResult withdrawRewardsByValidator(delegatorAddrvalidatorAddr)

Withdraw a delegation reward

Withdraw a delegator&#x27;s delegation reward from a single validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.withdrawRewardsByValidator(delegatorAddrvalidatorAddr, (error, data, response) => {
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
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

