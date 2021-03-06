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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20028Result model module.
 * @module model/InlineResponse20028Result
 * @version 3.0
 */
class InlineResponse20028Result {
    /**
     * Constructs a new <code>InlineResponse20028Result</code>.
     * @alias module:model/InlineResponse20028Result
     */
    constructor() { 
        
        InlineResponse20028Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20028Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20028Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse20028Result} The populated <code>InlineResponse20028Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20028Result();

            if (data.hasOwnProperty('voting_period')) {
                obj['voting_period'] = ApiClient.convertToType(data['voting_period'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} voting_period
 */
InlineResponse20028Result.prototype['voting_period'] = undefined;






export default InlineResponse20028Result;

