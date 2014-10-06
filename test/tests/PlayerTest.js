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
  p = new Player();

  assert.equal(p.getGraphic().replace(/\s/g, ""), "o/|\\/\\", "player graphic should load");
});

QUnit.test("adding a weapon to inventory", function(assert){
  p = new Player();
  i = new Weapon("spear");
  p.inventory.addItem("weapons", i);

  assert.equal(GameData.player.inventory.weapons.length, 1, "Should have one weapon in inventory");
});

QUnit.test("setting a weapon to his hand", function(assert){
  p = new Player();
  i = new Weapon("spear");
  p.inventory.addItem("weapons", i);
  p.setCurrentWeapon(i);

  assert.equal(p.getGraphic().replace(/\s/g, ""), "", "player graphic should load");
});

QUnit.test("setting an armor", function(assert){
  p = new Player();
  i = new Armor("clown");
  p.inventory.addItem("weapons", i);
  p.setCurrentArmor(i);

  assert.equal(p.getGraphic().replace(/\s/g, ""), "", "player graphic should load");
});
