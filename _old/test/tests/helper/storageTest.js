QUnit.test("should be able to store some data", function(assert){
  GameStorage.store("test", "test");

  assert.equal(GameStorage.get("test"), "test", "Stored!");
  assert.equal(GameStorage.keyExists("test"), true, "key exists");
  assert.equal(GameStorage.keyExists("abc"), false, "key exists");
  localStorage.removeItem("test");
})
