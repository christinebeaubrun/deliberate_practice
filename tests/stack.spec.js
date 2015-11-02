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

var Stack = function (limit) {
  var defaultLimit = 5;
  var bucket = Array( (limit) ? limit : defaultLimit );
  var BUCKETLIMIT;
  var count = BUCKETLIMIT = ( limit || defaultLimit ) - 1;

  return {
    push: function (num) {
      if ( num ) {
        try {
          if ( count === -1 ) {
            throw new Error();
          } else {
            bucket[ count ] = num;
            count--;
          }
        } catch ( err ) {
          return 'Capacity reached';
        }
      }
    },
    pop: function () {
      var length = bucket.length;
      var val;
      try {
        if ( length > 0 && ( count !== BUCKETLIMIT ) ) {
          count++;
          val = bucket[ count ];
          bucket[ count ] = undefined;
          return val;
        } else {
          throw new Error();
        }
      } catch (err) {
        return 'Stack is empty';
      }
    }
  };
};

test( 'it should return an object with a push method', function () {
  var stack = Stack(3);
  return assert_eq( typeof stack.push, 'function' );
});

test( 'it should return an object with a pop method', function () {
  var stack = Stack(3);
  return assert_eq( typeof stack.pop, 'function' );
});

test( 'it should throw an error when capacity is reached', function () {
  var stack = Stack(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  return assert_eq( stack.push(6), 'Capacity reached' );
} );

test( "it should throw an error when there is nothing to pop", function () {
  var stack = Stack(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  stack.pop();
  stack.pop();
  return assert_eq( stack.pop(), 'Stack is empty' );
});