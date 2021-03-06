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
 * The BlockIDParts model module.
 * @module model/BlockIDParts
 * @version 3.0
 */
class BlockIDParts {
    /**
     * Constructs a new <code>BlockIDParts</code>.
     * @alias module:model/BlockIDParts
     */
    constructor() { 
        
        BlockIDParts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockIDParts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockIDParts} obj Optional instance to populate.
     * @return {module:model/BlockIDParts} The populated <code>BlockIDParts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockIDParts();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
BlockIDParts.prototype['total'] = undefined;

/**
 * @member {String} hash
 */
BlockIDParts.prototype['hash'] = undefined;






export default BlockIDParts;

