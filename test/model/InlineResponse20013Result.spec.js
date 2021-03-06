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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DexApiNodejs);
  }
}(this, function(expect, DexApiNodejs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DexApiNodejs.InlineResponse20013Result();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20013Result', function() {
    it('should create an instance of InlineResponse20013Result', function() {
      // uncomment below and update the code to test InlineResponse20013Result
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be.a(DexApiNodejs.InlineResponse20013Result);
    });

    it('should have the property notBondedTokens (base name: "not_bonded_tokens")', function() {
      // uncomment below and update the code to test the property notBondedTokens
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be();
    });

    it('should have the property bondedTokens (base name: "bonded_tokens")', function() {
      // uncomment below and update the code to test the property bondedTokens
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be();
    });

    it('should have the property nonBondableTokens (base name: "non_bondable_tokens")', function() {
      // uncomment below and update the code to test the property nonBondableTokens
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be();
    });

    it('should have the property totalSupply (base name: "total_supply")', function() {
      // uncomment below and update the code to test the property totalSupply
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be();
    });

    it('should have the property bondedRatio (base name: "bonded_ratio")', function() {
      // uncomment below and update the code to test the property bondedRatio
      //var instane = new DexApiNodejs.InlineResponse20013Result();
      //expect(instance).to.be();
    });

  });

}));
