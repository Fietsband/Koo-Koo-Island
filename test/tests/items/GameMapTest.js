QUnit.module("should open the correct map level", {
  setup: function(){
    GameData.player.map = 1;
  },

  teardown: function(){
    GameData.player.map = 0;
    window.currentGame.gameMap.popUp.hide();
  }
});

  QUnit.test("should open the correct map popup", function(assert){
    window.currentGame.gameMap.popUp.show();
    var map = dom.find("#map-popup .inner pre.l1");

    assert.equal(map.style.display, "block");
  });


QUnit.module();
