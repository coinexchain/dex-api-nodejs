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
    instance = new DexApiNodejs.TallyResult();
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

  describe('TallyResult', function() {
    it('should create an instance of TallyResult', function() {
      // uncomment below and update the code to test TallyResult
      //var instane = new DexApiNodejs.TallyResult();
      //expect(instance).to.be.a(DexApiNodejs.TallyResult);
    });

    it('should have the property yes (base name: "yes")', function() {
      // uncomment below and update the code to test the property yes
      //var instane = new DexApiNodejs.TallyResult();
      //expect(instance).to.be();
    });

    it('should have the property abstain (base name: "abstain")', function() {
      // uncomment below and update the code to test the property abstain
      //var instane = new DexApiNodejs.TallyResult();
      //expect(instance).to.be();
    });

    it('should have the property no (base name: "no")', function() {
      // uncomment below and update the code to test the property no
      //var instane = new DexApiNodejs.TallyResult();
      //expect(instance).to.be();
    });

    it('should have the property noWithVeto (base name: "no_with_veto")', function() {
      // uncomment below and update the code to test the property noWithVeto
      //var instane = new DexApiNodejs.TallyResult();
      //expect(instance).to.be();
    });

  });

}));
