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

var Stack = function (num) {
  var defaultLimit = 5;
  var stack = Array( ( num ) ? num : defaultLimit );
  var STACKCAPACITY; 
  var counter = STACKCAPACITY = stack.length - 1;

  return {
    push: function (num) {
      if ( num && ( counter !== -1 )) {
        stack[ counter ] = num;
        counter--;
      } else {
        return 'Capacity reached';
      }
    },
    pop: function () {
      var val;
      if ( counter === STACKCAPACITY ) {
        return 'Stack is empty';
      } else {
        counter++;
        val = stack[ counter ];
        return val;
      }
    }
  };
};

test( 'stack should have a push function', function () {
  var stack = Stack(3);
  return assert_eq( typeof stack.push, 'function' );
});

test( 'stack should have a pop function', function () {
  var stack = Stack(3);
  return assert_eq( typeof stack.pop, 'function' );
});

test( 'stack should have a fixed capacity on push', function () {
  var stack = Stack(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  return assert_eq( stack.push(4), "Capacity reached" );
});

test( 'stack should return -stack is empty- when empty', function () {
  var stack = Stack(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.pop();
  stack.pop();
  stack.pop();
  return assert_eq( stack.pop(), 'Stack is empty' );
});
