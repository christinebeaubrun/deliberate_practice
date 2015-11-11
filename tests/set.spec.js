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

