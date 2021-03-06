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
 * The BlockHeaderVersion model module.
 * @module model/BlockHeaderVersion
 * @version 3.0
 */
class BlockHeaderVersion {
    /**
     * Constructs a new <code>BlockHeaderVersion</code>.
     * @alias module:model/BlockHeaderVersion
     */
    constructor() { 
        
        BlockHeaderVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockHeaderVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeaderVersion} obj Optional instance to populate.
     * @return {module:model/BlockHeaderVersion} The populated <code>BlockHeaderVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockHeaderVersion();

            if (data.hasOwnProperty('block')) {
                obj['block'] = ApiClient.convertToType(data['block'], 'String');
            }
            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} block
 */
BlockHeaderVersion.prototype['block'] = undefined;

/**
 * @member {String} app
 */
BlockHeaderVersion.prototype['app'] = undefined;






export default BlockHeaderVersion;

