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
    instance = new DexApiNodejs.StdTxCore();
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

  describe('StdTxCore', function() {
    it('should create an instance of StdTxCore', function() {
      // uncomment below and update the code to test StdTxCore
      //var instane = new DexApiNodejs.StdTxCore();
      //expect(instance).to.be.a(DexApiNodejs.StdTxCore);
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instane = new DexApiNodejs.StdTxCore();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new DexApiNodejs.StdTxCore();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instane = new DexApiNodejs.StdTxCore();
      //expect(instance).to.be();
    });

    it('should have the property signatures (base name: "signatures")', function() {
      // uncomment below and update the code to test the property signatures
      //var instane = new DexApiNodejs.StdTxCore();
      //expect(instance).to.be();
    });

  });

}));
