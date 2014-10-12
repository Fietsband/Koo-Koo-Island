QUnit.test("disable seashell", function(assert){
  window.LonelyIsland.disableSeashell();

  assert.equal(document.querySelector("#game-levels #island #island-seashell").onclick, null, "there should be no method attached to the click handler");
  assert.equal(document.querySelector("#game-levels #island #island-seashell").innerHTML, "&nbsp;", "there should be no graphic attached to the seashell");
  assert.equal(GameData.progress.hide_seashell, 1, 'should hide seashell to 1');
});
