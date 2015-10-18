function test(s, f) {
  if (!f()) {
    throw new Error(s);
  } else {
    console.log("passed");
  }
}

function assert_eq(a, b) {
  return a === b;
}

function assert_not_eq(a, b) {
  return !(a === b);
}

var makeHashTable = function () {
  var bucketLimit = 10;
  var bucket = Array( bucketLimit );

  var makeKeyIndex = function (keyName) {
    var strCharCode = "";
    for (var i = 0; i < keyName.length; i++) {
      strCharCode += keyName.charCodeAt( i );
    };
    return strCharCode % bucketLimit;
  };

  return {
    set: function (keyName, valueName){
      if ( keyName && valueName ) {
        var keyIndex = makeKeyIndex(keyName);
        if ( bucket[keyIndex] ) {
          bucket[ keyIndex ].forEach(function (pair) {
            if ( pair[0] === keyName ) {
              pair[1] = valueName;
              return;
            } else {
              bucket[ keyIndex ].push([ keyName, valueName ]);
              return;
            }
          });
        } else {
          bucket[keyIndex] = [[keyName, valueName ]];      
        }
      }
    },
    get: function (keyName){
      if ( keyName ) {
        var keyIndex = makeKeyIndex(keyName);
        var keyValueName = "";
        if ( bucket[keyIndex] ) {
          bucket[ keyIndex ].forEach(function (pair) {
            if ( pair[0] === keyName ) {
              keyValueName = pair[1];
            }
          });
          return keyValueName;
        } else {
          throw new Error('Key does not exist');
        }
      }
    }
  };
};

test( 'makeHashTable fn should return an object', function () {
  var testObj = {};
  return assert_eq(typeof makeHashTable(), typeof testObj );
});

test( 'makeHashTable fn should return an object with a set method', function () {
  var myHashTable = makeHashTable();
  return assert_eq(typeof myHashTable.set, 'function');
});

test( 'makeHashTable fn should return an object with a get method', function () {
  var myHashTable = makeHashTable();
  return assert_eq(typeof myHashTable.get, 'function');
});

test( 'myHashTable should return the correct value after set and get', function () {
  var myHashTable = makeHashTable();
  myHashTable.set('foo','bar');
  var result = myHashTable.get('foo');
  return assert_eq(result, 'bar');
});