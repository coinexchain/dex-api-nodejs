# DexApiNodejs.DistributionApi

All URIs are relative to *https://dex-api.coinex.org*

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
[**withdrawAllRewards**](DistributionApi.md#withdrawAllRewards) | **POST** /distribution/delegators/{delegatorAddr}/rewards | Withdraw all the delegator&#39;s delegation rewards
[**withdrawAllValidatorRewards**](DistributionApi.md#withdrawAllValidatorRewards) | **POST** /distribution/validators/{validatorAddr}/rewards | Withdraw the validator&#39;s rewards
[**withdrawRewardsByValidator**](DistributionApi.md#withdrawRewardsByValidator) | **POST** /distribution/delegators/{delegatorAddr}/rewards/{validatorAddr} | Withdraw a delegation reward



## donateToCommunityPool

> StdTx donateToCommunityPool(accAddress, amount)

Donate to the community pool

Donate some amount of cet to the community pool

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let accAddress = coinex1628t2zxa9antj3qtkg7xj2m4t68uljqvyjqrup; // String | Account address of the user
let amount = new DexApiNodejs.InlineObject19(); // InlineObject19 | 
apiInstance.donateToCommunityPool(accAddress, amount).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accAddress** | **String**| Account address of the user | 
 **amount** | [**InlineObject19**](InlineObject19.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllRewards

> InlineResponse20029 getAllRewards(delegatorAddr)

Get the total rewards balance from all delegations

Get the sum of all the rewards earned by delegations by a single delegator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getAllRewards(delegatorAddr).then((data) => {
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

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCommunityPool

> Object getCommunityPool()

Community pool parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
apiInstance.getCommunityPool().then((data) => {
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


## getDistributionInfo

> InlineResponse20032 getDistributionInfo(validatorAddr)

Validator distribution information

Query the distribution information of a single validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getDistributionInfo(validatorAddr).then((data) => {
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

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistributionParams

> InlineResponse20033 getDistributionParams()

Fee distribution parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
apiInstance.getDistributionParams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOutstandingRewards

> Object getOutstandingRewards(validatorAddr)

Fee distribution outstanding rewards of a single validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getOutstandingRewards(validatorAddr).then((data) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRewardByValidator

> InlineResponse20030 getRewardByValidator(delegatorAddr, validatorAddr)

Query a delegation reward

Query a single delegation reward by a delegator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getRewardByValidator(delegatorAddr, validatorAddr).then((data) => {
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

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getValidatorRewards

> InlineResponse20030 getValidatorRewards(validatorAddr)

Commission and self-delegation rewards of a single validator

Query the commission and self-delegation rewards of validator.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let validatorAddr = coinexvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys; // String | Bech32 OperatorAddress of validator
apiInstance.getValidatorRewards(validatorAddr).then((data) => {
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

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWithdrawAddress

> InlineResponse20031 getWithdrawAddress(delegatorAddr)

Get the rewards withdrawal address

Get the delegations&#39; rewards withdrawal address. This is the address in which the user will receive the reward funds

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = coinex167w96tdvmazakdwkw2u57227eduula2cy572lf; // String | Bech32 AccAddress of Delegator
apiInstance.getWithdrawAddress(delegatorAddr).then((data) => {
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

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setWithdrawAddress

> BroadcastTxCommitResult setWithdrawAddress(delegatorAddr, opts)

Replace the rewards withdrawal address

Replace the delegations&#39; rewards withdrawal address for a new one.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let opts = {
  'withdrawRequestBody': new DexApiNodejs.InlineObject17() // InlineObject17 | 
};
apiInstance.setWithdrawAddress(delegatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **withdrawRequestBody** | [**InlineObject17**](InlineObject17.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withdrawAllRewards

> BroadcastTxCommitResult withdrawAllRewards(delegatorAddr, opts)

Withdraw all the delegator&#39;s delegation rewards

Withdraw all the delegator&#39;s delegation rewards

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let opts = {
  'withdrawRequestBody': new DexApiNodejs.InlineObject15() // InlineObject15 | 
};
apiInstance.withdrawAllRewards(delegatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatorAddr** | **String**| Bech32 AccAddress of Delegator | 
 **withdrawRequestBody** | [**InlineObject15**](InlineObject15.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withdrawAllValidatorRewards

> BroadcastTxCommitResult withdrawAllValidatorRewards(validatorAddr, opts)

Withdraw the validator&#39;s rewards

Withdraw the validator&#39;s self-delegation and commissions rewards

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator
let opts = {
  'withdrawRequestBody': new DexApiNodejs.InlineObject18() // InlineObject18 | 
};
apiInstance.withdrawAllValidatorRewards(validatorAddr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validatorAddr** | **String**| Bech32 OperatorAddress of validator | 
 **withdrawRequestBody** | [**InlineObject18**](InlineObject18.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## withdrawRewardsByValidator

> BroadcastTxCommitResult withdrawRewardsByValidator(delegatorAddr, validatorAddr, opts)

Withdraw a delegation reward

Withdraw a delegator&#39;s delegation reward from a single validator

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.DistributionApi();
let delegatorAddr = "delegatorAddr_example"; // String | Bech32 AccAddress of Delegator
let validatorAddr = "validatorAddr_example"; // String | Bech32 OperatorAddress of validator
let opts = {
  'withdrawRequestBody': new DexApiNodejs.InlineObject16() // InlineObject16 | 
};
apiInstance.withdrawRewardsByValidator(delegatorAddr, validatorAddr, opts).then((data) => {
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
 **withdrawRequestBody** | [**InlineObject16**](InlineObject16.md)|  | [optional] 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

