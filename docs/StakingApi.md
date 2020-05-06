# DexApiNodejs.StakingApi

All URIs are relative to *https://dex-api.coinex.org*

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



## getDelegations

> InlineResponse2005 getDelegations(delegatorAddr)

Get all delegations from a delegator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getDelegations(delegatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDelegationsOfValidator

> InlineResponse2005 getDelegationsOfValidator(validatorAddr)

Get all delegations from a validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getDelegationsOfValidator(validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDelegationsToValidator

> InlineResponse2006 getDelegationsToValidator(delegatorAddr, validatorAddr)

Query the current delegation between a delegator and a validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getDelegationsToValidator(delegatorAddr, validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDelegatorTxs

> [PaginatedQueryTxs] getDelegatorTxs(delegatorAddr)

Get all staking txs (i.e msgs) from a delegator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getDelegatorTxs(delegatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## getRedelegations

> InlineResponse2009 getRedelegations(opts)

Get all redelegations (filter by query params)

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let opts = {
  'delegator': "delegator_example", // String | Bech32 AccAddress of Delegator
  'validatorFrom': "validatorFrom_example", // String | Bech32 ValAddress of SrcValidator
  'validatorTo': "validatorTo_example" // String | Bech32 ValAddress of DstValidator
};
apiInstance.getRedelegations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegator** | **String**| Bech32 AccAddress of Delegator | [optional] 
 **validatorFrom** | **String**| Bech32 ValAddress of SrcValidator | [optional] 
 **validatorTo** | **String**| Bech32 ValAddress of DstValidator | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingParameters

> InlineResponse20014 getStakingParameters()

Get the current staking parameter values

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
apiInstance.getStakingParameters().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingPool

> InlineResponse20013 getStakingPool()

Get the current state of the staking pool

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
apiInstance.getStakingPool().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUndelegationsBetween

> InlineResponse2008 getUndelegationsBetween(delegatorAddr, validatorAddr)

Query all unbonding delegations between a delegator and a validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getUndelegationsBetween(delegatorAddr, validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUndelegationsOfDelegator

> InlineResponse2007 getUndelegationsOfDelegator(delegatorAddr)

Get all unbonding delegations from a delegator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getUndelegationsOfDelegator(delegatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUndelegationsOfValidator

> InlineResponse20012 getUndelegationsOfValidator(validatorAddr)

Get all unbonding delegations from a validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getUndelegationsOfValidator(validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidator

> InlineResponse20011 getValidator(validatorAddr)

Query the information from a single validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getValidator(validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidatorOfDelegator

> InlineResponse20011 getValidatorOfDelegator(delegatorAddr, validatorAddr)

Query a validator that a delegator is bonded to

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 ValAddress of Delegator
apiInstance.getValidatorOfDelegator(delegatorAddr, validatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **validatorAddr** | **String**| Bech32 ValAddress of Delegator | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidators

> InlineResponse20010 getValidators(opts)

Get all validator candidates. By default it returns only the bonded validators.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let opts = {
  'status': bonded, // String | The validator bond status. Must be either 'bonded', 'unbonded', or 'unbonding'.
  'page': 1, // Number | The page number.
  'limit': 1 // Number | The maximum number of items per page.
};
apiInstance.getValidators(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| The validator bond status. Must be either &#39;bonded&#39;, &#39;unbonded&#39;, or &#39;unbonding&#39;. | [optional] 
 **page** | **Number**| The page number. | [optional] 
 **limit** | **Number**| The maximum number of items per page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidatorsOfDelegator

> InlineResponse20010 getValidatorsOfDelegator(delegatorAddr)

Query all validators that a delegator is bonded to

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getValidatorsOfDelegator(delegatorAddr).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitDelegation

> BroadcastTxCommitResult submitDelegation(delegatorAddr, opts)

Submit delegation

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let opts = {
  'delegation': new DexApiNodejs.InlineObject6() // InlineObject6 | 
};
apiInstance.submitDelegation(delegatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **delegation** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitRedelegation

> StdTx submitRedelegation(delegatorAddr, opts)

Submit a redelegation

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
let opts = {
  'delegation': new DexApiNodejs.InlineObject8() // InlineObject8 | 
};
apiInstance.submitRedelegation(delegatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **delegation** | [**InlineObject8**](InlineObject8.md)|  | [optional] 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## undelegate

> BroadcastTxCommitResult undelegate(delegatorAddr, opts)

Submit an unbonding delegation

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.StakingApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let opts = {
  'delegation': new DexApiNodejs.InlineObject7() // InlineObject7 | 
};
apiInstance.undelegate(delegatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **delegation** | [**InlineObject7**](InlineObject7.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

