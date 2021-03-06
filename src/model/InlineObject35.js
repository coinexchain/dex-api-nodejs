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
 * The InlineObject35 model module.
 * @module model/InlineObject35
 * @version 3.0
 */
class InlineObject35 {
    /**
     * Constructs a new <code>InlineObject35</code>.
     * @alias module:model/InlineObject35
     * @param baseReq {module:model/BaseReq} 
     * @param stock {String} 
     * @param money {String} 
     */
    constructor(baseReq, stock, money) { 
        
        InlineObject35.initialize(this, baseReq, stock, money);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, stock, money) { 
        obj['base_req'] = baseReq;
        obj['stock'] = stock;
        obj['money'] = money;
    }

    /**
     * Constructs a <code>InlineObject35</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject35} obj Optional instance to populate.
     * @return {module:model/InlineObject35} The populated <code>InlineObject35</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject35();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'String');
            }
            if (data.hasOwnProperty('money')) {
                obj['money'] = ApiClient.convertToType(data['money'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject35.prototype['base_req'] = undefined;

/**
 * @member {String} stock
 */
InlineObject35.prototype['stock'] = undefined;

/**
 * @member {String} money
 */
InlineObject35.prototype['money'] = undefined;






export default InlineObject35;

