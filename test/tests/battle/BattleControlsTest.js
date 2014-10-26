QUnit.module("battle engine tests", {
  setup: function(){
    window.Test.enemy = new Enemy("btl-tiny-fish");
    window.Test.battleEngine = new BattleControls(window.Test.enemy);
  },

  teardown: function(){
    delete window.Test.enemy;
    delete window.Test.battleEngine;
  }
});

  QUnit.test("battle engine should pass enemy correctly", function(assert){
    assert.deepEqual(window.Test.battleEngine.enemy, window.Test.enemy);
  });

  QUnit.test("player should be able to select skills", function(assert){
    GameData.player.inventory.skills.push({skill: "Drill"});
    window.Test.battleEngine.showButtons();

    assert.ok(!window.Test.battleEngine.skillButton.classList.contains("hide"));
    GameData.player.inventory.skills = [];
  });

  QUnit.test("player should be able to select magic", function(assert){
    GameData.player.inventory.magic.push({spell: "Fire"});
    window.Test.battleEngine.showButtons();

    assert.ok(!window.Test.battleEngine.magicButton.classList.contains("hide"));
    GameData.player.inventory.magic = [];
  });

  QUnit.test("player should be able to select items", function(assert){
    assert.ok(!window.Test.battleEngine.itemsButton.classList.contains("hide"));
  });

QUnit.module();
