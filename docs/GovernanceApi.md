# DexApiNodejs.GovernanceApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**depositToProposal**](GovernanceApi.md#depositToProposal) | **POST** /gov/proposals/{proposalId}/deposits | Deposit tokens to a proposal
[**getDepositByAddr**](GovernanceApi.md#getDepositByAddr) | **GET** /gov/proposals/{proposalId}/deposits/{depositor} | Query deposit
[**getDepositParameters**](GovernanceApi.md#getDepositParameters) | **GET** /gov/parameters/deposit | Query governance deposit parameters
[**getDeposits**](GovernanceApi.md#getDeposits) | **GET** /gov/proposals/{proposalId}/deposits | Query deposits
[**getProposalByID**](GovernanceApi.md#getProposalByID) | **GET** /gov/proposals/{proposalId} | Query a proposal
[**getProposals**](GovernanceApi.md#getProposals) | **GET** /gov/proposals | Query proposals
[**getProposer**](GovernanceApi.md#getProposer) | **GET** /gov/proposals/{proposalId}/proposer | Query proposer
[**getTally**](GovernanceApi.md#getTally) | **GET** /gov/proposals/{proposalId}/tally | Get a proposal&#x27;s tally result at the current time
[**getTallyingParameters**](GovernanceApi.md#getTallyingParameters) | **GET** /gov/parameters/tallying | Query governance tally parameters
[**getVoterByAddr**](GovernanceApi.md#getVoterByAddr) | **GET** /gov/proposals/{proposalId}/votes/{voter} | Query vote
[**getVoters**](GovernanceApi.md#getVoters) | **GET** /gov/proposals/{proposalId}/votes | Query voters
[**getVotingParameters**](GovernanceApi.md#getVotingParameters) | **GET** /gov/parameters/voting | Query governance voting parameters
[**submitCommunityPoolSpendProposal**](GovernanceApi.md#submitCommunityPoolSpendProposal) | **POST** /gov/proposals/community_pool_spend | Generate a community pool spend proposal transaction
[**submitParameterChangeProposal**](GovernanceApi.md#submitParameterChangeProposal) | **POST** /gov/proposals/param_change | Generate a parameter change proposal transaction
[**submitProposal**](GovernanceApi.md#submitProposal) | **POST** /gov/proposals | Submit a proposal
[**voteProposal**](GovernanceApi.md#voteProposal) | **POST** /gov/proposals/{proposalId}/votes | Vote a proposal

<a name="depositToProposal"></a>
# **depositToProposal**
> BroadcastTxCommitResult depositToProposal(bodyproposalId)

Deposit tokens to a proposal

Send transaction to deposit tokens to a proposal

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let body = null; // Object | 
let proposalId = "proposalId_example"; // String | proposal id

apiInstance.depositToProposal(bodyproposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | 
 **proposalId** | **String**| proposal id | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDepositByAddr"></a>
# **getDepositByAddr**
> Object getDepositByAddr(proposalId, depositor)

Query deposit

Query deposit by proposalId and depositor address

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | proposal id
let depositor = "depositor_example"; // String | Bech32 depositor address

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDepositParameters"></a>
# **getDepositParameters**
> Object getDepositParameters()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeposits"></a>
# **getDeposits**
> Object getDeposits(proposalId)

Query deposits

Query deposits by proposalId

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | 

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProposalByID"></a>
# **getProposalByID**
> Object getProposalByID(proposalId)

Query a proposal

Query a proposal by id

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | 

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProposals"></a>
# **getProposals**
> Object getProposals(opts)

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProposer"></a>
# **getProposer**
> Object getProposer(proposalId)

Query proposer

Query for the proposer for a proposal

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | 

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTally"></a>
# **getTally**
> Object getTally(proposalId)

Get a proposal&#x27;s tally result at the current time

Gets a proposal&#x27;s tally result at the current time. If the proposal is pending deposits (i.e status &#x27;DepositPeriod&#x27;) it returns an empty tally result.

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | proposal id

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTallyingParameters"></a>
# **getTallyingParameters**
> Object getTallyingParameters()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoterByAddr"></a>
# **getVoterByAddr**
> Object getVoterByAddr(proposalId, voter)

Query vote

Query vote information by proposal Id and voter address

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | proposal id
let voter = "voter_example"; // String | Bech32 voter address

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoters"></a>
# **getVoters**
> Object getVoters(proposalId)

Query voters

Query voters information by proposalId

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let proposalId = "proposalId_example"; // String | proposal id

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVotingParameters"></a>
# **getVotingParameters**
> Object getVotingParameters()

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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submitCommunityPoolSpendProposal"></a>
# **submitCommunityPoolSpendProposal**
> StdTx submitCommunityPoolSpendProposal(body)

Generate a community pool spend proposal transaction

Generate a community pool spend proposal transaction

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let body = null; // Object | The community pool spend proposal body contains coin amount to be spent

apiInstance.submitCommunityPoolSpendProposal(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The community pool spend proposal body contains coin amount to be spent | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitParameterChangeProposal"></a>
# **submitParameterChangeProposal**
> StdTx submitParameterChangeProposal(body)

Generate a parameter change proposal transaction

Generate a parameter change proposal transaction

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let body = null; // Object | The parameter change proposal body that contains all parameter changes

apiInstance.submitParameterChangeProposal(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| The parameter change proposal body that contains all parameter changes | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitProposal"></a>
# **submitProposal**
> StdTx submitProposal(body)

Submit a proposal

Send transaction to submit a proposal

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let body = null; // Object | valid value of `"proposal_type"` can be `"text"`, `"parameter_change"`, `"software_upgrade"`

apiInstance.submitProposal(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| valid value of &#x60;&quot;proposal_type&quot;&#x60; can be &#x60;&quot;text&quot;&#x60;, &#x60;&quot;parameter_change&quot;&#x60;, &#x60;&quot;software_upgrade&quot;&#x60; | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="voteProposal"></a>
# **voteProposal**
> BroadcastTxCommitResult voteProposal(bodyproposalId)

Vote a proposal

Send transaction to vote a proposal

### Example
```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.GovernanceApi();
let body = null; // Object | valid value of `"option"` field can be `"yes"`, `"no"`, `"no_with_veto"` and `"abstain"`
let proposalId = "proposalId_example"; // String | proposal id

apiInstance.voteProposal(bodyproposalId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)| valid value of &#x60;&quot;option&quot;&#x60; field can be &#x60;&quot;yes&quot;&#x60;, &#x60;&quot;no&quot;&#x60;, &#x60;&quot;no_with_veto&quot;&#x60; and &#x60;&quot;abstain&quot;&#x60; | 
 **proposalId** | **String**| proposal id | 

### Return type

[**BroadcastTxCommitResult**](BroadcastTxCommitResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

