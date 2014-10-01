QUnit.test(function(assert){
  window.GameData.player.inventory.items = {
    itemTitle: "test",
    identifier: "test123"
  }

  LoadCallbacks.setup_inventory

  assert.equal(window.GameData.)
});
