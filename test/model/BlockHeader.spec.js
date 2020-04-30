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
    instance = new DexApiNodejs.BlockHeader();
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

  describe('BlockHeader', function() {
    it('should create an instance of BlockHeader', function() {
      // uncomment below and update the code to test BlockHeader
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be.a(DexApiNodejs.BlockHeader);
    });

    it('should have the property chainId (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chainId
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property numTxs (base name: "num_txs")', function() {
      // uncomment below and update the code to test the property numTxs
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property lastBlockId (base name: "last_block_id")', function() {
      // uncomment below and update the code to test the property lastBlockId
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property totalTxs (base name: "total_txs")', function() {
      // uncomment below and update the code to test the property totalTxs
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property lastCommitHash (base name: "last_commit_hash")', function() {
      // uncomment below and update the code to test the property lastCommitHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property dataHash (base name: "data_hash")', function() {
      // uncomment below and update the code to test the property dataHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property validatorsHash (base name: "validators_hash")', function() {
      // uncomment below and update the code to test the property validatorsHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property nextValidatorsHash (base name: "next_validators_hash")', function() {
      // uncomment below and update the code to test the property nextValidatorsHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property consensusHash (base name: "consensus_hash")', function() {
      // uncomment below and update the code to test the property consensusHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property appHash (base name: "app_hash")', function() {
      // uncomment below and update the code to test the property appHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property lastResultsHash (base name: "last_results_hash")', function() {
      // uncomment below and update the code to test the property lastResultsHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property evidenceHash (base name: "evidence_hash")', function() {
      // uncomment below and update the code to test the property evidenceHash
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property proposerAddress (base name: "proposer_address")', function() {
      // uncomment below and update the code to test the property proposerAddress
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new DexApiNodejs.BlockHeader();
      //expect(instance).to.be();
    });

  });

}));
