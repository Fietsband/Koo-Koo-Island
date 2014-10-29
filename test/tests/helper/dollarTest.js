QUnit.module("should pass browser test");

  QUnit.test("should pass this test or all others will make no sense", function(assert){
    assert.ok($.isBrowserCompatible());
  });

QUnit.module("making a guid");

  QUnit.test("making guid", function(assert){
    assert.equal($.guid().length, 4, "should be 4 characters long");
  });

QUnit.module("looping through an array with each");

  QUnit.test("looping through an array", function(assert){
    $.each([1], function(i, j){
      assert.equal(i, 0, "should be 0");
      assert.equal(j, 1, "should be 1");
    });
  });

QUnit.module("constantizing strings");

  QUnit.test("constantize a id string", function(assert){
    assert.equal($.constantize("#test-test"), "TestTest");
  });

  QUnit.test("constantize a class string", function(assert){
    assert.equal($.constantize(".test-test"), "TestTest");
  });

  QUnit.test("constantize a class string with underscore", function(assert){
    assert.equal($.constantize(".test_test"), "TestTest");
  });

  QUnit.test("constantize a string with underscore", function(assert){
    assert.equal($.constantize("hello_test"), "HelloTest");
  });

QUnit.module("freezing objects");

  QUnit.test("freezing an object", function(assert){
    var a = {a: 2};
    $.freeze(a);
    a["a"] = 10;

    assert.equal(a["a"], 2);
  });

  QUnit.test("freezing a multidimensional object", function(assert){
    var a = {a: {b: 3}};
    $.freeze(a);
    a.a.b = 10;

    assert.equal(a.a.b, 3);
  });

QUnit.module();

