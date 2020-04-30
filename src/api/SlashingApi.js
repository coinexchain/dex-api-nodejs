/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import BroadcastTxCommitResult from '../model/BroadcastTxCommitResult';

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getSigningInfoWithHttpInfo(validatorPubKey) {
      let postBody = null;

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
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/validators/{validatorPubKey}/signing_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get sign info of given validator
     * Get sign info of given validator
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getSigningInfosWithHttpInfo(page, limit) {
      let postBody = null;

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
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/signing_infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get sign info of given all validators
     * Get sign info of all validators
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getSigningInfos(page, limit) {
      return this.getSigningInfosWithHttpInfo(page, limit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current slashing parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
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
      let returnType = Object;

      return this.apiClient.callApi(
        '/slashing/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the current slashing parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastTxCommitResult} and HTTP response
     */
    unjailValidatorWithHttpInfo(body, validatorAddr) {
      let postBody = body;

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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unjail a jailed validator
     * Send transaction to unjail a jailed validator
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastTxCommitResult}
     */
    unjailValidator(body, validatorAddr) {
      return this.unjailValidatorWithHttpInfo(body, validatorAddr)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
