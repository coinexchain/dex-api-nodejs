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
import InlineResponse20013Result from './InlineResponse20013Result';

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 3.0
 */
class InlineResponse20013 {
    /**
     * Constructs a new <code>InlineResponse20013</code>.
     * @alias module:model/InlineResponse20013
     */
    constructor() { 
        
        InlineResponse20013.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = InlineResponse20013Result.constructFromObject(data['result']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} height
 */
InlineResponse20013.prototype['height'] = undefined;

/**
 * @member {module:model/InlineResponse20013Result} result
 */
InlineResponse20013.prototype['result'] = undefined;






export default InlineResponse20013;

