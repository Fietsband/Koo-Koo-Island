function boot(){
  $.domReady(setup);
}

function setup(){
  console.log(window.GameData.player.inventory.items);
  console.log("booty call");
  console.log(window.Game);
  window.currentGame = new Game();
  window.currentGame.initialize();
  window.currentStats = new Stats();
  initializeAutoSaveButton();
  initializeSaveButton();
  initializeLoadButton();
}

function resetGame(){
  delete window.currentGame;
  delete window.currentStats;
  setup();
}
