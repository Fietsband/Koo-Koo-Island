QUnit.test("making guid", function(assert){
  assert.equal($.guid().length, 4, "should be 4 characters long");
});

QUnit.test("looping through an array", function(assert){
  $.each([1], function(i, j){
    assert.equal(i, 0, "should be 0");
    assert.equal(j, 1, "should be 1");
  });
});

QUnit.test("constantize string", function(assert){
  assert.equal($.constantize("#test-test"), "TestTest", "should constantize correctly");
  assert.equal($.constantize(".test-test"), "TestTest", "should constantize correctly");
  assert.equal($.constantize(".test_test"), "TestTest", "should constantize correctly");
  assert.equal($.constantize("hello_test"), "HelloTest", "should constantize correctly");
});
