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
  assert.ok(window.currentGame.levels.underwater_shack, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_first_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_second_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_attic_level, "Passed");
});

QUnit.test("0.3 stats should be initialized", function(assert){
  assert.ok(window.currentStats, "Passed");
});

QUnit.test("loading current data", function(assert){
  GameData.player.inventory.items.push("map");

  resetGame();

  assert.equal(window.currentGame.player.inventory.getInventory().items[0], "map", "should add map to inventory");
  assert.equal(dom.find(".message-in-a-bottle .message").innerHTML, "&nbsp;", "should empty the bottle");

  window.currentGame.player.removeArmorAndWeapons();
});


QUnit.test("setting current weapon and armor", function(assert){
  GameData.player.armor = "clown";
  GameData.player.weapon = "spear";
  GameData.player.inventory.armors.push("clown");
  GameData.player.inventory.weapons.push("spear");

  resetGame();

  assert.equal(window.currentGame.player.getGraphic(), "<span class=\"armor head\">&lt;0&gt; </span><span class=\"weapon\">^</span>\n<span class=\"armor body\">/[*]\\</span><span class=\"weapon\">|</span>\n<span class=\"armor legs\"> / \\</span>\n", "it should render correct graphic");
  assert.ok(dom.find("#inventory-stash .armors select option[value='clown']").selected, "should be selected");
  assert.ok(dom.find("#inventory-stash .weapons select option[value='spear']").selected, "should be selected");
  assert.equal(document.querySelectorAll("#inventory-stash .weapons .weapon-preview span")[1].innerHTML, "       ^       ", "Should have a spear");
  assert.equal(document.querySelectorAll("#inventory-stash .armors .armor-preview span")[1].innerHTML,    "      /*\\      ", "Should be a clown suite");
  window.currentGame.player.removeArmorAndWeapons();
});

QUnit.test("grabbing current saved game", function(assert){
  resetGame();

  assert.equal(window.currentGame.getCurrentGame().substr(0,5), "eyJzZ", "should match");
});
