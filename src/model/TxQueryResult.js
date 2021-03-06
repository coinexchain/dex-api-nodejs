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
import KVPair from './KVPair';

/**
 * The TxQueryResult model module.
 * @module model/TxQueryResult
 * @version 3.0
 */
class TxQueryResult {
    /**
     * Constructs a new <code>TxQueryResult</code>.
     * @alias module:model/TxQueryResult
     */
    constructor() { 
        
        TxQueryResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TxQueryResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TxQueryResult} obj Optional instance to populate.
     * @return {module:model/TxQueryResult} The populated <code>TxQueryResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TxQueryResult();

            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], 'String');
            }
            if (data.hasOwnProperty('gas_wanted')) {
                obj['gas_wanted'] = ApiClient.convertToType(data['gas_wanted'], 'String');
            }
            if (data.hasOwnProperty('gas_used')) {
                obj['gas_used'] = ApiClient.convertToType(data['gas_used'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [KVPair]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} logs
 */
TxQueryResult.prototype['logs'] = undefined;

/**
 * @member {String} gas_wanted
 */
TxQueryResult.prototype['gas_wanted'] = undefined;

/**
 * @member {String} gas_used
 */
TxQueryResult.prototype['gas_used'] = undefined;

/**
 * @member {Array.<module:model/KVPair>} tags
 */
TxQueryResult.prototype['tags'] = undefined;






export default TxQueryResult;

