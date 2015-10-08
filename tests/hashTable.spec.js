var makeHashTable = require(['./hashTable-10-04-2015-425p'], function (makeHashTable) {
  return makeHashTable;
});

describe( 'makeHashTable', function () {

  it('should return an object with a set function', function () {
    // var makeHashTable = require('../js/hashTable-10-04-2015-425p.js');
    console.log('what is makeHashTable: ', makeHashTable );
    var myHashTable = makeHashTable();
    expect( myHashTable ).to.be.an.false;
  });
});