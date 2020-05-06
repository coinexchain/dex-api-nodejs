# DexApiNodejs.GovernanceApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**depositToProposal**](GovernanceApi.md#depositToProposal) | **POST** /gov/proposals/{proposalId}/deposits | Deposit tokens to a proposal
[**getDepositByAddr**](GovernanceApi.md#getDepositByAddr) | **GET** /gov/proposals/{proposalId}/deposits/{depositor} | Query deposit
[**getDepositParameters**](GovernanceApi.md#getDepositParameters) | **GET** /gov/parameters/deposit | Query governance deposit parameters
[**getDeposits**](GovernanceApi.md#getDeposits) | **GET** /gov/proposals/{proposalId}/deposits | Query deposits
[**getProposalByID**](GovernanceApi.md#getProposalByID) | **GET** /gov/proposals/{proposalId} | Query a proposal
[**getProposals**](GovernanceApi.md#getProposals) | **GET** /gov/proposals | Query proposals
[**getProposer**](GovernanceApi.md#getProposer) | **GET** /gov/proposals/{proposalId}/proposer | Query proposer
[**getTally**](GovernanceApi.md#getTally) | **GET** /gov/proposals/{proposalId}/tally | Get a proposal&#39;s tally result at the current time
[**getTallyingParameters**](GovernanceApi.md#getTallyingParameters) | **GET** /gov/parameters/tallying | Query governance tally parameters
[**getVoterByAddr**](GovernanceApi.md#getVoterByAddr) | **GET** /gov/proposals/{proposalId}/votes/{voter} | Query vote
[**getVoters**](GovernanceApi.md#getVoters) | **GET** /gov/proposals/{proposalId}/votes | Query voters
[**getVotingParameters**](GovernanceApi.md#getVotingParameters) | **GET** /gov/parameters/voting | Query governance voting parameters
[**submitCommunityPoolSpendProposal**](GovernanceApi.md#submitCommunityPoolSpendProposal) | **POST** /gov/proposals/community_pool_spend | Generate a community pool spend proposal transaction
[**submitParameterChangeProposal**](GovernanceApi.md#submitParameterChangeProposal) | **POST** /gov/proposals/param_change | Generate a parameter change proposal transaction
[**submitProposal**](GovernanceApi.md#submitProposal) | **POST** /gov/proposals | Submit a proposal
[**voteProposal**](GovernanceApi.md#voteProposal) | **POST** /gov/proposals/{proposalId}/votes | Vote a proposal



## depositToProposal

> BroadcastTxCommitResult depositToProposal(proposalId, postDepositBody)

Deposit tokens to a proposal

Send transaction to deposit tokens to a proposal

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
let postDepositBody = new DexApiNodejs.InlineObject13(); // InlineObject13 | 
apiInstance.depositToProposal(proposalId, postDepositBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 
 **postDepositBody** | [**InlineObject13**](InlineObject13.md)|  | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDepositByAddr

> InlineResponse20022 getDepositByAddr(proposalId, depositor)

Query deposit

Query deposit by proposalId and depositor address

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
let depositor = coinex1xl6453f6q6dv5770c9ue6hspdc0vxfuqtudkhz; // String | Bech32 depositor address
apiInstance.getDepositByAddr(proposalId, depositor).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 
 **depositor** | **String**| Bech32 depositor address | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDepositParameters

> InlineResponse20026 getDepositParameters()

Query governance deposit parameters

Query governance deposit parameters. The max_deposit_period units are in nanoseconds.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
apiInstance.getDepositParameters().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeposits

> InlineResponse20021 getDeposits(proposalId)

Query deposits

Query deposits by proposalId

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | 
apiInstance.getDeposits(proposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**|  | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProposalByID

> InlineResponse20019 getProposalByID(proposalId)

Query a proposal

Query a proposal by id

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 1; // String | 
apiInstance.getProposalByID(proposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**|  | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProposals

> InlineResponse20018 getProposals(opts)

Query proposals

Query proposals information with parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let opts = {
  'voter': "voter_example", // String | voter address
  'depositor': "depositor_example", // String | depositor address
  'status': "status_example" // String | proposal status, valid values can be `\"deposit_period\"`, `\"voting_period\"`, `\"passed\"`, `\"rejected\"`
};
apiInstance.getProposals(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voter** | **String**| voter address | [optional] 
 **depositor** | **String**| depositor address | [optional] 
 **status** | **String**| proposal status, valid values can be &#x60;\&quot;deposit_period\&quot;&#x60;, &#x60;\&quot;voting_period\&quot;&#x60;, &#x60;\&quot;passed\&quot;&#x60;, &#x60;\&quot;rejected\&quot;&#x60; | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProposer

> InlineResponse20020 getProposer(proposalId)

Query proposer

Query for the proposer for a proposal

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | 
apiInstance.getProposer(proposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**|  | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTally

> InlineResponse20025 getTally(proposalId)

Get a proposal&#39;s tally result at the current time

Gets a proposal&#39;s tally result at the current time. If the proposal is pending deposits (i.e status &#39;DepositPeriod&#39;) it returns an empty tally result.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
apiInstance.getTally(proposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTallyingParameters

> InlineResponse20027 getTallyingParameters()

Query governance tally parameters

Query governance tally parameters

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
apiInstance.getTallyingParameters().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoterByAddr

> InlineResponse20024 getVoterByAddr(proposalId, voter)

Query vote

Query vote information by proposal Id and voter address

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
let voter = coinex1qwl879nx9t6kef4supyazayf7vjhennyjqwjgr; // String | Bech32 voter address
apiInstance.getVoterByAddr(proposalId, voter).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 
 **voter** | **String**| Bech32 voter address | 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoters

> InlineResponse20023 getVoters(proposalId)

Query voters

Query voters information by proposalId

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
apiInstance.getVoters(proposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVotingParameters

> InlineResponse20028 getVotingParameters()

Query governance voting parameters

Query governance voting parameters. The voting_period units are in nanoseconds.

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
apiInstance.getVotingParameters().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitCommunityPoolSpendProposal

> StdTx submitCommunityPoolSpendProposal(postProposalBody)

Generate a community pool spend proposal transaction

Generate a community pool spend proposal transaction

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let postProposalBody = new DexApiNodejs.InlineObject12(); // InlineObject12 | 
apiInstance.submitCommunityPoolSpendProposal(postProposalBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postProposalBody** | [**InlineObject12**](InlineObject12.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitParameterChangeProposal

> StdTx submitParameterChangeProposal(postProposalBody)

Generate a parameter change proposal transaction

Generate a parameter change proposal transaction

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let postProposalBody = new DexApiNodejs.InlineObject11(); // InlineObject11 | 
apiInstance.submitParameterChangeProposal(postProposalBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postProposalBody** | [**InlineObject11**](InlineObject11.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitProposal

> StdTx submitProposal(postProposalBody)

Submit a proposal

Send transaction to submit a proposal

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let postProposalBody = new DexApiNodejs.InlineObject10(); // InlineObject10 | 
apiInstance.submitProposal(postProposalBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postProposalBody** | [**InlineObject10**](InlineObject10.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## voteProposal

> BroadcastTxCommitResult voteProposal(proposalId, postVoteBody)

Vote a proposal

Send transaction to vote a proposal

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = 2; // String | proposal id
let postVoteBody = new DexApiNodejs.InlineObject14(); // InlineObject14 | 
apiInstance.voteProposal(proposalId, postVoteBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposalId** | **String**| proposal id | 
 **postVoteBody** | [**InlineObject14**](InlineObject14.md)|  | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

