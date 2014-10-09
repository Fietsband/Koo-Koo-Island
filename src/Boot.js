$.domReady(function(){
  window.currentGame = new Game();
  window.currentGame.initialize();
  window.currentStats = new Stats();
  initializeAutoSaveButton();
  initializeSaveButton();
  initializeLoadButton();
});
