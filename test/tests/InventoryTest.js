QUnit.test("adding potion item", function(assert){
  GameData.player.hp[0] = 5;
  var i = new InventoryItem("potion", "items", function(){
    window.Items["potion"].use();
  });
  i.add();

  i.onClickMethod();
  assert.equal(GameData.player.hp[0], 20, "current health should be 20");
});

QUnit.test("adding elixer item", function(assert){
  GameData.player.hp[0] = 0;
  var i = new InventoryItem("elixer", "items", function(){
    window.Items["elixer"].use();
  });

  i.add();
  i.onClickMethod();
  assert.equal(GameData.player.hp[0], 20, "current health should be 20");
});
