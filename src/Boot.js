$.domReady(function(){
  window.Game = new Game();
  window.Game.initialize();
  window.Stats = new Stats();
  initializeAutoSaveButton();
  initializeSaveButton();
  initializeLoadButton();
});
