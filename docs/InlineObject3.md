# DexApiNodejs.InlineObject3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseReq** | [**BaseReq**](BaseReq.md) |  | 
**amount** | [**Coin**](Coin.md) |  | 
**unlockTime** | **String** |  | 
**sender** | **String** | The supervised amount sender&#39;s address (required when return or unlock-by-supervisor) | [optional] 
**supervisor** | **String** | The supervisor&#39;s address (required when create or unlock-by-sender if there is a supervisor) | [optional] 
**reward** | **String** |  | [optional] 
**operation** | **Number** | Operation type (create: 0; return: 1; unlock-by-sender: 2; unlock-by-supervisor: 3) | 


