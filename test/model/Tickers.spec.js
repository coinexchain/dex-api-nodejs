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
    instance = new DexApiNodejs.Tickers();
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

  describe('Tickers', function() {
    it('should create an instance of Tickers', function() {
      // uncomment below and update the code to test Tickers
      //var instane = new DexApiNodejs.Tickers();
      //expect(instance).to.be.a(DexApiNodejs.Tickers);
    });

    it('should have the property market (base name: "market")', function() {
      // uncomment below and update the code to test the property market
      //var instane = new DexApiNodejs.Tickers();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new DexApiNodejs.Tickers();
      //expect(instance).to.be();
    });

    it('should have the property old (base name: "old")', function() {
      // uncomment below and update the code to test the property old
      //var instane = new DexApiNodejs.Tickers();
      //expect(instance).to.be();
    });

  });

}));