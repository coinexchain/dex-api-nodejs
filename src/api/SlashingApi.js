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
import BroadcastTxCommitResult from '../model/BroadcastTxCommitResult';
import InlineObject9 from '../model/InlineObject9';
import InlineResponse20015 from '../model/InlineResponse20015';
import InlineResponse20016 from '../model/InlineResponse20016';
import InlineResponse20017 from '../model/InlineResponse20017';

/**
* Slashing service.
* @module api/SlashingApi
* @version 3.0
*/
export default class SlashingApi {

    /**
    * Constructs a new SlashingApi. 
    * @alias module:api/SlashingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get sign info of given validator
     * Get sign info of given validator
     * @param {String} validatorPubKey Bech32 validator public key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */
    getSigningInfoWithHttpInfo(validatorPubKey) {
      let postBody = null;
      // verify the required parameter 'validatorPubKey' is set
      if (validatorPubKey === undefined || validatorPubKey === null) {
        throw new Error("Missing the required parameter 'validatorPubKey' when calling getSigningInfo");
      }

      let pathParams = {
        'validatorPubKey': validatorPubKey
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
      let returnType = InlineResponse20015;
      return this.apiClient.callApi(
        '/slashing/validators/{validatorPubKey}/signing_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get sign info of given validator
     * Get sign info of given validator
     * @param {String} validatorPubKey Bech32 validator public key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */
    getSigningInfo(validatorPubKey) {
      return this.getSigningInfoWithHttpInfo(validatorPubKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get sign info of given all validators
     * Get sign info of all validators
     * @param {Number} page Page number
     * @param {Number} limit Maximum number of items per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20016} and HTTP response
     */
    getSigningInfosWithHttpInfo(page, limit) {
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getSigningInfos");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getSigningInfos");
      }

      let pathParams = {
      };
      let queryParams = {
        'page': page,
        'limit': limit
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20016;
      return this.apiClient.callApi(
        '/slashing/signing_infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get sign info of given all validators
     * Get sign info of all validators
     * @param {Number} page Page number
     * @param {Number} limit Maximum number of items per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20016}
     */
    getSigningInfos(page, limit) {
      return this.getSigningInfosWithHttpInfo(page, limit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current slashing parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20017} and HTTP response
     */
    getSlashingParamsWithHttpInfo() {
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
      let returnType = InlineResponse20017;
      return this.apiClient.callApi(
        '/slashing/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the current slashing parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20017}
     */
    getSlashingParams() {
      return this.getSlashingParamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unjail a jailed validator
     * Send transaction to unjail a jailed validator
     * @param {String} validatorAddr Bech32 validator address
     * @param {module:model/InlineObject9} unjailBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastTxCommitResult} and HTTP response
     */
    unjailValidatorWithHttpInfo(validatorAddr, unjailBody) {
      let postBody = unjailBody;
      // verify the required parameter 'validatorAddr' is set
      if (validatorAddr === undefined || validatorAddr === null) {
        throw new Error("Missing the required parameter 'validatorAddr' when calling unjailValidator");
      }
      // verify the required parameter 'unjailBody' is set
      if (unjailBody === undefined || unjailBody === null) {
        throw new Error("Missing the required parameter 'unjailBody' when calling unjailValidator");
      }

      let pathParams = {
        'validatorAddr': validatorAddr
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
      let returnType = BroadcastTxCommitResult;
      return this.apiClient.callApi(
        '/slashing/validators/{validatorAddr}/unjail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unjail a jailed validator
     * Send transaction to unjail a jailed validator
     * @param {String} validatorAddr Bech32 validator address
     * @param {module:model/InlineObject9} unjailBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastTxCommitResult}
     */
    unjailValidator(validatorAddr, unjailBody) {
      return this.unjailValidatorWithHttpInfo(validatorAddr, unjailBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}