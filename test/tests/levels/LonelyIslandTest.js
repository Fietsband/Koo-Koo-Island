QUnit.module("disable seashell", {
  setup: function(){
    window.LonelyIsland.disableSeashell();
    window.Test.seashell = dom.find("#game-levels #lonely_island #island-seashell");
  },
  teardown: function(){}
});

  QUnit.test("should add a disabled class to the island seashell", function(assert){
    assert.ok(window.Test.seashell.classList.contains("disabled"));
  });

  QUnit.test("should remove the click handler of the seashell", function(assert){
    assert.equal(window.Test.seashell.onclick, null);
  });

  QUnit.test("should empty the graphic of the seashell", function(assert){
    assert.equal(window.Test.seashell.innerHTML, "&nbsp;");
  });

  QUnit.test("should set the hide seashell progress to 1", function(assert){
    assert.equal(GameData.progress.hide_seashell, 1);
  });

QUnit.module("enabling lonely island whirlpool", {
  setup: function(){
    window.LonelyIsland.enableWhirlpool();
    window.Test.whirlpool = dom.find("#game-levels #lonely_island #island-whirlpool");
  },
  teardown: function(){}
});

  QUnit.test("should add a method to the whirlpool", function(assert){
    assert.ok(window.Test.whirlpool.onclick !== null);
  });

  QUnit.test("should add graphic to the whirlpool", function(assert){
    assert.equal(window.Test.whirlpool.innerHTML, "≋");
  });
