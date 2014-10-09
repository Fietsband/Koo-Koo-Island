QUnit.test("making guid", function(assert){
  assert.equal($.guid().length, 4, "should be 4 characters long");
});

QUnit.test("looping through an array", function(assert){
  $.each([1], function(i, j){
    assert.equal(i, 0, "should be 0");
    assert.equal(j, 1, "should be 1");
  });
});
