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
    instance = new DexApiNodejs.TendermintValidator();
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

  describe('TendermintValidator', function() {
    it('should create an instance of TendermintValidator', function() {
      // uncomment below and update the code to test TendermintValidator
      //var instane = new DexApiNodejs.TendermintValidator();
      //expect(instance).to.be.a(DexApiNodejs.TendermintValidator);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new DexApiNodejs.TendermintValidator();
      //expect(instance).to.be();
    });

    it('should have the property pubKey (base name: "pub_key")', function() {
      // uncomment below and update the code to test the property pubKey
      //var instane = new DexApiNodejs.TendermintValidator();
      //expect(instance).to.be();
    });

    it('should have the property votingPower (base name: "voting_power")', function() {
      // uncomment below and update the code to test the property votingPower
      //var instane = new DexApiNodejs.TendermintValidator();
      //expect(instance).to.be();
    });

    it('should have the property proposerPriority (base name: "proposer_priority")', function() {
      // uncomment below and update the code to test the property proposerPriority
      //var instane = new DexApiNodejs.TendermintValidator();
      //expect(instance).to.be();
    });

  });

}));
