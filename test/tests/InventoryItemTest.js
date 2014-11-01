QUnit.test("adding a magic spell", function(assert){
  new InventoryItem("fire", "magic").add();

  assert.equal(dom.find("#inventory-stash .magic.stash a", true).length, 1);
});
