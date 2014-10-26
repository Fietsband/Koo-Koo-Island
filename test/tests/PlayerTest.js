QUnit.test("buying an item", function(assert){
  p = new Player();
  GameData.player.oysters = 0;
  GameData.player.seashells = 10;
  p.buy("oyster");

  assert.equal(GameData.player.oysters, 1, "player oyster count should be 1");
  assert.equal(GameData.player.seashells, 0, "player seashell count should be 0");
});

QUnit.test("get graphic", function(assert){
  p1 = new Player();
  window.Test.resetStats();

  assert.equal(p1.getGraphic(), " <span class=\"armor head\">o </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\">/ \\</span>\n", "player graphic should load");
});


QUnit.module("player - weapons", {
  setup: function(){
    window.Test.resetStats();
    window.Test.player = new Player();
    window.Test.player.inventory.addItem("weapons", new Weapon("spear"));
    window.Test.player.inventory.setSelectedWeapon("spear");
  },

  teardown: function(){
    window.Test.player.setCurrentWeapon("none");
    window.Test.resetStats();
    delete window.Test.player;
  }
});

  QUnit.test("adding a weapon to inventory", function(assert){
    assert.equal(GameData.player.inventory.weapons.length, 1);
  });

  QUnit.test("setting a weapon to his hand", function(assert){
    assert.equal(window.GameData.player.weapon, "spear");
  });

  QUnit.test("should deal more damage in combat", function(assert){
    assert.equal(window.Test.player.calculateDamage(), 12);
  });

  QUnit.test("weapon graphic", function(assert){
    assert.equal(window.Test.player.getGraphic(), " <span class=\"armor head\">o </span><span class=\"weapon\">^</span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\">|</span>\n<span class=\"armor legs\">/ \\</span>\n");
  });

  QUnit.test("should set spear weapon as selected item", function(assert){
    var spearDom = dom.find("#inventory-stash .weapons select option[value='spear']");

    assert.ok(spearDom.selected);
  });

QUnit.module("player - weapons", {
  setup: function(){
    window.Test.resetStats();
    window.Test.player = new Player();
    window.Test.player.inventory.addItem("armors", new Armor("clown"));
    window.Test.player.inventory.setSelectedArmor("clown");
  },

  teardown: function(){
    window.Test.player.setCurrentArmor("none");
    window.Test.resetStats();
    delete window.Test.player;
  }
});

  QUnit.test("setting an armor", function(assert){
    assert.equal(window.GameData.player.armor, "clown");
  });

  QUnit.test("armor graphic", function(assert){
    assert.equal(
      window.Test.player.getGraphic(),
      " <span class=\"armor head\">&lt;0&gt; </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/[*]\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\"> / \\</span>\n"
    );
  });

  QUnit.test("should set clown armor as selected item", function(assert){
    var clownDom = dom.find("#inventory-stash .armors select option[value='clown']");

    assert.ok(clownDom.selected, "should be selected");
  });

QUnit.module();
