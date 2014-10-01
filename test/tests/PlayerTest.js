QUnit.test("setting current player name", function(assert){
  p = new Player();
  p.setName("test");

  assert.equal(p.name, "test", "player name should be test");
});
