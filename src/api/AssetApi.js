/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Addresses from '../model/Addresses';
import InlineObject20 from '../model/InlineObject20';
import InlineObject21 from '../model/InlineObject21';
import InlineObject22 from '../model/InlineObject22';
import InlineObject23 from '../model/InlineObject23';
import InlineObject24 from '../model/InlineObject24';
import InlineObject25 from '../model/InlineObject25';
import InlineResponse20037 from '../model/InlineResponse20037';
import InlineResponse20038 from '../model/InlineResponse20038';
import InlineResponse20039 from '../model/InlineResponse20039';
import InlineResponse20040 from '../model/InlineResponse20040';
import InlineResponse20041 from '../model/InlineResponse20041';
import IssueToken from '../model/IssueToken';
import StdTx from '../model/StdTx';
import Whitelist from '../model/Whitelist';

/**
* Asset service.
* @module api/AssetApi
* @version 3.0
*/
export default class AssetApi {

    /**
    * Constructs a new AssetApi. 
    * @alias module:api/AssetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add forbid whitelist
     * Add forbiddable token whitelist addr
     * @param {String} symbol token symbol
     * @param {module:model/Whitelist} whitelist token whitelist addr
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    addWhitelistWithHttpInfo(symbol, whitelist) {
      let postBody = whitelist;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling addWhitelist");
      }
      // verify the required parameter 'whitelist' is set
      if (whitelist === undefined || whitelist === null) {
        throw new Error("Missing the required parameter 'whitelist' when calling addWhitelist");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/forbidden/whitelist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add forbid whitelist
     * Add forbiddable token whitelist addr
     * @param {String} symbol token symbol
     * @param {module:model/Whitelist} whitelist token whitelist addr
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    addWhitelist(symbol, whitelist) {
      return this.addWhitelistWithHttpInfo(symbol, whitelist)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Burn token
     * Burn burnable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject22} amount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    burnTokenWithHttpInfo(symbol, amount) {
      let postBody = amount;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling burnToken");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling burnToken");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/burns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Burn token
     * Burn burnable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject22} amount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    burnToken(symbol, amount) {
      return this.burnTokenWithHttpInfo(symbol, amount)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Forbid address
     * Add forbidden addresses
     * @param {String} symbol token symbol
     * @param {module:model/Addresses} addresses forbidden addresses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    forbidAddrWithHttpInfo(symbol, addresses) {
      let postBody = addresses;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling forbidAddr");
      }
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling forbidAddr");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/forbidden/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Forbid address
     * Add forbidden addresses
     * @param {String} symbol token symbol
     * @param {module:model/Addresses} addresses forbidden addresses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    forbidAddr(symbol, addresses) {
      return this.forbidAddrWithHttpInfo(symbol, addresses)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Forbid token
     * Forbid forbiddable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject23} baseReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    forbidTokenWithHttpInfo(symbol, baseReq) {
      let postBody = baseReq;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling forbidToken");
      }
      // verify the required parameter 'baseReq' is set
      if (baseReq === undefined || baseReq === null) {
        throw new Error("Missing the required parameter 'baseReq' when calling forbidToken");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/forbids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Forbid token
     * Forbid forbiddable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject23} baseReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    forbidToken(symbol, baseReq) {
      return this.forbidTokenWithHttpInfo(symbol, baseReq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current asset parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20037} and HTTP response
     */
    getAssetParamsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20037;
      return this.apiClient.callApi(
        '/asset/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current asset parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20037}
     */
    getAssetParams() {
      return this.getAssetParamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * query forbidden addresses
     * Get forbidden addresses with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20040} and HTTP response
     */
    getForbiddenAddressesWithHttpInfo(symbol) {
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getForbiddenAddresses");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20040;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/forbidden/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * query forbidden addresses
     * Get forbidden addresses with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20040}
     */
    getForbiddenAddresses(symbol) {
      return this.getForbiddenAddressesWithHttpInfo(symbol)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List reserved symbols
     * List all reserved symbols
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20041} and HTTP response
     */
    getReservedSymbolsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20041;
      return this.apiClient.callApi(
        '/asset/tokens/reserved/symbols', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List reserved symbols
     * List all reserved symbols
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20041}
     */
    getReservedSymbols() {
      return this.getReservedSymbolsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * queryToken
     * Get token with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20039} and HTTP response
     */
    getTokenWithHttpInfo(symbol) {
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getToken");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20039;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * queryToken
     * Get token with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20039}
     */
    getToken(symbol) {
      return this.getTokenWithHttpInfo(symbol)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List tokens
     * List all existing tokens
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20038} and HTTP response
     */
    getTokenListWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20038;
      return this.apiClient.callApi(
        '/asset/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List tokens
     * List all existing tokens
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20038}
     */
    getTokenList() {
      return this.getTokenListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * queryWhitelist
     * Get token whitelist with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20040} and HTTP response
     */
    getWhitelistWithHttpInfo(symbol) {
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getWhitelist");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20040;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/forbidden/whitelist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * queryWhitelist
     * Get token whitelist with provided `symbol`
     * @param {String} symbol token symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20040}
     */
    getWhitelist(symbol) {
      return this.getWhitelistWithHttpInfo(symbol)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Issue token
     * Issue a new Token
     * @param {module:model/IssueToken} tokenInfo the detail info about the Token to issue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    issueTokenWithHttpInfo(tokenInfo) {
      let postBody = tokenInfo;
      // verify the required parameter 'tokenInfo' is set
      if (tokenInfo === undefined || tokenInfo === null) {
        throw new Error("Missing the required parameter 'tokenInfo' when calling issueToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Issue token
     * Issue a new Token
     * @param {module:model/IssueToken} tokenInfo the detail info about the Token to issue
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    issueToken(tokenInfo) {
      return this.issueTokenWithHttpInfo(tokenInfo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Mint token
     * Mint mintable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject21} amount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    mintTokenWithHttpInfo(symbol, amount) {
      let postBody = amount;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling mintToken");
      }
      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling mintToken");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/mints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Mint token
     * Mint mintable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject21} amount 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    mintToken(symbol, amount) {
      return this.mintTokenWithHttpInfo(symbol, amount)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modify token info
     * Modify token info
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject25} info 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    modifyTokenInfoWithHttpInfo(symbol, info) {
      let postBody = info;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling modifyTokenInfo");
      }
      // verify the required parameter 'info' is set
      if (info === undefined || info === null) {
        throw new Error("Missing the required parameter 'info' when calling modifyTokenInfo");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/infos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Modify token info
     * Modify token info
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject25} info 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    modifyTokenInfo(symbol, info) {
      return this.modifyTokenInfoWithHttpInfo(symbol, info)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove forbid whitelist
     * Remove forbiddable token whitelist addr
     * @param {String} symbol token symbol
     * @param {module:model/Whitelist} whitelist token whitelist addr
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    removeWhitelistWithHttpInfo(symbol, whitelist) {
      let postBody = whitelist;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling removeWhitelist");
      }
      // verify the required parameter 'whitelist' is set
      if (whitelist === undefined || whitelist === null) {
        throw new Error("Missing the required parameter 'whitelist' when calling removeWhitelist");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/unforbidden/whitelist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove forbid whitelist
     * Remove forbiddable token whitelist addr
     * @param {String} symbol token symbol
     * @param {module:model/Whitelist} whitelist token whitelist addr
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    removeWhitelist(symbol, whitelist) {
      return this.removeWhitelistWithHttpInfo(symbol, whitelist)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer ownership
     * Transfer token owner ship
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject20} newOwner 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    transferOwnershipWithHttpInfo(symbol, newOwner) {
      let postBody = newOwner;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling transferOwnership");
      }
      // verify the required parameter 'newOwner' is set
      if (newOwner === undefined || newOwner === null) {
        throw new Error("Missing the required parameter 'newOwner' when calling transferOwnership");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/ownerships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Transfer ownership
     * Transfer token owner ship
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject20} newOwner 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    transferOwnership(symbol, newOwner) {
      return this.transferOwnershipWithHttpInfo(symbol, newOwner)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UnForbid address
     * Remove forbidden addresses
     * @param {String} symbol token symbol
     * @param {module:model/Addresses} addresses un forbidden addresses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    unForbidAddrWithHttpInfo(symbol, addresses) {
      let postBody = addresses;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling unForbidAddr");
      }
      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling unForbidAddr");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/unforbidden/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UnForbid address
     * Remove forbidden addresses
     * @param {String} symbol token symbol
     * @param {module:model/Addresses} addresses un forbidden addresses
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    unForbidAddr(symbol, addresses) {
      return this.unForbidAddrWithHttpInfo(symbol, addresses)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * UnForbid token
     * UnForbid forbiddable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject24} baseReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StdTx} and HTTP response
     */
    unFrobidTokenWithHttpInfo(symbol, baseReq) {
      let postBody = baseReq;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling unFrobidToken");
      }
      // verify the required parameter 'baseReq' is set
      if (baseReq === undefined || baseReq === null) {
        throw new Error("Missing the required parameter 'baseReq' when calling unFrobidToken");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StdTx;
      return this.apiClient.callApi(
        '/asset/tokens/{symbol}/unforbids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * UnForbid token
     * UnForbid forbiddable token
     * @param {String} symbol token symbol
     * @param {module:model/InlineObject24} baseReq 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StdTx}
     */
    unFrobidToken(symbol, baseReq) {
      return this.unFrobidTokenWithHttpInfo(symbol, baseReq)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}