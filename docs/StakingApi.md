# CetLiteForCoinExChain.StakingApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDelegations**](StakingApi.md#getDelegations) | **GET** /staking/delegators/{delegatorAddr}/delegations | Get all delegations from a delegator
[**getDelegationsOfValidator**](StakingApi.md#getDelegationsOfValidator) | **GET** /staking/validators/{validatorAddr}/delegations | Get all delegations from a validator
[**getDelegationsToValidator**](StakingApi.md#getDelegationsToValidator) | **GET** /staking/delegators/{delegatorAddr}/delegations/{validatorAddr} | Query the current delegation between a delegator and a validator
[**getDelegatorTxs**](StakingApi.md#getDelegatorTxs) | **GET** /staking/delegators/{delegatorAddr}/txs | Get all staking txs (i.e msgs) from a delegator
[**getRedelegations**](StakingApi.md#getRedelegations) | **GET** /staking/redelegations | Get all redelegations (filter by query params)
[**getStakingParameters**](StakingApi.md#getStakingParameters) | **GET** /staking/parameters | Get the current staking parameter values
[**getStakingPool**](StakingApi.md#getStakingPool) | **GET** /staking/pool | Get the current state of the staking pool
[**getUndelegationsBetween**](StakingApi.md#getUndelegationsBetween) | **GET** /staking/delegators/{delegatorAddr}/unbonding_delegations/{validatorAddr} | Query all unbonding delegations between a delegator and a validator
[**getUndelegationsOfDelegator**](StakingApi.md#getUndelegationsOfDelegator) | **GET** /staking/delegators/{delegatorAddr}/unbonding_delegations | Get all unbonding delegations from a delegator
[**getUndelegationsOfValidator**](StakingApi.md#getUndelegationsOfValidator) | **GET** /staking/validators/{validatorAddr}/unbonding_delegations | Get all unbonding delegations from a validator
[**getValidator**](StakingApi.md#getValidator) | **GET** /staking/validators/{validatorAddr} | Query the information from a single validator
[**getValidatorOfDelegator**](StakingApi.md#getValidatorOfDelegator) | **GET** /staking/delegators/{delegatorAddr}/validators/{validatorAddr} | Query a validator that a delegator is bonded to
[**getValidators**](StakingApi.md#getValidators) | **GET** /staking/validators | Get all validator candidates. By default it returns only the bonded validators.
[**getValidatorsOfDelegator**](StakingApi.md#getValidatorsOfDelegator) | **GET** /staking/delegators/{delegatorAddr}/validators | Query all validators that a delegator is bonded to
[**submitDelegation**](StakingApi.md#submitDelegation) | **POST** /staking/delegators/{delegatorAddr}/delegations | Submit delegation
[**submitRedelegation**](StakingApi.md#submitRedelegation) | **POST** /staking/delegators/{delegatorAddr}/redelegations | Submit a redelegation
[**undelegate**](StakingApi.md#undelegate) | **POST** /staking/delegators/{delegatorAddr}/unbonding_delegations | Submit an unbonding delegation

<a name="getDelegations"></a>
# **getDelegations**
> Object getDelegations(delegatorAddr)

Get all delegations from a delegator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getDelegations(delegatorAddr, (error, data, response) => {
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

<a name="getDelegationsOfValidator"></a>
# **getDelegationsOfValidator**
> Object getDelegationsOfValidator(validatorAddr)

Get all delegations from a validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getDelegationsOfValidator(validatorAddr, (error, data, response) => {
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

<a name="getDelegationsToValidator"></a>
# **getDelegationsToValidator**
> Object getDelegationsToValidator(delegatorAddr, validatorAddr)

Query the current delegation between a delegator and a validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getDelegationsToValidator(delegatorAddr, validatorAddr, (error, data, response) => {
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

<a name="getDelegatorTxs"></a>
# **getDelegatorTxs**
> [PaginatedQueryTxs] getDelegatorTxs(delegatorAddr)

Get all staking txs (i.e msgs) from a delegator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getDelegatorTxs(delegatorAddr, (error, data, response) => {
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

[**[PaginatedQueryTxs]**](PaginatedQueryTxs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRedelegations"></a>
# **getRedelegations**
> Object getRedelegations(opts)

Get all redelegations (filter by query params)

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let opts = { 
  'delegator': "delegator_example", // String | Bech32 AccAddress of Delegator
  'validatorFrom': "validatorFrom_example", // String | Bech32 ValAddress of SrcValidator
  'validatorTo': "validatorTo_example" // String | Bech32 ValAddress of DstValidator
};
apiInstance.getRedelegations(opts, (error, data, response) => {
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
 **delegator** | **String**| Bech32 AccAddress of Delegator | [optional] 
 **validatorFrom** | **String**| Bech32 ValAddress of SrcValidator | [optional] 
 **validatorTo** | **String**| Bech32 ValAddress of DstValidator | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStakingParameters"></a>
# **getStakingParameters**
> Object getStakingParameters()

Get the current staking parameter values

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
apiInstance.getStakingParameters((error, data, response) => {
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

<a name="getStakingPool"></a>
# **getStakingPool**
> Object getStakingPool()

Get the current state of the staking pool

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
apiInstance.getStakingPool((error, data, response) => {
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

<a name="getUndelegationsBetween"></a>
# **getUndelegationsBetween**
> Object getUndelegationsBetween(delegatorAddr, validatorAddr)

Query all unbonding delegations between a delegator and a validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getUndelegationsBetween(delegatorAddr, validatorAddr, (error, data, response) => {
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

<a name="getUndelegationsOfDelegator"></a>
# **getUndelegationsOfDelegator**
> Object getUndelegationsOfDelegator(delegatorAddr)

Get all unbonding delegations from a delegator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getUndelegationsOfDelegator(delegatorAddr, (error, data, response) => {
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

<a name="getUndelegationsOfValidator"></a>
# **getUndelegationsOfValidator**
> Object getUndelegationsOfValidator(validatorAddr)

Get all unbonding delegations from a validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getUndelegationsOfValidator(validatorAddr, (error, data, response) => {
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

<a name="getValidator"></a>
# **getValidator**
> Object getValidator(validatorAddr)

Query the information from a single validator

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator

apiInstance.getValidator(validatorAddr, (error, data, response) => {
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

<a name="getValidatorOfDelegator"></a>
# **getValidatorOfDelegator**
> Object getValidatorOfDelegator(delegatorAddr, validatorAddr)

Query a validator that a delegator is bonded to

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 ValAddress of Delegator

apiInstance.getValidatorOfDelegator(delegatorAddr, validatorAddr, (error, data, response) => {
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
 **validatorAddr** | **String**| Bech32 ValAddress of Delegator | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getValidators"></a>
# **getValidators**
> Object getValidators(opts)

Get all validator candidates. By default it returns only the bonded validators.

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let opts = { 
  'status': "status_example", // String | The validator bond status. Must be either 'bonded', 'unbonded', or 'unbonding'.
  'page': 56, // Number | The page number.
  'limit': 56 // Number | The maximum number of items per page.
};
apiInstance.getValidators(opts, (error, data, response) => {
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
 **status** | **String**| The validator bond status. Must be either &#x27;bonded&#x27;, &#x27;unbonded&#x27;, or &#x27;unbonding&#x27;. | [optional] 
 **page** | **Number**| The page number. | [optional] 
 **limit** | **Number**| The maximum number of items per page. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getValidatorsOfDelegator"></a>
# **getValidatorsOfDelegator**
> Object getValidatorsOfDelegator(delegatorAddr)

Query all validators that a delegator is bonded to

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.getValidatorsOfDelegator(delegatorAddr, (error, data, response) => {
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

<a name="submitDelegation"></a>
# **submitDelegation**
> BroadcastTxCommitResult submitDelegation(delegatorAddr)

Submit delegation

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.submitDelegation(delegatorAddr, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| submit delegation to provided validator | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitRedelegation"></a>
# **submitRedelegation**
> StdTx submitRedelegation(delegatorAddr)

Submit a redelegation

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.submitRedelegation(delegatorAddr, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| The sender and tx information | [optional] 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="undelegate"></a>
# **undelegate**
> BroadcastTxCommitResult undelegate(delegatorAddr)

Submit an unbonding delegation

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator

apiInstance.undelegate(delegatorAddr, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| The password of the account to remove from the KMS | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

