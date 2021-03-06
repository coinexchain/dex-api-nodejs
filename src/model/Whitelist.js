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
 * The Whitelist model module.
 * @module model/Whitelist
 * @version 3.0
 */
class Whitelist {
    /**
     * Constructs a new <code>Whitelist</code>.
     * @alias module:model/Whitelist
     * @param baseReq {module:model/BaseReq} 
     * @param whitelist {Array.<String>} 
     */
    constructor(baseReq, whitelist) { 
        
        Whitelist.initialize(this, baseReq, whitelist);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseReq, whitelist) { 
        obj['base_req'] = baseReq;
        obj['whitelist'] = whitelist;
    }

    /**
     * Constructs a <code>Whitelist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Whitelist} obj Optional instance to populate.
     * @return {module:model/Whitelist} The populated <code>Whitelist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Whitelist();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('whitelist')) {
                obj['whitelist'] = ApiClient.convertToType(data['whitelist'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
Whitelist.prototype['base_req'] = undefined;

/**
 * @member {Array.<String>} whitelist
 */
Whitelist.prototype['whitelist'] = undefined;






export default Whitelist;

