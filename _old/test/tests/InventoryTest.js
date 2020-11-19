QUnit.module("adding potion item", {
  setup: function(){
    GameData.player.hp[0] = 5;
  },

  teardown: function(){
    GameData.player.hp[0] = 20;
  }
});

  QUnit.test("adding potion item", function(assert){
    var i = new InventoryItem("potion", "items");
    i.add();

    i.itemOptions.use();
    assert.equal(GameData.player.hp[0], 20, "current health should be 20");
  });

  QUnit.test("adding elixer item", function(assert){
    var i = new InventoryItem("elixer", "items");

    i.add();
    i.itemOptions.use();
    assert.equal(GameData.player.hp[0], 20, "current health should be 20");
  });

QUnit.module();
