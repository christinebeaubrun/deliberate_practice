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

var Set = function () {
  var collection = [];
  return {
    add: function (arg) {
      if ( arg ) {
        collection.push(arg);
      }
    },
    isMember: function (arg) {
      var isPresent = false;
      if ( arg ) {
        collection.forEach( function ( member ) {
          isPresent = ( member === arg ) ? true : false;
        });
        return isPresent;
      }
    }
  };
};

test( 'should have an add method', function () {
  var set = Set();
  return assert_eq( typeof set.add, "function");
});

test( 'should have an isMember method', function () {
  var set = Set();
  return assert_eq( typeof set.isMember, "function");
});

test( 'should return true if key is member of set', function () {
  var set = Set();
  set.add(7);
  return assert_eq( set.isMember(7), true);
});

test( 'should return false if key is not a member of set', function () {
  var set = Set();
  set.add(8);
  return assert_eq( set.isMember(1), false);
});