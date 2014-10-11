QUnit.test("battle engine initialize", function(assert){
  var enemy = new Enemy("tiny-fish");
  var battleEngine = new BattleEngine(enemy);

  assert.deepEqual(battleEngine.enemy, enemy, "battle engine should pass enemy correctly");
});

QUnit.test("player should be able to select skills", function(assert){
  GameData.player.inventory.skills.push({skill: "Drill"});

  var enemy = new Enemy("tiny-fish");
  var battleEngine = new BattleEngine(enemy);

  assert.ok(!battleEngine.skillButton.classList.contains("hide"), "skill button should be enabled");
  GameData.player.inventory.skills = [];
});

QUnit.test("player should be able to select magic", function(assert){
  GameData.player.inventory.magic.push({spell: "Fire"});

  var enemy = new Enemy("tiny-fish");
  var battleEngine = new BattleEngine(enemy);

  assert.ok(!battleEngine.magicButton.classList.contains("hide"), "magic button should be enabled");
  GameData.player.inventory.magic = [];
});

QUnit.test("player should be able to select items", function(assert){
  var enemy = new Enemy("tiny-fish");
  var battleEngine = new BattleEngine(enemy);

  assert.ok(!battleEngine.itemsButton.classList.contains("hide"), "item button should be enabled");
});
