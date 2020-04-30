/**
 * CET-Lite for CoinEx Chain
 * A REST interface for state queries, transaction generation and broadcasting.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DexApiNodejs);
  }
}(this, function(expect, DexApiNodejs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DexApiNodejs.BancorInfo();
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

  describe('BancorInfo', function() {
    it('should create an instance of BancorInfo', function() {
      // uncomment below and update the code to test BancorInfo
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be.a(DexApiNodejs.BancorInfo);
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property stock (base name: "stock")', function() {
      // uncomment below and update the code to test the property stock
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property money (base name: "money")', function() {
      // uncomment below and update the code to test the property money
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property initPrice (base name: "init_price")', function() {
      // uncomment below and update the code to test the property initPrice
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxSupply (base name: "max_supply")', function() {
      // uncomment below and update the code to test the property maxSupply
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property stockPrecision (base name: "stock_precision")', function() {
      // uncomment below and update the code to test the property stockPrecision
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxPrice (base name: "max_price")', function() {
      // uncomment below and update the code to test the property maxPrice
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property maxMoney (base name: "max_money")', function() {
      // uncomment below and update the code to test the property maxMoney
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property ar (base name: "ar")', function() {
      // uncomment below and update the code to test the property ar
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property currentPrice (base name: "current_price")', function() {
      // uncomment below and update the code to test the property currentPrice
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property stockInPool (base name: "stock_in_pool")', function() {
      // uncomment below and update the code to test the property stockInPool
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property moneyInPool (base name: "money_in_pool")', function() {
      // uncomment below and update the code to test the property moneyInPool
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

    it('should have the property earliestCancelTime (base name: "earliest_cancel_time")', function() {
      // uncomment below and update the code to test the property earliestCancelTime
      //var instane = new DexApiNodejs.BancorInfo();
      //expect(instance).to.be();
    });

  });

}));
