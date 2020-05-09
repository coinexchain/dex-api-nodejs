# DexApiNodejs.CreateOrderInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** |  | [optional] 
**sender** | **String** | bech32 encoded address | [optional] 
**tradingPair** | **String** |  | [optional] 
**orderType** | **Number** | Limited value 2 | [optional] 
**price** | **String** |  | [optional] 
**quantity** | **Number** |  | [optional] 
**side** | **Number** | BUY:1/SELL:2 | [optional] 
**timeInForce** | **Number** | GTE:3/IOC:4 | [optional] 
**featureFee** | **Number** | Order feature fee, sato.CET as the unit | [optional] 
**height** | **Number** |  | [optional] 
**frozenFee** | **Number** | Order frozen fee, sato.CET as the unit | [optional] 
**freeze** | **Number** | Freeze sato.CET amount | [optional] 
**txHash** | **String** | The tx hash | [optional] 


