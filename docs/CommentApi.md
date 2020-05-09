# DexApiNodejs.CommentApi

All URIs are relative to *https://dex-api.coinex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**followupComment**](CommentApi.md#followupComment) | **POST** /comment/followup-comment | Post a follow-up comment under some thread
[**newThread**](CommentApi.md#newThread) | **POST** /comment/new-thread | Post a new comment to open a new thread
[**queryComment**](CommentApi.md#queryComment) | **GET** /comment/comments | Query token comment
[**rewardComments**](CommentApi.md#rewardComments) | **POST** /comment/reward-comments | reward some comments with coins



## followupComment

> StdTx followupComment(followupCommentReq)

Post a follow-up comment under some thread

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.CommentApi();
let followupCommentReq = new DexApiNodejs.InlineObject31(); // InlineObject31 | 
apiInstance.followupComment(followupCommentReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **followupCommentReq** | [**InlineObject31**](InlineObject31.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## newThread

> StdTx newThread(newThreadReq)

Post a new comment to open a new thread

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.CommentApi();
let newThreadReq = new DexApiNodejs.InlineObject30(); // InlineObject30 | 
apiInstance.newThread(newThreadReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newThreadReq** | [**InlineObject30**](InlineObject30.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryComment

> InlineResponse20063 queryComment(token, time, sid, count)

Query token comment

Query all comments about given token until to time

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.CommentApi();
let token = "token_example"; // String | Symbol
let time = 789; // Number | Unix timestamp
let sid = 789; // Number | Sequence id
let count = 56; // Number | Querier comment count limited to 1024
apiInstance.queryComment(token, time, sid, count).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Symbol | 
 **time** | **Number**| Unix timestamp | 
 **sid** | **Number**| Sequence id | 
 **count** | **Number**| Querier comment count limited to 1024 | 

### Return type

[**InlineResponse20063**](InlineResponse20063.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rewardComments

> StdTx rewardComments(rewardCommentsReq)

reward some comments with coins

### Example

```javascript
import DexApiNodejs from 'dex-api-nodejs';

let apiInstance = new DexApiNodejs.CommentApi();
let rewardCommentsReq = new DexApiNodejs.InlineObject32(); // InlineObject32 | 
apiInstance.rewardComments(rewardCommentsReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardCommentsReq** | [**InlineObject32**](InlineObject32.md)|  | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

