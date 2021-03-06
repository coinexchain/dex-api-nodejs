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
import BaseReq from './BaseReq';

/**
 * The InlineObject17 model module.
 * @module model/InlineObject17
 * @version 3.0
 */
class InlineObject17 {
    /**
     * Constructs a new <code>InlineObject17</code>.
     * @alias module:model/InlineObject17
     */
    constructor() { 
        
        InlineObject17.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject17</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject17} obj Optional instance to populate.
     * @return {module:model/InlineObject17} The populated <code>InlineObject17</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject17();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('withdraw_address')) {
                obj['withdraw_address'] = ApiClient.convertToType(data['withdraw_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject17.prototype['base_req'] = undefined;

/**
 * bech32 encoded address
 * @member {String} withdraw_address
 */
InlineObject17.prototype['withdraw_address'] = undefined;






export default InlineObject17;

