function boot(){
  $.domReady(setup);
}

function setup(){
  window.currentGame = new Game();
  window.currentGame.initialize();
  window.currentStats = new Stats();
  enableControls();
}

function resetGame(){
  delete window.currentGame;
  delete window.currentStats;
  setup();
}
