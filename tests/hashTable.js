var expect = chai.expect;

describe( 'makeHashTable', function () {

  it('should return an object with a set function', function () {
    var makeHashTable = require('../js/hashTable-10-04-2015-425p.js');
    var myHashTable = makeHashTable();
    expect( myHashTable ).to.be.an.object;
  });
});