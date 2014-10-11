boot();

QUnit.test("0.0 game initialization", function(assert){
  assert.ok(window.currentGame, "Passed!");
});

QUnit.test("0.1 game player initialization", function(assert){
  assert.ok(window.currentGame.player, "There should be player attached to the game");
  assert.ok(window.currentGame.player.inventory, "The player should have an inventory");
  assert.ok(window.currentGame.player.inventory.getInventory().items, "Passed!");
  assert.ok(window.currentGame.player.inventory.getInventory().weapons, "Passed!");
  assert.ok(window.currentGame.player.inventory.getInventory().magic, "Passed!");
});

QUnit.test("0.2 game levels initialization", function(assert){
  assert.ok(window.currentGame.levels, "Passed");
  assert.ok(window.currentGame.levels.island, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_first_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_second_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_attic_level, "Passed");
});

QUnit.test("0.3 stats should be initialized", function(assert){
  assert.ok(window.currentStats, "Passed");
});

QUnit.test("loading data", function(assert){
  GameData.player.inventory.items.push({itemTitle: "map", identifier: "map"});

  resetGame();

  assert.equal(window.currentGame.player.inventory.getInventory().items[0].itemTitle, "map", "should add map to inventory");
  assert.equal(document.querySelector(".message-in-a-bottle .message").innerHTML, "&nbsp;", "should empty the bottle");

  window.currentGame.player.removeArmorAndWeapons();
});


QUnit.test("setting current weapon and armor", function(assert){
  GameData.player.armor = {identifier: "clown"};
  GameData.player.weapon = {identifier: "spear"};

  resetGame();

  assert.equal(window.currentGame.player.getGraphic(), "<span class=\"armor head\">&lt;0&gt; </span><span class=\"weapon\">^</span>\n<span class=\"armor body\">/[*]\\</span><span class=\"weapon\">|</span>\n<span class=\"armor legs\"> / \\</span>\n", "it should render correct graphic");
  window.currentGame.player.removeArmorAndWeapons();
});
