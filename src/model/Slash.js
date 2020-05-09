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
 * The Slash model module.
 * @module model/Slash
 * @version 3.0
 */
class Slash {
    /**
     * Constructs a new <code>Slash</code>.
     * @alias module:model/Slash
     */
    constructor() { 
        
        Slash.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Slash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Slash} obj Optional instance to populate.
     * @return {module:model/Slash} The populated <code>Slash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Slash();

            if (data.hasOwnProperty('validator')) {
                obj['validator'] = ApiClient.convertToType(data['validator'], 'String');
            }
            if (data.hasOwnProperty('power')) {
                obj['power'] = ApiClient.convertToType(data['power'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('jailed')) {
                obj['jailed'] = ApiClient.convertToType(data['jailed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * bech32 encoded address
 * @member {String} validator
 */
Slash.prototype['validator'] = undefined;

/**
 * Vote power
 * @member {String} power
 */
Slash.prototype['power'] = undefined;

/**
 * @member {String} reason
 */
Slash.prototype['reason'] = undefined;

/**
 * @member {Boolean} jailed
 */
Slash.prototype['jailed'] = undefined;






export default Slash;
