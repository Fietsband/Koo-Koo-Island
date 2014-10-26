boot();

QUnit.test("game initialization", function(assert){
  assert.ok(window.currentGame, "Passed!");
});

QUnit.test("game player initialization", function(assert){
  assert.ok(window.currentGame.player, "There should be player attached to the game");
  assert.ok(window.currentGame.player.inventory, "The player should have an inventory");
  assert.ok(window.currentGame.player.inventory.getInventory().items, "Passed!");
  assert.ok(window.currentGame.player.inventory.getInventory().weapons, "Passed!");
  assert.ok(window.currentGame.player.inventory.getInventory().magic, "Passed!");
});

QUnit.test("game levels initialization", function(assert){
  assert.ok(window.currentGame.levels, "Passed");
  assert.ok(window.currentGame.levels.lonely_island, "Passed");
  assert.ok(window.currentGame.levels.underwater_shack, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_first_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_second_level, "Passed");
  assert.ok(window.currentGame.levels.squirrel_city_attic_level, "Passed");
});

QUnit.test("0.3 stats should be initialized", function(assert){
  assert.ok(window.currentStats, "Passed");
});

QUnit.module("loading current items", {
  setup: function(){
    window.Test.resetStats();
    GameData.progress.show_bottle = 1;
    GameData.player.inventory.items.push("map");
    resetGame();
  },

  teardown: function(){
    window.Test.resetStats();
  }
});

  QUnit.test("should add map to inventory", function(assert){
    assert.equal(window.currentGame.player.inventory.getInventory().items[0], "map");
  });

  QUnit.test("should empty the bottle", function(assert){
    assert.equal(dom.find(".message-in-a-bottle .message").innerHTML, "&nbsp;");
  });

QUnit.module("loading current weapon and armor", {
  setup: function(){
    GameData.player.armor = "clown";
    GameData.player.weapon = "spear";
    GameData.player.inventory.armors.push("clown");
    GameData.player.inventory.weapons.push("spear");

    resetGame();
  },

  teardown: function(){
    resetGame();
  }
});

  QUnit.test("it should render correct graphic", function(assert){
    assert.equal(
      window.currentGame.player.getGraphic(),
      " <span class=\"armor head\">&lt;0&gt; </span><span class=\"weapon\">^</span>\n<span class=\"armor body\">/[*]\\</span><span class=\"weapon\">|</span>\n<span class=\"armor legs\"> / \\</span>\n"
    );
  });

  QUnit.test("should set the clown armor as selected", function(assert){
    var clownOption = dom.find("#inventory-stash .armors select option[value='clown']");

    assert.ok(clownOption.selected);
  });

  QUnit.test("should set the spear weapon as selected", function(assert){
    var spearOption = dom.find("#inventory-stash .weapons select option[value='spear']");

    assert.ok(spearOption.selected, "should be selected");
  });

  QUnit.test("the weapon preview should be a spear", function(assert){
    var weaponPreview = document.querySelectorAll("#inventory-stash .weapons .weapon-preview span")[1].innerHTML;

    assert.equal(weaponPreview, "       ^       ");
  });

  QUnit.test("setting current weapon and armor", function(assert){
    var armorPreview = document.querySelectorAll("#inventory-stash .armors .armor-preview span")[1].innerHTML

    assert.equal(armorPreview,    "      /*\\      ", "Should be a clown suite");
  });

QUnit.module();

QUnit.test("grabbing current saved game", function(assert){
  resetGame();

  assert.equal(window.currentGame.getCurrentGame().substr(0,5), "eyJzZ", "should match");
});
