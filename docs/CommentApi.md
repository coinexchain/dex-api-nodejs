# CetLiteForCoinExChain.CommentApi

All URIs are relative to *https://dex-api.coinex.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**followupComment**](CommentApi.md#followupComment) | **POST** /comment/followup-comment | Post a follow-up comment under some thread
[**newThread**](CommentApi.md#newThread) | **POST** /comment/new-thread | Post a new comment to open a new thread
[**rewardComments**](CommentApi.md#rewardComments) | **POST** /comment/reward-comments | reward some comments with coins

<a name="followupComment"></a>
# **followupComment**
> StdTx followupComment(body)

Post a follow-up comment under some thread

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.CommentApi();
let body = null; // Object | Post a follow-up comment

apiInstance.followupComment(body, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| Post a follow-up comment | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="newThread"></a>
# **newThread**
> StdTx newThread(body)

Post a new comment to open a new thread

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.CommentApi();
let body = null; // Object | open a new thread

apiInstance.newThread(body, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| open a new thread | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rewardComments"></a>
# **rewardComments**
> StdTx rewardComments(body)

reward some comments with coins

### Example
```javascript
import CetLiteForCoinExChain from 'cet_lite_for_coin_ex_chain';

let apiInstance = new CetLiteForCoinExChain.CommentApi();
let body = null; // Object | reward some comments

apiInstance.rewardComments(body, (error, data, response) => {
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
 **body** | [**Object**](Object.md)| reward some comments | 

### Return type

[**StdTx**](StdTx.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

