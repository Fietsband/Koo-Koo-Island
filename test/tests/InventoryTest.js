QUnit.test("adding potion item", function(assert){
  GameData.player.hp[0] = 5;
  var i = new InventoryItem("Potion to restore 25hp of health", "potion", "items", function(){
    window.Items["potion"].use();
  });

  i.onClickMethod();
  assert.equal(GameData.player.hp[0], 20, "current health should be 30");
});
