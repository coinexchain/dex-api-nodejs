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
import InlineResponse20046Result from './InlineResponse20046Result';

/**
 * The InlineResponse20046 model module.
 * @module model/InlineResponse20046
 * @version 3.0
 */
class InlineResponse20046 {
    /**
     * Constructs a new <code>InlineResponse20046</code>.
     * @alias module:model/InlineResponse20046
     */
    constructor() { 
        
        InlineResponse20046.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20046</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046} The populated <code>InlineResponse20046</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20046();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = InlineResponse20046Result.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} height
 */
InlineResponse20046.prototype['height'] = undefined;

/**
 * @member {module:model/InlineResponse20046Result} result
 */
InlineResponse20046.prototype['result'] = undefined;






export default InlineResponse20046;
