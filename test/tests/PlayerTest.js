QUnit.test("setting current player name", function(assert){
  p = new Player();
  p.setName("test");

  assert.equal(p.name, "test", "player name should be test");
});

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
  p1.removeArmorAndWeapons();

  assert.equal(p1.getGraphic(), "<span class=\"armor head\"> o  </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\">/ \\</span>\n", "player graphic should load");
});

QUnit.test("adding a weapon to inventory", function(assert){
  GameData.player.inventory.weapons = [];
  p2 = new Player();
  p2.removeArmorAndWeapons();
  i = new Weapon("spear");
  p2.inventory.addItem("weapons", i);

  assert.equal(GameData.player.inventory.weapons.length, 1, "Should have one weapon in inventory");
});

QUnit.test("setting a weapon to his hand", function(assert){
  p3 = new Player();
  p3.removeArmorAndWeapons();
  i = new Weapon("spear");
  p3.inventory.addItem("weapons", i);
  p3.setCurrentWeapon("spear");

  assert.equal(window.GameData.player.weapon, "spear");
  assert.equal(p3.getGraphic(), "<span class=\"armor head\"> o  </span><span class=\"weapon\">^</span>\n<span class=\"armor body\">/|\\</span><span class=\"weapon\">|</span>\n<span class=\"armor legs\">/ \\</span>\n", "player graphic should load with spear");
  assert.ok(dom.find("#inventory-stash .weapons select option[value='spear']").selected, "should be selected");
});

QUnit.test("setting an armor", function(assert){
  p4 = new Player();
  p4.removeArmorAndWeapons();
  i = new Armor("clown");
  p4.inventory.addItem("armors", i);
  p4.setCurrentArmor("clown");

  assert.equal(window.GameData.player.armor, "clown");
  assert.equal(p4.getGraphic(), "<span class=\"armor head\">&lt;0&gt; </span><span class=\"weapon\"></span>\n<span class=\"armor body\">/[*]\\</span><span class=\"weapon\"></span>\n<span class=\"armor legs\"> / \\</span>\n", "player graphic should load with clown armor");
  assert.ok(dom.find("#inventory-stash .armors select option[value='clown']").selected, "should be selected");
});
