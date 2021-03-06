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
 * The InlineObject25 model module.
 * @module model/InlineObject25
 * @version 3.0
 */
class InlineObject25 {
    /**
     * Constructs a new <code>InlineObject25</code>.
     * @alias module:model/InlineObject25
     */
    constructor() { 
        
        InlineObject25.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject25</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject25} obj Optional instance to populate.
     * @return {module:model/InlineObject25} The populated <code>InlineObject25</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject25();

            if (data.hasOwnProperty('base_req')) {
                obj['base_req'] = BaseReq.constructFromObject(data['base_req']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('total_supply')) {
                obj['total_supply'] = ApiClient.convertToType(data['total_supply'], 'String');
            }
            if (data.hasOwnProperty('mintable')) {
                obj['mintable'] = ApiClient.convertToType(data['mintable'], 'String');
            }
            if (data.hasOwnProperty('burnable')) {
                obj['burnable'] = ApiClient.convertToType(data['burnable'], 'String');
            }
            if (data.hasOwnProperty('addr_forbiddable')) {
                obj['addr_forbiddable'] = ApiClient.convertToType(data['addr_forbiddable'], 'String');
            }
            if (data.hasOwnProperty('token_forbiddable')) {
                obj['token_forbiddable'] = ApiClient.convertToType(data['token_forbiddable'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BaseReq} base_req
 */
InlineObject25.prototype['base_req'] = undefined;

/**
 * @member {String} url
 */
InlineObject25.prototype['url'] = undefined;

/**
 * @member {String} description
 */
InlineObject25.prototype['description'] = undefined;

/**
 * @member {String} identity
 */
InlineObject25.prototype['identity'] = undefined;

/**
 * @member {String} name
 */
InlineObject25.prototype['name'] = undefined;

/**
 * @member {String} total_supply
 */
InlineObject25.prototype['total_supply'] = undefined;

/**
 * @member {String} mintable
 */
InlineObject25.prototype['mintable'] = undefined;

/**
 * @member {String} burnable
 */
InlineObject25.prototype['burnable'] = undefined;

/**
 * @member {String} addr_forbiddable
 */
InlineObject25.prototype['addr_forbiddable'] = undefined;

/**
 * @member {String} token_forbiddable
 */
InlineObject25.prototype['token_forbiddable'] = undefined;






export default InlineObject25;

